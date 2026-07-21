# 架构总览

Luogu Saver 是前后端分离但统一仓库、统一类型与统一工作流的内容归档系统。当前架构于 2026-01 完成 Monorepo 重构，并在后续半年逐步加入检索、RAG、通知、治理和陶片放逐模块。

## 仓库结构

```text
luogu-saver/
├── packages/
│   ├── frontend/            # Vue 3 SPA
│   ├── backend/             # Koa API、worker 与持久化
│   └── markdown-renderer/   # 共享 Markdown 渲染器
├── spec/                    # 后端可测试行为规格
├── docker-compose.yml       # 仅本地基础设施
├── package.json             # npm workspaces 与根命令
└── .github/workflows/       # CI、部署和包发布
```

## 前端

前端使用 Vue 3、Vue Router、Vite、Naive UI、Lucide 图标和 Socket.IO 客户端。路由模块按文件自动加载，覆盖主页、搜索、文章、剪贴板、用户、文章广场、RAG、陶片放逐、统计、设置、法律页面和管理后台。

用户偏好主要存于 `localStorage`：主题、导航、追踪同意、设备 ID、保存缓存、段落收藏、陶片显示字段和 RAG 知识库。

## 后端

后端使用 Koa 3 与 TypeScript。中间件负责客户端 IP、访问日志、API 限流、Bearer Token 解析、统一响应和匿名追踪。路由层保持较薄，业务逻辑进入 service，异步操作进入 workflow/task/worker。

TypeORM 当前启用 schema synchronization，没有受跟踪的 migration 数组。生产数据库升级因此需要额外谨慎、备份和发布审计。

## 数据与基础设施

| 组件 | 职责 | 是否基础必需 |
| --- | --- | --- |
| MariaDB | 文章、剪贴板、用户、历史、删除申请、通知、任务和工作流 | 是 |
| Redis | 缓存、队列、OAuth state、限流、匿名行为和实时协作状态 | 是 |
| BullMQ | 保存、AI、更新、搜索、读取、RAG、发现任务 | 是 |
| Meilisearch | 文章全文索引和关键词检索 | 可配置关闭 |
| Chroma | 摘要与正文分块向量、相似文章和 RAG | 可配置关闭 |
| LLM provider | 摘要、embedding、RAG 回答、rerank、内容安全 | 可选但影响对应流程 |
| Socket.IO | 任务、发现和队列统计实时更新 | 前端体验所需 |

## 内容保存链路

以文章为例：

1. 前端查询文章，404 时请求创建 `article-save-pipeline`；
2. 后端用去重键避免同一文章出现多个活跃保存工作流；
3. worker 从洛谷公开接口抓取数据并处理验证码挑战；
4. service 在事务中保存作者、文章和历史版本；
5. 可选任务生成摘要、搜索文档、摘要/分块向量和内容安全结果；
6. Socket.IO 把报告任务状态发送给内容页；
7. 查询接口返回原始 Markdown 与预渲染 HTML。

剪贴板链路更短，不建立文章摘要、文章向量或文章搜索索引。

## 身份与权限

CP OAuth 用户保存于 `registered_user`；洛谷文章作者保存于 `user`。两张表用途严格分离。

授权使用权限位：普通 OAuth 用户拥有登录与创建普通工作流权限；管理员可获得用户、搜索、公告、发现和内容治理权限。`ROLE_ADMIN = -1` 满足全部权限检查。

## 搜索、推荐与 RAG

- 搜索：Meilisearch 文档包含标题、摘要、正文、作者、分类、标签和删除标记；
- 推荐：标题相似度、向量、浏览历史和热门度组合；
- RAG：规划多查询，执行关键词与向量检索，合并候选，构建上下文并生成回答；
- 删除同步：文章软删除状态必须同步到搜索索引，避免已删除内容泄漏。

## 规格优先

`spec/*.spec.md` 是后端预期行为的单一真源。任何后端行为、配置或数据形状变化都必须先阅读并同步规格。前端没有同样的强制规格目录，但多个跨端功能仍在 spec 中规定前端可观察行为。

## 安全边界

- 不提交生产配置、Cookie、OAuth secret、模型 token 或旧 SQLite 数据；
- 外部服务只通过私有网络暴露给后端；
- OAuth 使用 state 一次性消费和 PKCE；
- 软删除内容对普通接口关闭，并同步搜索删除标记；
- Markdown 渲染与静态法律 HTML使用受控信任边界；
- 代理 IP 只在明确可信的部署拓扑中解析。
