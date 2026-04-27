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
  "AI Agent",
  "Agent评测",
  "摄影与生活记录",
  "实习经历",
  "项目经历",
  "校园经历",
  "生活与爱好",
  "我的支教生活",
  "摄影日常",
  "我的溜达日记",
  "高德地图 - AI Agent业务部",
  "百度 - 大模型产品部",
  "小冰跃动科技有限公司（前微软小冰）",
  "南湖研究院",
  "2025.11 - 2026.03",
  "2025.07 - 2025.11",
  "2025.03 - 2025.07",
  "理性产品人",
  "有温度的推动者",
  "相比“做功能”，我更关注如何让技术真正被人理解、被人使用。",
  "在团队协作中，我更倾向于成为那个连接不同角色、让事情向前推进的人。",
  "在团队中，我往往承担协调与推进的角色——",
  "不是最强势的，但会是那个让事情落地的人。",
  "相比个人突破，我更在意：",
  "让一群人一起把一件事情做好",
  "核心优势",
  "主导评测体系搭建与参与 Agent 架构升级",
  "在复杂协作中承担“连接角色”",
  "在百度与小冰项目中优化 AI 任务链路体验",
  "推动评测分从 66.72 → 83.84",
  "联合算法 / 工程团队推进 20+ 核心问题修复",
  "将首 Token 等待时间降低 70%，提升用户使用流畅度",
  "Vibe Coding",
  "面试大王｜面试记录与复盘网站",
  "特价机票发现平台",
  "个人网站｜自我介绍网站",
  "Cursor 编程",
  "Coze 多模态 Agent搭建",
  "小红书内容生成器",
  "心理视频生成器",
  "校园商业选址智能体",
  "北京邮电大学学生记者团",
  "团委新媒体中心",
  "团委新媒体中心｜副主任",
  "初雪推送",
  "一周 CP",
  "支教视频1.mp4",
  "支教视频2.mp4",
  "支教视频3.mp4",
  "摄影作品1.1.jpg",
  "摄影作品3.1.jpg",
  "摄影作品4.3.jpg",
  "coze图片生成.png",
  "coze视频生成-视频.mp4",
  "洛阳.jpg",
  "贵阳.jpg",
  "海口.jpg",
  "重庆.jpg",
  "贵阳",
  "海口",
  "重庆",
  "What I Learned",
  "把人和事情连接起来",
  "Graph / DAG 并行执行",
  "未登录可用 AI 语音",
  "10+ 项能力优化",
  "屏幕圈画指引",
  "V0 仿真手动控制",
  "主要参与小高老师——高德AI智能助手的能力优化项目",
  "在百度，主要参与文心一言web端超级智能体Xgent的0-1产品设计，包括能力设计、评估、用户体验优化",
  "产品设计、评估体系搭建、工具链路优化、用户体验优化经验",
  "贵州省长顺县罗湖希望小学",
  "支教视频 03",
  "摄影记录 04",
  "摄影",
  "旅行",
  "洛阳",
  "第五届中国移动“梧桐杯”数智创新大赛",
  "SQL",
  "Java",
  "Python",
  "Figma",
  "Axure",
  "PS",
  "PR",
  "Visio",
  "北京赛区 AI 智能体赛道第一名",
  "https://j9t6xysnrc.coze.site/",
  "https://low-cost-seeker-app.nocode.host",
  "https://my.feishu.cn/wiki/X1lPwerPnisAz3kwX0tcllMJnQe?fromScene=spaceOverview",
  "https://cv-xinxinli.vercel.app/"
];

requiredSnippets.forEach((snippet) => {
  assert.ok(html.includes(snippet), `缺少关键信息: ${snippet}`);
});

assert.ok(
  !html.includes("中国信息通信研究院｜产品专员（专有云）"),
  "实习经历模块仍包含中国信息通信研究院条目"
);

assert.ok(
  !html.includes("云标准"),
  "实习经历模块顶部仍残留云标准描述"
);

assert.ok(
  !html.includes("行业标准制定"),
  "实习经历模块说明仍残留行业标准制定描述"
);

assert.ok(
  !html.includes("学历与成长路径"),
  "校园经历模块仍保留学历与成长路径区块"
);

assert.ok(
  !html.includes("北京邮电大学｜计算机科学与技术 - 硕士"),
  "校园经历模块仍保留硕士学历内容"
);

assert.ok(
  !html.includes("北京邮电大学｜电子信息科学与技术（+AI）- 本科"),
  "校园经历模块仍保留本科学历内容"
);

assert.ok(
  !html.includes("围绕校园媒体、内容运营与活动支持，逐步完成从内容执行到组织推进的能力迁移。"),
  "校园经历模块仍保留学生工作分组说明"
);

assert.ok(
  !html.includes("这些经历不只是履历中的阶段，更直接影响了我后来做产品时的协作方式与价值判断。"),
  "校园经历模块仍保留 What I Learned 分组说明"
);

assert.ok(
  !/<h[1-6][^>]*>\s*What I Learned\s*<\/h[1-6]>/.test(html),
  "校园经历模块仍保留独立 What I Learned 区块"
);

assert.ok(
  !/<h[1-6][^>]*>\s*我学到的事\s*<\/h[1-6]>/.test(html),
  "校园经历模块仍保留我学到的事独立标题"
);

assert.equal(
  (html.match(/class="campus-learned-label">What I Learned<\/div>/g) || []).length,
  2,
  "校园经历每段未补充 What I Learned 总结"
);

assert.ok(
  !html.includes("校团委科创实践部｜部门成员"),
  "学生工作模块仍保留科创实践部条目"
);

assert.ok(
  !html.includes("分管青年融媒体中心"),
  "学生工作模块仍保留青年融媒体中心说明"
);

assert.ok(
  !html.includes("个人状态"),
  "生活与爱好模块仍保留旧的个人状态卡片"
);

assert.ok(
  !/<strong>北京<\/strong>/.test(html),
  "旅行时间轴仍保留北京节点"
);

assert.ok(
  !html.includes("这些经历如何连接到现在"),
  "校园经历模块仍保留这些经历如何连接到现在模块"
);

assert.ok(
  !html.includes("Vibe Coding / Coze Agent / 竞赛经历"),
  "项目经历模块仍保留右上角标签"
);

assert.ok(
  !html.includes("学生工作 / 成长收获"),
  "校园经历模块仍保留右上角标签"
);

assert.ok(
  !html.includes("学生工作"),
  "校园经历模块仍保留学生工作文案"
);

assert.ok(
  !html.includes("支教 / 摄影 / 旅行"),
  "生活与爱好模块仍保留右上角标签"
);

assert.ok(
  !html.includes("贵州省长顺县罗湖希望小学｜西部计划大学生支教团成员。"),
  "我的支教生活顶部说明仍保留旧文案"
);

assert.ok(
  !html.includes("把去过的城市整理成一条会继续延长的路线，也预留照片位置记录每次出发时的天气和心情。"),
  "我的溜达日记顶部说明仍未移除"
);

assert.ok(
  !html.includes("支教、摄影和旅行，是我离真实生活最近的三个入口。它们让我一直保留对人、情绪与现场的感受力，也让我在做产品时更在意“具体的人”，而不只是抽象需求。"),
  "生活与爱好导语仍保留旧版长文案"
);

assert.ok(
  !/<div class="campus-reflection">/.test(html),
  "校园经历模块仍保留独立的总结展示区"
);

assert.ok(
  !html.includes('class="strength-index"'),
  "核心优势部分仍保留编号元素"
);

assert.ok(
  !html.includes("👩💻"),
  "首页姓名前仍保留电脑图标"
);

assert.ok(
  html.includes("👩"),
  "首页姓名前缺少人物图标"
);

assert.equal(
  (html.match(/<!DOCTYPE html>/g) || []).length,
  1,
  "HTML 文档头重复"
);

assert.deepEqual(
  Array.from(html.matchAll(/<a href="(#.*?)" class="nav-link/g), (match) => match[1]),
  ["#home", "#experience", "#projects", "#campus", "#life"],
  "导航锚点数量或顺序不正确"
);

assert.deepEqual(
  Array.from(html.matchAll(/<section class="[^"]*" id="([^"]+)"/g), (match) => match[1]),
  ["home", "experience", "projects", "campus", "life"],
  "内容区块数量或顺序不正确"
);

assert.equal(
  (html.match(/class="projects-slide"/g) || []).length,
  3,
  "项目经历轮播页数量不正确"
);

assert.equal(
  (html.match(/data-project-index="/g) || []).length,
  3,
  "项目经历指示器数量不正确"
);

assert.ok(
  html.includes('<div class="date-pill">3 个项目</div>'),
  "Vibe Coding 未更新为 3 个项目"
);

assert.match(
  html,
  /class="projects-showcase-grid projects-showcase-grid--triple"/,
  "Vibe Coding 未切换为三列项目布局"
);

assert.equal(
  (html.match(/class="life-slide"/g) || []).length,
  3,
  "生活与爱好轮播页数量不正确"
);

assert.equal(
  (html.match(/data-life-index="/g) || []).length,
  3,
  "生活与爱好指示器数量不正确"
);

assert.equal(
  (html.match(/class="media-slot campus-inline-shot"/g) || []).length,
  0,
  "校园经历卡内仍保留推送图片占位"
);

assert.ok(
  !html.includes("初雪推送截图"),
  "校园经历仍保留初雪推送图片文案"
);

assert.ok(
  !html.includes("一周CP截图"),
  "校园经历仍保留一周CP图片文案"
);

assert.equal(
  (html.match(/class="media-slot support-video-slot(?: has-video)?"/g) || []).length,
  3,
  "支教视频槽数量不正确"
);

assert.equal(
  (html.match(/<video class="slot-video"/g) || []).length,
  4,
  "页面已接入的视频数量不正确"
);

assert.equal(
  (html.match(/class="photo-stack-card"/g) || []).length,
  3,
  "摄影大图卡片数量不正确"
);

assert.equal(
  (html.match(/class="photo-stack-card"[^>]*data-photo-gallery/g) || []).length,
  3,
  "摄影点击切换的大图卡数量不正确"
);

assert.ok(
  !html.includes("摄影作品2.1.jpg"),
  "摄影记录 02 仍未移除"
);

assert.ok(
  !html.includes("photo-stack-meta"),
  "摄影图片旁的说明文字仍未移除"
);

assert.ok(
  !html.includes("photo-stack-layer"),
  "摄影模块仍保留旧的折叠图片层结构"
);

assert.ok(
  !html.includes("摄影折叠展示"),
  "摄影模块仍保留旧的折叠展示标注"
);

assert.ok(
  !html.includes("项目链接（预留）"),
  "个人网站项目仍保留链接占位文案"
);

assert.equal(
  (html.match(/class="campus-learned-box"/g) || []).length,
  2,
  "校园经历 What I Learned 高亮块数量不正确"
);

assert.equal(
  (html.match(/class="travel-photo-slot(?: has-image)?"/g) || []).length,
  10,
  "旅行时间轴圆形图片占位数量不正确"
);

assert.equal(
  (html.match(/class="media-slot project-media-slot(?: project-media-slot--video)? has-image"/g) || []).length,
  1,
  "Coze 项目图片数量不正确"
);

assert.equal(
  (html.match(/class="media-slot project-media-slot project-media-slot--video has-video"/g) || []).length,
  1,
  "Coze 视频项目数量不正确"
);

assert.ok(
  !html.includes("coze视频生成.png"),
  "Coze 视频模块仍在使用旧图片素材"
);

assert.equal(
  (html.match(/class="travel-photo-slot has-image"/g) || []).length,
  10,
  "旅行时间轴图片未全部填充"
);

assert.ok(
  !html.includes('<div class="travel-photo-slot">02</div>'),
  "旅行时间轴仍保留贵阳数字占位"
);

assert.ok(
  !html.includes('<div class="travel-photo-slot">08</div>'),
  "旅行时间轴仍保留海口数字占位"
);

assert.ok(
  !html.includes("2023.07 - 2024.07"),
  "生活与爱好仍保留支教时间摘要"
);

assert.ok(
  !html.includes("4 张照片"),
  "生活与爱好仍保留摄影摘要"
);

assert.ok(
  !html.includes("10 个地点"),
  "生活与爱好仍保留旅行摘要"
);

assert.ok(
  !html.includes("支教生活1.jpg"),
  "我的支教生活仍在使用旧图片素材"
);

assert.ok(
  !html.includes("摄影作品1.jpg"),
  "我的摄影日常仍在使用旧单图素材"
);

assert.ok(
  !html.includes("横向时间轴"),
  "我的溜达日记仍保留底部标签"
);

assert.ok(
  !html.includes("旅行图片预留"),
  "我的溜达日记仍保留底部旅行图片标签"
);

assert.ok(
  !html.includes("圆形图片占位预留"),
  "我的溜达日记仍保留圆形图片占位文案"
);

assert.ok(
  !html.includes('class="travel-note"'),
  "我的溜达日记仍保留额外的城市说明行"
);

assert.match(
  html,
  /<meta name="viewport" content="width=device-width, initial-scale=1.0">/,
  "缺少移动端 viewport 配置"
);

assert.match(
  html,
  /\.top-nav\s*\{[\s\S]*position:\s*fixed;[\s\S]*top:\s*clamp\(10px, 1\.4vw, 18px\);[\s\S]*right:\s*clamp\(10px, 1\.4vw, 18px\);/,
  "导航栏未按响应式方式固定在右上角"
);

assert.match(
  html,
  /\.top-nav\s*\{[\s\S]*max-width:\s*calc\(100vw - 24px\);[\s\S]*overflow-x:\s*auto;/,
  "导航栏未适配窄窗口"
);

assert.match(
  html,
  /\.nav-link\s*\{[\s\S]*white-space:\s*nowrap;/,
  "导航按钮未防止窄窗口换行"
);

assert.match(
  html,
  /class="home-scroll-container" id="homeScrollContainer"/,
  "缺少整站主滚动容器"
);

assert.match(
  html,
  /body\s*\{[\s\S]*overflow-x:\s*hidden;/,
  "页面外层未切换回纵向滚动模式"
);

assert.match(
  html,
  /\.home-scroll-container\s*\{[\s\S]*width:\s*100%;[\s\S]*display:\s*block;[\s\S]*overflow:\s*visible;[\s\S]*scroll-snap-type:\s*none;/,
  "整站外层容器未切换为纵向文档流"
);

assert.ok(
  !/\.home-scroll-container\s*\{[\s\S]*overflow-x:\s*auto;/.test(html),
  "整站外层容器仍保留横向滚动"
);

assert.match(
  html,
  /\.home-slide\s*\{[\s\S]*width:\s*100%;[\s\S]*height:\s*auto;[\s\S]*min-height:\s*100vh;[\s\S]*overflow:\s*visible;/,
  "页面区块未切换为纵向堆叠布局"
);

assert.match(
  html,
  /\.home-slide\s*\{[\s\S]*opacity:\s*1;[\s\S]*transform:\s*none;/,
  "全屏 slide 可见性样式缺失"
);

assert.match(
  html,
  /--glass-panel:\s*rgba\([^\)]+\);/,
  "缺少统一玻璃态面板变量"
);

assert.match(
  html,
  /--accent-blue:\s*#[0-9a-fA-F]{6};/,
  "缺少统一的高亮蓝色变量"
);

assert.match(
  html,
  /--max-width:\s*1280px;[\s\S]*--page-gutter:\s*clamp\(24px, 3vw, 40px\);[\s\S]*--shell-width:\s*min\(var\(--max-width\), calc\(100vw - \(var\(--page-gutter\) \* 2\)\)\);/,
  "全局内容宽度与桌面端横向留白未统一到新的 spacing 体系"
);

assert.match(
  html,
  /\.section-card\s*\{[\s\S]*background:\s*rgba\(249, 249, 244, 0\.68\);[\s\S]*backdrop-filter:\s*blur\(20px\);/,
  "模块外层卡片未同步为新的浅米白阅读面板"
);

assert.match(
  html,
  /--section-pad-top:\s*clamp\(24px, 2\.8vw, 34px\);[\s\S]*--section-pad-bottom:\s*clamp\(2px, 0\.4vw, 6px\);[\s\S]*--panel-padding:\s*clamp\(16px, 1\.4vw, 20px\);[\s\S]*--card-padding:\s*clamp\(14px, 1\.2vw, 18px\);[\s\S]*--stack-gap:\s*clamp\(14px, 1\.4vw, 20px\);[\s\S]*--grid-gap:\s*clamp\(14px, 1\.4vw, 20px\);/,
  "缺少统一的 section / panel / card spacing 变量"
);

assert.match(
  html,
  /\.edu-card,[\s\S]*\.honor-card\s*\{[\s\S]*background:\s*rgba\(255, 255, 252, 0\.72\);[\s\S]*border:\s*1px solid rgba\(255, 255, 255, 0\.84\);/,
  "模块内层内容卡未同步为新的浅米白卡片样式"
);

assert.match(
  html,
  /\.home-scroll-container\s*\{[\s\S]*background-image:[\s\S]*var\(--hero-image\);/,
  "首页滚动容器未接入统一背景图"
);

assert.match(
  html,
  /\.hero-bg\s*\{[\s\S]*rgba\(249, 250, 244, 0\.50\)[\s\S]*rgba\(244, 246, 241, 0\.92\)[\s\S]*var\(--hero-image\);/,
  "首页背景遮罩未同步为新的浅米白叠层"
);

assert.match(
  html,
  /\.home-scroll-container\s*\{[\s\S]*rgba\(248, 249, 243, 0\.40\)[\s\S]*rgba\(231, 237, 229, 0\.58\)[\s\S]*var\(--hero-image\);/,
  "全站背景未同步为新的浅米白 + 鼠尾草色遮罩"
);

assert.match(
  html,
  /\.content-section\.home-slide::before\s*\{[\s\S]*rgba\(249, 250, 244, 0\.50\)[\s\S]*rgba\(244, 246, 241, 0\.92\)[\s\S]*var\(--hero-image\);/,
  "非首页模块未通过伪元素继承首页同源背景图层"
);

assert.match(
  html,
  /\.hero\.home-slide \.hero-inner\s*\{[\s\S]*grid-template-columns:\s*4fr 6fr;/,
  "首页左右栏比例不是 4:6"
);

assert.match(
  html,
  /class="home-scroll-body"/,
  "缺少首页内容容器"
);

assert.match(
  html,
  /class="home-profile-panel"/,
  "缺少首页左侧个人信息卡"
);

assert.match(
  html,
  /class="home-story-column"/,
  "缺少首页右侧内容卡片容器"
);

assert.match(
  html,
  /@media \(min-width: 1025px\)\s*\{[\s\S]*\.hero\.home-slide \.hero-inner\s*\{[\s\S]*align-items:\s*start;/,
  "桌面端首页仍在强制拉伸模块高度"
);

assert.match(
  html,
  /@media \(min-width: 1025px\)\s*\{[\s\S]*\.home-profile-panel\s*\{[\s\S]*align-self:\s*start;[\s\S]*height:\s*auto;[\s\S]*display:\s*flex;[\s\S]*flex-direction:\s*column;/,
  "桌面端左侧信息卡未恢复为按内容高度展示"
);

assert.match(
  html,
  /@media \(min-width: 1025px\)\s*\{[\s\S]*\.profile-photo\s*\{[\s\S]*width:\s*min\(100%, clamp\(240px, 32vh, 344px\)\);[\s\S]*margin:\s*0;/,
  "桌面端头像尺寸或左对齐方式未按首页要求更新"
);

assert.match(
  html,
  /@media \(min-width: 1025px\)\s*\{[\s\S]*\.home-profile-panel\s*\{[\s\S]*width:\s*min\(100%, clamp\(240px, 32vh, 344px\)\);[\s\S]*align-items:\s*flex-start;/,
  "首页左侧头像与个人信息未统一左对齐"
);

assert.match(
  html,
  /@media \(min-width: 1025px\)\s*\{[\s\S]*\.home-story-column \.story-panel:last-child\s*\{[\s\S]*flex:\s*initial;/,
  "桌面端首页右侧卡片仍在被强制拉伸"
);

assert.match(
  html,
  /@media \(min-width: 1025px\)\s*\{[\s\S]*\.profile-skills\s*\{[\s\S]*margin-top:\s*16px;/,
  "桌面端 Skills 未上移到邮箱下方"
);

assert.match(
  html,
  /@media \(min-width: 1025px\)\s*\{[\s\S]*\.profile-name h1\s*\{[\s\S]*font-size:\s*clamp\(1\.46rem, 0\.64vw \+ 1rem, 1\.94rem\);[\s\S]*\.story-heading h2\s*\{[\s\S]*font-size:\s*clamp\(1\.5rem, 0\.66vw \+ 1rem, 1\.92rem\);/,
  "桌面端首页标题字号未按页面比例优化"
);

assert.match(
  html,
  /@media \(min-width: 1025px\)\s*\{[\s\S]*\.story-panel p\s*\{[\s\S]*font-size:\s*clamp\(0\.94rem, 0\.18vw \+ 0\.9rem, 1rem\);/,
  "桌面端首页正文大小未按页面比例优化"
);

assert.match(
  html,
  /@import url\('https:\/\/fonts\.googleapis\.com\/css2\?family=Libre\+Bodoni[\s\S]*family=Public\+Sans[\s\S]*display=swap'\);/,
  "缺少新的编辑感标题与正文字体引入"
);

assert.match(
  html,
  /function createHeroPlaceholder\(\)/,
  "缺少背景占位图生成函数"
);

assert.match(
  html,
  /function applyHeroBackground\(source\)/,
  "缺少首页背景应用逻辑"
);

assert.match(
  html,
  /function updateExperienceCarousel\(\)/,
  "缺少实习经历轮播状态更新逻辑"
);

assert.match(
  html,
  /function bindExperienceCarousel\(\)/,
  "缺少实习经历轮播绑定逻辑"
);

assert.match(
  html,
  /function updateProjectsCarousel\(\)/,
  "缺少项目经历轮播状态更新逻辑"
);

assert.match(
  html,
  /function bindProjectsCarousel\(\)/,
  "缺少项目经历轮播绑定逻辑"
);

assert.match(
  html,
  /function updateLifeCarousel\(\)/,
  "缺少生活与爱好轮播状态更新逻辑"
);

assert.match(
  html,
  /function bindLifeCarousel\(\)/,
  "缺少生活与爱好轮播绑定逻辑"
);

assert.match(
  html,
  /experienceCarousel\.addEventListener\("scroll", updateExperienceCarousel, \{ passive: true \}\);/,
  "缺少实习经历轮播滚动监听"
);

assert.match(
  html,
  /projectsCarousel\.addEventListener\("scroll", updateProjectsCarousel, \{ passive: true \}\);/,
  "缺少项目经历轮播滚动监听"
);

assert.match(
  html,
  /lifeCarousel\.addEventListener\("scroll", updateLifeCarousel, \{ passive: true \}\);/,
  "缺少生活与爱好轮播滚动监听"
);

assert.match(
  html,
  /bindExperienceCarousel\(\);/,
  "缺少实习经历轮播初始化调用"
);

assert.match(
  html,
  /bindProjectsCarousel\(\);/,
  "缺少项目经历轮播初始化调用"
);

assert.match(
  html,
  /bindLifeCarousel\(\);/,
  "缺少生活与爱好轮播初始化调用"
);

assert.match(
  html,
  /const rootStyle = document\.documentElement\.style;/,
  "缺少全局背景变量设置入口"
);

assert.match(
  html,
  /rootStyle\.setProperty\("--hero-image", source\);/,
  "缺少统一背景图变量写入逻辑"
);

assert.match(
  html,
  /const backgroundCandidates = \["background\.jpg"\];/,
  "背景资源未固定为 background\.jpg"
);

assert.match(
  html,
  /\.content-section\.home-slide::before\s*\{[\s\S]*background-image:[\s\S]*var\(--hero-image\);/,
  "内容模块未通过统一背景伪元素接入背景图"
);

assert.match(
  html,
  /id="experienceCarousel"/,
  "缺少实习经历轮播轨道"
);

assert.match(
  html,
  /id="experiencePrev"[\s\S]*id="experienceNext"/,
  "缺少实习经历左右切换按钮"
);

assert.match(
  html,
  /class="projects-carousel-footer"[\s\S]*id="experiencePrev"[\s\S]*data-experience-index="0"[\s\S]*id="experienceNext"/,
  "实习经历轮播按钮未放置在指示器两侧"
);

assert.match(
  html,
  /id="projectsCarousel"/,
  "缺少项目经历轮播轨道"
);

assert.match(
  html,
  /id="projectsPrev"[\s\S]*id="projectsNext"/,
  "缺少项目经历左右切换按钮"
);

assert.match(
  html,
  /class="projects-carousel-footer"[\s\S]*id="projectsPrev"[\s\S]*id="projectsIndicators"[\s\S]*id="projectsNext"/,
  "项目经历轮播按钮未放置在指示器两侧"
);

assert.match(
  html,
  /id="lifeCarousel"/,
  "缺少生活与爱好轮播轨道"
);

assert.match(
  html,
  /id="lifePrev"[\s\S]*id="lifeNext"/,
  "缺少生活与爱好左右切换按钮"
);

assert.match(
  html,
  /class="projects-carousel-footer"[\s\S]*id="lifePrev"[\s\S]*data-life-index="0"[\s\S]*id="lifeNext"/,
  "生活与爱好轮播按钮未放置在指示器两侧"
);

assert.match(
  html,
  /\.projects-carousel-track\s*\{[\s\S]*scroll-snap-type:\s*x mandatory;/,
  "项目经历轮播未启用横向吸附滚动"
);

assert.match(
  html,
  /\.photo-stack-grid\s*\{[\s\S]*grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\);[\s\S]*\.photo-stack-card\s*\{[\s\S]*aspect-ratio:\s*4 \/ 5;[\s\S]*cursor:\s*pointer;[\s\S]*\.photo-stack-card:hover\s*\{[\s\S]*translateY\(-2px\);/,
  "摄影模块未切换为大图点击展示"
);

assert.match(
  html,
  /\.support-video-slot\s*\{[\s\S]*min-height:\s*clamp\(180px, 18vw, 240px\);[\s\S]*aspect-ratio:\s*4 \/ 5;[\s\S]*\.media-slot\.has-video\s*\{[\s\S]*border-style:\s*solid;[\s\S]*\.slot-video\s*\{[\s\S]*object-fit:\s*cover;/,
  "支教模块未切换为视频展示槽"
);

assert.match(
  html,
  /function bindPhotoGalleries\(\)[\s\S]*button\.dataset\.photoImages[\s\S]*imageNode\.src = images\[nextIndex\][\s\S]*imageNode\.alt = `\$\{label\} 组图 \$\{nextIndex \+ 1\}`;/,
  "摄影模块缺少点击切换下一张的脚本逻辑"
);

assert.match(
  html,
  /\.projects-showcase-grid--triple\s*\{[\s\S]*grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\);/,
  "Vibe Coding 三列布局样式缺失"
);

assert.match(
  html,
  /\.experience-carousel-shell \.exp-card\s*\{[\s\S]*background:\s*rgba\(249, 249, 244, 0\.58\);[\s\S]*backdrop-filter:\s*blur\(18px\);/,
  "实习经历轮播卡片未切换到新的横向展示样式"
);

assert.equal(
  (html.match(/class="experience-focus-card"/g) || []).length,
  12,
  "实习经历重点模块卡片数量不正确"
);

assert.match(
  html,
  /\.experience-overview\s*\{[\s\S]*gap:\s*10px;[\s\S]*\.experience-focus-grid\s*\{[\s\S]*grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\);/,
  "实习经历未切换为摘要 + 重点模块的融合展示"
);

assert.ok(
  !html.includes('class="experience-kpi-grid"'),
  "实习经历仍保留独立的指标卡区块"
);

assert.ok(
  !html.includes('class="experience-kpi"'),
  "实习经历仍保留旧的成果指标卡"
);

assert.ok(
  !html.includes("在高德，我围绕 AI 搜索同时推进评测闭环、Agent 架构升级和增长需求落地，把系统能力提升、问题修复效率和 DAU 目标放在同一条产品链路上推进。"),
  "高德实习摘要仍保留旧版文案"
);

assert.ok(
  !html.includes("在百度，我围绕超级智能体 Xgent 的 0-1 能力规划、长链路体验优化和 Benchmark 体系搭建，持续把“能力可做”转成“任务可交付”。"),
  "百度实习摘要仍保留旧版文案"
);

assert.ok(
  !html.includes("我的实习经历覆盖 AI 搜索、超级智能体、桌面助手与具身智能，重点沉淀了评测设计、架构升级、体验优化与跨团队推进能力。"),
  "实习经历导语仍保留旧版文案"
);

assert.match(
  html,
  /class="travel-timeline travel-timeline-horizontal"/,
  "旅行时间轴未恢复为横向结构"
);

assert.match(
  html,
  /\.travel-timeline-horizontal\s*\{[\s\S]*display:\s*grid;[\s\S]*grid-template-columns:\s*repeat\(5, minmax\(0, 1fr\)\);[\s\S]*grid-template-rows:\s*repeat\(2, auto\);/,
  "旅行时间轴未切换为上下两排布局"
);

assert.match(
  html,
  /\.travel-timeline-item\s*\{[\s\S]*grid-template-columns:\s*84px minmax\(0, 1fr\);[\s\S]*\.travel-photo-slot\s*\{[\s\S]*width:\s*84px;[\s\S]*height:\s*84px;[\s\S]*\.travel-timeline-horizontal\s*\{[\s\S]*--travel-node-size:\s*clamp\(92px, 6vw, 118px\);/,
  "旅行模块图片尺寸未按最新要求放大"
);

assert.match(
  html,
  /\.travel-timeline-horizontal \.travel-timeline-item:nth-child\(6\)\s*\{[\s\S]*grid-column:\s*5;[\s\S]*grid-row:\s*2;/,
  "旅行时间轴第二排起始城市位置不正确"
);

assert.match(
  html,
  /\.travel-timeline-horizontal \.travel-timeline-item:nth-child\(10\)\s*\{[\s\S]*grid-column:\s*1;[\s\S]*grid-row:\s*2;/,
  "旅行时间轴第二排结束城市位置不正确"
);

assert.match(
  html,
  /\.travel-timeline-horizontal \.travel-timeline-item:nth-child\(-n\+4\)::after\s*\{[\s\S]*width:\s*calc\(100% \+ var\(--travel-col-gap\) - var\(--travel-node-size\)\);[\s\S]*border-top:\s*1\.6px solid/,
  "旅行时间轴上排连接线样式缺失"
);

assert.match(
  html,
  /\.travel-timeline-horizontal \.travel-timeline-item:nth-child\(5\)::after\s*\{[\s\S]*border-left:\s*1\.6px solid/,
  "旅行时间轴上下两排衔接线样式缺失"
);

assert.match(
  html,
  /\.travel-timeline-horizontal \.travel-timeline-item:nth-child\(n\+6\):not\(:nth-child\(10\)\)::after\s*\{[\s\S]*border-top:\s*1\.6px solid/,
  "旅行时间轴下排连接线样式缺失"
);

assert.match(
  html,
  /handleWheel[\s\S]*travel-timeline-horizontal/,
  "滚轮逻辑未接入旅行时间轴横向滚动处理"
);

assert.match(
  html,
  /\.life-showcase-card \.projects-showcase-head p\s*\{[\s\S]*max-width:\s*none;[\s\S]*width:\s*100%;/,
  "生活与爱好标题说明未铺满横向空间"
);

assert.ok(
  html.includes("我喜欢用镜头把人物、光线和生活里转瞬即逝的氛围留住，让情绪和现场感继续被保存。"),
  "摄影日常顶部总结文字缺失"
);

assert.ok(
  html.includes("我喜欢记录人物、街角和光线在一天里变化的样子。很多照片未必是“作品”，但它们会帮我留住当时的氛围、关系和心情，也让我继续练习观察细节。"),
  "摄影日常正文总结文字缺失"
);

assert.match(
  html,
  /\.projects-carousel-footer\s*\{[\s\S]*grid-template-columns:\s*auto 1fr auto;[\s\S]*align-items:\s*center;/,
  "轮播底部控制条未水平对齐"
);

assert.match(
  html,
  /\.projects-indicators\s*\{[\s\S]*display:\s*flex;[\s\S]*justify-content:\s*center;[\s\S]*gap:\s*12px;/,
  "轮播指示器容器样式不正确"
);

assert.match(
  html,
  /\.projects-indicator\.active\s*\{[\s\S]*width:\s*30px;[\s\S]*background:\s*var\(--accent-blue\);/,
  "轮播激活态未恢复为简洁状态条样式"
);

assert.match(
  html,
  /\.home-profile-panel\s*\{[\s\S]*background:\s*transparent;[\s\S]*border:\s*0;[\s\S]*box-shadow:\s*none;/,
  "首页左侧个人信息面板未改为透明样式"
);

assert.match(
  html,
  /\.profile-photo\s*\{[\s\S]*border-radius:\s*32px;[\s\S]*box-shadow:[\s\S]*0 24px 54px rgba\(71, 83, 77, 0\.12\)/,
  "首页头像未同步为新的柔和照片卡样式"
);

assert.match(
  html,
  /\.resource-link\s*\{[\s\S]*color:\s*var\(--accent-blue\);/,
  "项目链接按钮未使用蓝色文字"
);

assert.match(
  html,
  /\.resource-link\s*\{[\s\S]*background:\s*transparent;[\s\S]*border:\s*0;[\s\S]*text-decoration:\s*underline;/,
  "项目链接未切换为更易读的文字型链接样式"
);

assert.ok(
  !/\.resource-link::after\s*\{[\s\S]*↗/.test(html),
  "项目链接按钮仍保留箭头"
);

assert.match(
  html,
  /\.content-section\.home-slide\s*\{[\s\S]*align-items:\s*flex-start;/,
  "内容模块外层容器仍在强制拉伸"
);

assert.match(
  html,
  /#projects\.home-slide \.section-lead,[\s\S]*#campus\.home-slide \.section-lead,[\s\S]*#life\.home-slide \.section-lead\s*\{[\s\S]*max-width:\s*none;[\s\S]*width:\s*100%;/,
  "项目、校园和生活模块标题下导语未铺满文本框"
);

assert.match(
  html,
  /\.content-section\.home-slide\s*\{[\s\S]*min-height:\s*auto;[\s\S]*padding:\s*var\(--section-pad-top\) var\(--page-gutter\) var\(--section-pad-bottom\);[\s\S]*\.content-section\.home-slide \.section-card\s*\{[\s\S]*width:\s*var\(--shell-width\);[\s\S]*height:\s*auto;[\s\S]*max-height:\s*none;[\s\S]*padding:\s*var\(--panel-padding\);[\s\S]*overflow:\s*visible;/,
  "内容区外层 section 未恢复为按内容自适应的连续排布"
);

assert.match(
  html,
  /\.content-stack\s*\{[\s\S]*gap:\s*var\(--stack-gap\);[\s\S]*\.info-grid,[\s\S]*\.campus-grid\s*\{[\s\S]*gap:\s*var\(--grid-gap\);[\s\S]*\.projects-showcase-grid\s*\{[\s\S]*gap:\s*var\(--grid-gap\);/,
  "模块内部内容块和卡片网格间距未统一到新的 spacing 体系"
);

assert.match(
  html,
  /#campus\.home-slide \.story-grid\s*\{[\s\S]*grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\);[\s\S]*#projects\.home-slide \.projects-showcase-grid\s*\{[\s\S]*grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\);[\s\S]*#projects\.home-slide \.projects-showcase-grid--triple\s*\{[\s\S]*grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\);/,
  "校园与项目模块未恢复更具横向展示感的桌面端布局"
);

assert.match(
  html,
  /#experience\.home-slide \.section-side\s*\{[\s\S]*display:\s*none;/,
  "实习经历顶部辅助标签未隐藏"
);

assert.match(
  html,
  /\.section-scroll-body\s*\{[\s\S]*flex:\s*0 1 auto;[\s\S]*overflow:\s*visible;[\s\S]*padding-right:\s*0;/,
  "内容模块内部仍未恢复为按内容自然展开"
);

assert.match(
  html,
  /@media \(max-width: 1024px\)/,
  "缺少平板与窄窗口响应式断点"
);

assert.match(
  html,
  /@media \(max-width: 1024px\)\s*\{[\s\S]*:root\s*\{[\s\S]*--page-gutter:\s*clamp\(20px, 4vw, 28px\);[\s\S]*--section-pad-top:\s*clamp\(20px, 3\.6vw, 28px\);[\s\S]*--section-pad-bottom:\s*6px;[\s\S]*--panel-padding:\s*clamp\(16px, 2vw, 18px\);[\s\S]*--card-padding:\s*clamp\(14px, 1\.8vw, 16px\);[\s\S]*--grid-gap:\s*14px;[\s\S]*\.photo-stack-grid\s*\{[\s\S]*grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\);[\s\S]*\.experience-focus-grid\s*\{[\s\S]*grid-template-columns:\s*1fr;/,
  "平板端 spacing 变量未收敛到更紧凑的范围"
);

assert.match(
  html,
  /function scrollToSlide\(targetId\)/,
  "缺少导航切换对应 slide 的逻辑"
);

assert.match(
  html,
  /function updateActiveNav\(\)/,
  "缺少滚动导航高亮逻辑"
);

assert.match(
  html,
  /function updateActiveNav\(\)[\s\S]*const activationLine = window\.scrollY \+ \(topNav \? topNav\.getBoundingClientRect\(\)\.height : 0\) \+ 28[\s\S]*section\.offsetTop/,
  "导航高亮逻辑未切换为基于顶部落点的纵向页面判断"
);

assert.match(
  html,
  /function handleWheel\(event\)/,
  "缺少模块内横向滚轮增强逻辑"
);

assert.match(
  html,
  /homeScrollContainer\.addEventListener\("wheel", handleWheel, \{ passive: false \}\);/,
  "缺少滚轮事件绑定"
);

assert.match(
  html,
  /window\.scrollTo\(\{[\s\S]*top:\s*Math\.max\(0, targetTop\),[\s\S]*behavior:\s*"smooth"[\s\S]*\}\);/,
  "缺少导航平滑切换到对应区块顶部的逻辑"
);

assert.ok(
  !/homeScrollContainer\.scrollLeft \+=/.test(html),
  "整站外层仍保留横向滚动位移逻辑"
);

assert.match(
  html,
  /event\.preventDefault\(\);\s*horizontalCarousel\.scrollLeft \+=/,
  "模块内横向轮播缺少滚轮位移逻辑"
);

assert.ok(
  !html.includes("!event.deltaX && !event.shiftKey && canScrollHorizontally(horizontalCarousel, event.deltaY)"),
  "横向轮播仍在使用纵向滚轮强制劫持左右滑动"
);

assert.match(
  html,
  /@media \(max-width: 760px\)/,
  "缺少移动端响应式样式"
);

assert.match(
  html,
  /@media \(max-width: 760px\)\s*\{[\s\S]*:root\s*\{[\s\S]*--page-gutter:\s*16px;[\s\S]*--section-pad-top:\s*16px;[\s\S]*--section-pad-bottom:\s*4px;[\s\S]*--panel-padding:\s*14px 14px;[\s\S]*--card-padding:\s*14px 14px;/,
  "移动端左右留白未收敛到 16px 级别的 spacing 体系"
);

assert.match(
  html,
  /@media \(max-width: 760px\)\s*\{[\s\S]*\.photo-stack-grid\s*\{[\s\S]*grid-template-columns:\s*1fr;[\s\S]*\.support-video-slot\s*\{[\s\S]*min-height:\s*220px;/,
  "移动端摄影大图或支教视频槽未同步收敛"
);

assert.match(
  html,
  /@media \(max-width: 760px\)\s*\{[\s\S]*\.travel-timeline-horizontal\s*\{[\s\S]*--travel-node-size:\s*68px;[\s\S]*\.travel-timeline-horizontal \.travel-timeline-item\s*\{[\s\S]*min-height:\s*calc\(var\(--travel-node-size\) \+ 40px\);/,
  "移动端旅行时间轴图片尺寸未同步放大"
);

assert.match(
  html,
  /@media \(max-width: 760px\)\s*\{[\s\S]*\.content-section\.home-slide\s*\{[\s\S]*padding:\s*var\(--section-pad-top\) var\(--page-gutter\) var\(--section-pad-bottom\);[\s\S]*\.content-section\.home-slide \.section-card\s*\{[\s\S]*width:\s*var\(--shell-width\);[\s\S]*max-height:\s*none;/,
  "移动端内容模块未恢复为按内容展开的布局"
);

assert.match(
  html,
  /\.campus-intro-panel\s*\{[\s\S]*padding:\s*16px 18px;[\s\S]*\.campus-learned-box\s*\{[\s\S]*padding:\s*14px 16px;/,
  "校园经历缺少新的导语面板或 What I Learned 高亮样式"
);

assert.match(
  html,
  /const avatarCandidates = \["avatar\.png", "avatar\.jpg", "avatar\.jpeg"\];/,
  "头像探测优先级不符合要求"
);

assert.match(
  html,
  /function probeAssetSource\(sources, onSuccess, onFailure\)/,
  "缺少静态资源优先级探测函数"
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

assert.match(
  html,
  /event\.target\.closest\("\.section-scroll-body, \.home-scroll-body"\)/,
  "缺少局部滚动区域判断逻辑"
);

assert.ok(
  !/<img class="profile-photo-image"[^>]*\ssrc=/.test(html),
  "头像 src 不应在 HTML 中硬编码"
);

assert.match(
  html,
  /window\.addEventListener\("scroll", handleScroll, \{ passive: true \}\);/,
  "缺少整页纵向滚动监听逻辑"
);

assert.ok(
  !/homeScrollContainer\.addEventListener\("scroll", handleScroll, \{ passive: true \}\);/.test(html),
  "外层容器仍保留旧的横向滚动监听"
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

const htmlWithoutUrls = html.replace(/https?:\/\/[^\s"'<>]+/g, "");

forbiddenVisibleSnippets.forEach((snippet) => {
  assert.ok(!htmlWithoutUrls.includes(snippet), `存在与当前简历无关的旧文案: ${snippet}`);
});

console.log("resume site verification passed");
