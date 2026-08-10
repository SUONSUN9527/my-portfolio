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
      "参与组内 Agentic Workflow 前期技术方案设计（当前处于需求分析与方案设计阶段）：围绕飞书 Client 需求文档结构化解析、技术方案规范化生成与质量校验，规划飞书云文档 / TAPD 自动发布链路；同步设计服务知识图谱与公共 Skill 仓库，支持业务场景及故障诊断经验的持续沉淀、检索与复用，降低多轮对话重复加载上下文的 Token 开销。",
      "参与商用清洁机器人端云协同系统后端技术方案设计（当前处于需求分析与方案设计阶段）：面向视频定位、位置确认、导航清洁及任务报告业务闭环，负责规划算法结果回调、任务状态机、机器人任务指令转发、执行进度上报与消息推送等核心链路，设计端云异步交互及任务状态流转方案，支撑 App、定位算法与机器人执行端协同。",
    ],
  },
  {
    title: "菲律宾业务前台 · 后端开发实习生",
    company_name: "KN GROUP（成都）",
    date: "2026.05 — 2026.08",
    points: [
      "参与体验官任务平台从 0 到 1 的后端建设，负责核心表设计（任务、用户、领取记录、白名单等 5 张表）与前后台 30 余个接口开发：App 端实现资格申请、任务大厅、任务领取、奖励申领、收款账户管理；管理端实现任务发布/编辑/下线、白名单定向投放、审核发奖；手机号、银行卡等敏感字段加密存储，完成两端业务闭环。",
      "对接支付部门实现奖励自动打款：打款单先落库、定时任务扫描、异步调用支付接口；以「业务名+任务+用户」生成唯一单号防止重复打款，回调更新状态，超时订单由对账任务主动查单兜底；打款成功后经 Push 与短信双渠道通知用户到账。",
      "参与处理业务问题：包括任务人数满额、修改等并发问题、用户任务状态非法流转、接口字段契约不一致、数据库时间与应用时间不一致等问题，通过条件更新、主动推送状态、统一接口契约来提升系统稳定性。",
      "参与监控与日志设计：围绕入口、任务大厅、领取任务、申领奖励等核心链路设计指标与告警；补充下游调用前后、成功失败、耗时的结构化日志，统一脱敏手机号、银行卡、token 等敏感信息，支撑线上问题快速定位。",
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
