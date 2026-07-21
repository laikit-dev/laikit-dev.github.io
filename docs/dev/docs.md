# 为帮助中心做出贡献

帮助中心源码位于 <https://github.com/laikit-dev/laikit-dev.github.io>，部署域名是 <https://laikit.dev>。

## 本地预览

```bash
git clone https://github.com/laikit-dev/laikit-dev.github.io.git
cd laikit-dev.github.io
pnpm install
pnpm run docs:dev
```

生产构建：

```bash
pnpm run docs:build
pnpm run docs:preview
```

## 内容原则

### 事实优先

每一条功能说明应至少来自以下一种证据：

- 当前保存站界面和源码；
- `spec/*.spec.md`；
- README、配置 schema 或公开 API；
- 可定位的 Git 提交；
- 维护者明确发布的公告。

不要把计划、注释中的 TODO、关闭的菜单、未部署代码或旧站截图写成现役功能。

### 区分历史证据

2025-08 至 10 月的旧版时间线主要来自人工维护的更新日志；2025-11 之后的现役代码史可以由当前 Git 仓库复核。补充历史时必须保留这个证据边界。

### 面向任务写作

普通用户页面先回答“如何完成”，再解释实现。开发文档可以给出文件路径、协议和数据流，但不要复制整段源码或容易漂移的内部实现。

### 不复制敏感信息

示例必须使用占位符。不要提交真实 Token、Cookie、OAuth secret、数据库密码、模型 key、生产 IP 或删除申请中的个人信息。

## 目录约定

- `docs/start/`：上手和 FAQ；
- `docs/guide/`：日常使用；
- `docs/features/`：独立功能；
- `docs/account/`：登录与历史账号机制；
- `docs/license/`：政策和法律说明；
- `docs/dev/`、`docs/build/`：开发者内容；
- `docs/special/`：贡献者、资料来源和统计；
- `docs/update.md`：项目历史与更新日志。

新增页面后同步 `.vitepress/config.mjs` 的侧边栏，并保证站内链接使用无扩展名路径。

## Markdown

帮助中心使用 VitePress Markdown，支持：

- 标题锚点和自动目录；
- `::: info`、`tip`、`warning`、`danger`、`details` 容器；
- 表格、任务列表和代码高亮；
- Vue 组件与 `<script setup>`，但应只在 Markdown 无法清晰表达时使用。

完整语法见 [VitePress Markdown 指南](https://vitepress.dev/guide/markdown)。

## 提交前检查

1. `pnpm run docs:build` 成功；
2. 没有失效内部链接；
3. 新页面已进入导航；
4. 桌面与移动侧边栏可用；
5. 域名统一为 `laikit.dev`；
6. GitHub 仓库链接使用现役组织和分支；
7. 历史资料明确标注，不冒充当前步骤；
8. 没有无依据的承诺、百分比或处理时限。
