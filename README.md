# laikit-dev 官方网站

[laikit.dev](https://laikit.dev) 的源码与内容仓库。网站基于 VitePress，同时承载 laikit-dev 项目介绍与洛谷保存站帮助文档。

## 本地开发

```bash
pnpm install --frozen-lockfile
pnpm docs:dev
```

## 生产构建

```bash
pnpm docs:build
pnpm docs:preview
```

提交前应运行 `pnpm docs:build`，构建会检查站内链接并生成本地搜索索引。
