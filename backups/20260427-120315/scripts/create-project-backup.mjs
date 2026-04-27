import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const DEFAULT_RETENTION_COUNT = 5;
export const DEFAULT_IGNORED_NAMES = new Set([
  ".git",
  "backups",
  "node_modules"
]);

function isNotFound(error) {
  return Boolean(error) && typeof error === "object" && "code" in error && error.code === "ENOENT";
}

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch (error) {
    if (isNotFound(error)) {
      return false;
    }

    throw error;
  }
}

export function formatTimestamp(date = new Date()) {
  const value = date instanceof Date ? date : new Date(date);

  if (Number.isNaN(value.getTime())) {
    throw new Error("无法生成备份时间戳：收到无效日期。");
  }

  const parts = [
    value.getFullYear(),
    String(value.getMonth() + 1).padStart(2, "0"),
    String(value.getDate()).padStart(2, "0")
  ];
  const time = [
    String(value.getHours()).padStart(2, "0"),
    String(value.getMinutes()).padStart(2, "0"),
    String(value.getSeconds()).padStart(2, "0")
  ];

  return `${parts.join("")}-${time.join("")}`;
}

export async function listProjectEntries(rootDir, ignoredNames = DEFAULT_IGNORED_NAMES) {
  const entries = [];

  async function walk(currentDir) {
    const dirents = await fs.readdir(currentDir, { withFileTypes: true });

    for (const dirent of dirents) {
      if (ignoredNames.has(dirent.name)) {
        continue;
      }

      const absolutePath = path.join(currentDir, dirent.name);

      if (dirent.isDirectory()) {
        await walk(absolutePath);
        continue;
      }

      if (dirent.isFile()) {
        entries.push(path.relative(rootDir, absolutePath));
        continue;
      }

      if (dirent.isSymbolicLink()) {
        throw new Error(`检测到符号链接，当前备份脚本不会静默跳过：${path.relative(rootDir, absolutePath)}`);
      }
    }
  }

  await walk(rootDir);
  entries.sort((left, right) => left.localeCompare(right, "zh-CN"));

  return entries;
}

export async function pruneOldBackups(backupRootDir, retentionCount = DEFAULT_RETENTION_COUNT) {
  if (retentionCount < 1) {
    throw new Error("备份保留数量必须至少为 1。");
  }

  await fs.mkdir(backupRootDir, { recursive: true });

  const dirents = await fs.readdir(backupRootDir, { withFileTypes: true });
  const backupDirectories = dirents
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort((left, right) => right.localeCompare(left, "en"));

  const removedBackups = [];

  for (const directoryName of backupDirectories.slice(retentionCount)) {
    const targetPath = path.join(backupRootDir, directoryName);
    await fs.rm(targetPath, { recursive: true, force: false });
    removedBackups.push(directoryName);
  }

  return removedBackups;
}

export async function createProjectBackup(options = {}) {
  const rootDir = path.resolve(options.rootDir ?? path.join(__dirname, ".."));
  const backupRootDir = path.resolve(options.backupRootDir ?? path.join(rootDir, "backups"));
  const retentionCount = options.retentionCount ?? DEFAULT_RETENTION_COUNT;
  const now = options.now ?? new Date();

  if (retentionCount < 1) {
    throw new Error("备份保留数量必须至少为 1。");
  }

  const projectEntries = await listProjectEntries(rootDir, options.ignoredNames ?? DEFAULT_IGNORED_NAMES);

  if (projectEntries.length === 0) {
    throw new Error("未找到可备份文件，请先确认项目目录中存在站点文件。");
  }

  await fs.mkdir(backupRootDir, { recursive: true });

  const baseBackupName = formatTimestamp(now);
  let backupName = baseBackupName;
  let backupDir = path.join(backupRootDir, backupName);
  let duplicateIndex = 1;

  while (await pathExists(backupDir)) {
    backupName = `${baseBackupName}-${duplicateIndex}`;
    backupDir = path.join(backupRootDir, backupName);
    duplicateIndex += 1;
  }

  await fs.mkdir(backupDir, { recursive: true });

  for (const relativePath of projectEntries) {
    const sourcePath = path.join(rootDir, relativePath);
    const destinationPath = path.join(backupDir, relativePath);

    await fs.mkdir(path.dirname(destinationPath), { recursive: true });
    await fs.copyFile(sourcePath, destinationPath);
  }

  const metadata = {
    backupName,
    createdAt: new Date(now).toISOString(),
    retentionCount,
    fileCount: projectEntries.length,
    files: projectEntries
  };

  await fs.writeFile(
    path.join(backupDir, "backup-metadata.json"),
    `${JSON.stringify(metadata, null, 2)}\n`,
    "utf8"
  );

  const removedBackups = await pruneOldBackups(backupRootDir, retentionCount);

  return {
    backupName,
    backupDir,
    removedBackups,
    fileCount: projectEntries.length
  };
}

async function runFromCommandLine() {
  try {
    const result = await createProjectBackup();
    const removedSummary = result.removedBackups.length > 0
      ? `，已清理旧备份：${result.removedBackups.join("、")}`
      : "";

    console.log(
      `备份完成：${path.relative(process.cwd(), result.backupDir)}（共 ${result.fileCount} 个文件${removedSummary}）`
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`备份失败：${message}`);
    process.exitCode = 1;
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  await runFromCommandLine();
}
