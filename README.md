# 洛谷保存站帮助中心

本仓库承载 <https://laikit.dev>，内容包括洛谷保存站的使用指南、功能说明、开发文档、政策与项目历史。

仓库由原 `laikit-dev/docs` 重命名而来，完整保留帮助中心自 2025-08-27 起的 Git 历史。现役保存站源码位于 <https://github.com/laikit-dev/luogu-saver>。

## 本地开发

```bash
pnpm install
pnpm run docs:dev
```

## 构建与预览

```bash
pnpm run docs:build
pnpm run docs:preview
```

VitePress 生产产物位于 `.vitepress/dist`。推送到 `main` 后，GitHub Actions 构建并部署 GitHub Pages；自定义域名由 `public/CNAME` 指定为 `laikit.dev`。

## 内容结构

- `index.md`：帮助中心首页；
- `docs/start`、`docs/guide`：上手与日常使用；
- `docs/features`：文章广场、RAG、陶片放逐、通知和统计；
- `docs/account`：现役 OAuth 与旧账号机制档案；
- `docs/license`：隐私、免责声明和数据移除；
- `docs/dev`、`docs/build`：架构、构建与贡献；
- `docs/update.md`：经 Git 与旧日志重建的项目历史。

## 贡献要求

修改前请阅读 [`docs/dev/docs.md`](docs/dev/docs.md)。所有现役功能说明都应能对应当前代码、`spec/`、README 或可定位的 Git 历史；旧资料必须明确标记为历史，不得把密钥、Cookie、Token、生产数据或删除申请中的个人信息提交到仓库。

提交前至少运行：

```bash
pnpm run docs:build
```
