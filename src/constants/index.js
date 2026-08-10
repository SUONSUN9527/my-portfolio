import { mobile, backend, creator, web } from "../assets";

// ============================================================
// 个人信息配置 —— 页面上所有文字内容都集中在这个文件里，
// 想改哪里直接改对应字段即可，不需要动其他代码。
// ============================================================

export const profile = {
  // 你的名字（Hero 大标题和导航栏里显示）
  name: "Zhenying",
  // 一句话身份
  role: "Java 后端开发工程师",
  // Hero 区的一句话介绍
  tagline: "专注服务端开发，喜欢把复杂的问题做简单。",
  // 联系方式
  email: "sun9527ak@gmail.com",
  github: "https://github.com/SUONSUN9527",
  wechat: "18371995252",
  // 「关于我」的自我介绍段落
  bio: "我是一名 Java 后端开发者，熟悉 Spring Boot / MyBatis-Plus 技术栈，有真实业务场景下的接口设计与性能优化经验。写代码之外，我在意工程质量与可维护性：小到一次 code review 里的命名讨论，大到持久层框架的整体迁移，都希望交付的东西经得起时间。目前正在寻找后端开发方向的机会。",
};

export const navLinks = [
  { id: "about", title: "关于" },
  { id: "work", title: "经历" },
  { id: "projects", title: "项目" },
  { id: "contact", title: "联系" },
];

// 「关于我」下方的能力方向卡片
const services = [
  { title: "后端服务开发", icon: backend },
  { title: "数据库与性能优化", icon: web },
  { title: "分布式与中间件", icon: mobile },
  { title: "工程化与团队协作", icon: creator },
];

// 技术栈
const technologies = [
  "Java",
  "Spring Boot",
  "Spring Cloud",
  "MyBatis-Plus",
  "MySQL",
  "Redis",
  "Kafka",
  "RabbitMQ",
  "Docker",
  "Linux",
  "Git",
  "JUnit",
];

// 实习经历
const experiences = [
  {
    title: "云平台 · 后端开发实习生",
    company_name: "普渡机器人（深圳）",
    date: "2026.08 — 至今",
    points: [
      "规划 Agentic Workflow：飞书需求解析、方案生成校验与自动发布，并设计知识图谱及公共 Skill 仓库。",
      "规划清洁机器人端云协同：算法回调、任务状态机、指令转发、进度上报和消息推送。",
    ],
  },
  {
    title: "菲律宾业务前台 · 后端开发实习生",
    company_name: "KN GROUP（成都）",
    date: "2026.05 — 2026.08",
    points: [
      "从 0 到 1 建设体验官任务平台：设计 5 张核心表与前后台 30 余个接口，敏感字段加密存储。",
      "设计奖励自动打款链路：定时扫描、异步支付、唯一单号防重、回调更新、超时对账及双渠道通知。",
      "通过条件更新和状态约束解决并发与非法流转；为核心链路补充指标、告警、结构化日志和敏感信息脱敏。",
    ],
  },
];

// ============================================================
// 项目 —— 与 GitHub 仓库直连，可自由扩展，后续加项目就在数组里加一项：
//   · GitHub 项目：{ repo: "用户名/仓库名" } 即可，跳转链接、Star 数、
//     英文简介自动获取；示例图放到 public/projects/ 下，image 填文件名路径；
//   · image 不填时自动用 GitHub 仓库社交卡片兜底；
//   · 非 GitHub 项目：不填 repo，改填 name + source_code_link + image。
// ============================================================
const projects = [
  {
    repo: "SUONSUN9527/AImv",
    category: "GitHub 置顶",
    name: "AImv",
    description:
      "多智能体（Multi-Agent）图片/视频生成平台，仿 Seedance 架构：LLM 任务编排、pgvector 向量检索、生成链路调度。",
    image: "projects/aimv.png",
    tags: [
      { name: "Java", color: "tag-green" },
      { name: "Multi-Agent", color: "tag-rust" },
      { name: "LLM", color: "tag-blue" },
    ],
  },
  {
    repo: "SUONSUN9527/codex-dream-skin-one-click",
    category: "GitHub 置顶",
    name: "Codex Dream Skin",
    description:
      "一键给 Codex Desktop 换肤的 Skill：本地可视化主题画廊，支持上传自定义图片生成主题，中英双语。",
    image: "projects/codex-dream-skin.png",
    tags: [
      { name: "JavaScript", color: "tag-green" },
      { name: "Codex", color: "tag-rust" },
      { name: "macOS", color: "tag-blue" },
    ],
  },
  {
    repo: "SUONSUN9527/pubg-buddy",
    category: "GitHub 置顶",
    name: "PUBG Buddy",
    description:
      "个人 PUBG 桌面战术助手：战绩统计、赛后报告、游戏内地图与队伍追踪悬浮层、遥测数据分析。",
    image: "projects/pubg-buddy.png",
    tags: [
      { name: "TypeScript", color: "tag-green" },
      { name: "Electron", color: "tag-rust" },
      { name: "React", color: "tag-blue" },
    ],
  },
  {
    repo: "SUONSUN9527/AIPulse",
    category: "GitHub 置顶",
    name: "AI Pulse",
    description:
      "全球大模型动态雷达：聚合中美 17 家 AI 实验室的官方更新，实时抓取、向量检索、活跃度看板。",
    image: "projects/aipulse.png",
    tags: [
      { name: "Spring Boot 3", color: "tag-green" },
      { name: "pgvector", color: "tag-rust" },
      { name: "Vue 3", color: "tag-blue" },
    ],
  },
  {
    repo: "SUONSUN9527/job-track",
    category: "GitHub 置顶",
    name: "投递记录 Job Track",
    description:
      "双端同步的求职投递台账：记投递、记过程、记面经，桌面与移动端实时同步，自托管部署。",
    image: "projects/job-track.png",
    tags: [
      { name: "Java", color: "tag-green" },
      { name: "自托管", color: "tag-rust" },
      { name: "多端同步", color: "tag-blue" },
    ],
  },
];

export { services, technologies, experiences, projects };
