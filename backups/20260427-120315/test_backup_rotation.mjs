import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { createProjectBackup } from "./scripts/create-project-backup.mjs";

async function ensureFile(filePath, content) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, "utf8");
}

const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), "resume-site-backup-"));

try {
  await ensureFile(path.join(tempRoot, "index.html"), "<!DOCTYPE html><title>resume</title>");
  await ensureFile(path.join(tempRoot, "个人网站.md"), "# 个人网站\n");
  await ensureFile(path.join(tempRoot, "doc_auto", "resume-site.md"), "# 说明\n");
  await ensureFile(path.join(tempRoot, "assets", "photo.jpg"), "fake-image");
  await ensureFile(path.join(tempRoot, ".git", "config"), "[core]\nrepositoryformatversion = 0\n");
  await ensureFile(path.join(tempRoot, "backups", "legacy", "old.txt"), "legacy backup");

  const createdBackups = [];

  for (let index = 0; index < 6; index += 1) {
    const backupResult = await createProjectBackup({
      rootDir: tempRoot,
      now: new Date(Date.UTC(2026, 3, index + 1, 1, 2, 3))
    });

    createdBackups.push(backupResult.backupName);
  }

  const backupsRoot = path.join(tempRoot, "backups");
  const retainedDirectories = (await fs.readdir(backupsRoot, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort();

  assert.equal(retainedDirectories.length, 5, "备份目录未限制为最近 5 份");
  assert.deepEqual(
    retainedDirectories,
    createdBackups.slice(1),
    "未按时间顺序保留最近 5 份备份"
  );

  const latestBackupName = createdBackups.at(-1);
  const latestBackupDir = path.join(backupsRoot, latestBackupName);
  const latestMetadataPath = path.join(latestBackupDir, "backup-metadata.json");
  const latestMetadata = JSON.parse(await fs.readFile(latestMetadataPath, "utf8"));

  assert.equal(latestMetadata.retentionCount, 5, "元数据中的保留数量不正确");
  assert.ok(latestMetadata.files.includes("index.html"), "备份未包含站点主文件");
  assert.ok(latestMetadata.files.includes(path.join("assets", "photo.jpg")), "备份未包含资源文件");
  assert.ok(!latestMetadata.files.includes(path.join(".git", "config")), "备份错误包含 .git 目录");
  assert.ok(
    !latestMetadata.files.some((filePath) => filePath.startsWith("backups")),
    "备份错误包含旧备份目录"
  );

  const copiedHtml = await fs.readFile(path.join(latestBackupDir, "index.html"), "utf8");
  assert.match(copiedHtml, /resume/, "最新备份中缺少 index.html 内容");

  await assert.rejects(
    () => fs.access(path.join(backupsRoot, createdBackups[0])),
    { code: "ENOENT" },
    "最旧备份未被清理"
  );

  console.log("backup rotation verification passed");
} finally {
  await fs.rm(tempRoot, { recursive: true, force: true });
}
