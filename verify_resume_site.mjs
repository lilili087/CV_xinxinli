import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const htmlPath = path.join(__dirname, "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const requiredSnippets = [
  "李新新",
  "18801071575",
  "xinxinli087@163.com",
  "AI产品经理",
  "学历背景",
  "实习经历",
  "作品集",
  "个人能力",
  "荣誉奖项",
  "高德地图 - AI Agent业务部",
  "百度 - 大模型产品部",
  "小冰跃动科技有限公司（前微软小冰）",
  "北京邮电大学｜计算机科学与技术 - 硕士",
  "北京邮电大学｜电子信息科学与技术（+AI）- 本科",
  "第五届中国移动“梧桐杯”数智创新大赛",
  "SQL",
  "Java",
  "Python",
  "Figma",
  "Axure",
  "Ps",
  "Pr",
  "visio",
  "北京赛区 AI 智能体赛道第一名"
];

requiredSnippets.forEach((snippet) => {
  assert.ok(html.includes(snippet), `缺少关键信息: ${snippet}`);
});

assert.equal(
  (html.match(/<!DOCTYPE html>/g) || []).length,
  1,
  "HTML 文档头重复"
);

assert.deepEqual(
  Array.from(html.matchAll(/href="(#.*?)"/g), (match) => match[1]),
  ["#home", "#education", "#experience", "#portfolio", "#skills", "#honors"],
  "导航锚点数量或顺序不正确"
);

assert.deepEqual(
  Array.from(html.matchAll(/<section class="[^"]*" id="([^"]+)"/g), (match) => match[1]),
  ["home", "education", "experience", "portfolio", "skills", "honors"],
  "内容区块数量或顺序不正确"
);

assert.match(
  html,
  /<meta name="viewport" content="width=device-width, initial-scale=1.0">/,
  "缺少移动端 viewport 配置"
);

assert.match(
  html,
  /\.top-nav\s*\{[\s\S]*position:\s*fixed;[\s\S]*top:\s*18px;[\s\S]*right:\s*18px;/,
  "导航栏未固定在右上角"
);

assert.match(
  html,
  /\.hero\s*\{[\s\S]*height:\s*255vh;/,
  "首页未设置滚动展示高度"
);

assert.match(
  html,
  /showcase-window/,
  "缺少首页滚动展示窗口"
);

assert.match(
  html,
  /home-slide/,
  "缺少首页滚动展示卡片"
);

assert.match(
  html,
  /function createHeroPlaceholder\(\)/,
  "缺少背景占位图生成函数"
);

assert.match(
  html,
  /heroBg\.style\.backgroundImage =/,
  "缺少首页背景占位图应用逻辑"
);

assert.match(
  html,
  /function updateHeroShowcase\(\)/,
  "缺少首页滚动展示更新逻辑"
);

assert.match(
  html,
  /function updateActiveNav\(\)/,
  "缺少滚动导航高亮逻辑"
);

assert.match(
  html,
  /@media \(max-width: 760px\)/,
  "缺少移动端响应式样式"
);

assert.match(
  html,
  /const avatarCandidates = \["avatar\.png", "avatar\.jpg", "avatar\.jpeg"\];/,
  "头像探测优先级不符合要求"
);

assert.match(
  html,
  /function probeAvatarSource\(sources, onSuccess, onFailure\)/,
  "缺少头像优先级探测函数"
);

assert.match(
  html,
  /avatarImage\.src = source;/,
  "缺少头像加载赋值逻辑"
);

assert.match(
  html,
  /avatarFrame\.classList\.remove\("loaded"\);/,
  "缺少头像加载失败占位处理"
);

assert.ok(
  !/<img class="avatar-image"[^>]*\ssrc=/.test(html),
  "头像 src 不应在 HTML 中硬编码"
);

assert.match(
  html,
  /window\.addEventListener\("scroll", handleScroll, \{ passive: true \}\);/,
  "缺少滚动监听逻辑"
);

assert.match(
  html,
  /scroll-behavior: smooth;/,
  "缺少平滑滚动配置"
);

const forbiddenVisibleSnippets = [
  "Resume Site",
  "Deep Dark Portfolio",
  "Overview",
  "Work Experience",
  "Capabilities",
  "Honors",
  "Phone",
  "Email",
  "Bento Layout"
];

forbiddenVisibleSnippets.forEach((snippet) => {
  assert.ok(!html.includes(snippet), `存在与当前简历无关的旧文案: ${snippet}`);
});

console.log("resume site verification passed");
