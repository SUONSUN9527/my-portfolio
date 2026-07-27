# 个人主页 · Zhenying

3D 交互个人简历页：React + Three.js（react-three-fiber）+ Tailwind CSS + Framer Motion。

- 整屏吸附滚动，每个模块独立入场动画
- 可 360° 拖拽的 3D 场景（首屏电脑桌 / 联系区敲代码的程序员）
- 项目卡片与 GitHub 仓库直连，Star 数实时获取
- 内容集中在 `src/constants/index.js`，替换文字即可复用

基于 [adrianhajdin/project_3D_developer_portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio) 深度改造：浅色主题、中文化、吸附滚动、坐姿人物动画、仓库直连项目卡等。

## 本地运行

```bash
npm install --legacy-peer-deps
npm run dev
```

## 部署

推送到 main 分支后，GitHub Actions 自动构建并发布到 GitHub Pages。
