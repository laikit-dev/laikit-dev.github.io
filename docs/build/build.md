# 从源代码构建

本页适用于当前 `laikit-dev/luogu-saver`。旧版 `node app.js`、Nunjucks、Semantic UI、`ormconfig.json`、`accounts.json` 和手工修改数据库 Token 角色的教程已经失效。

::: warning 先明确边界

仓库根目录的 `docker-compose.yml` 只适合本地开发和单机测试。生产环境必须使用私有网络、非默认凭据、独立备份和正式的反向代理方案。

:::

## 当前架构

项目是 npm workspaces Monorepo：

- `packages/frontend`：Vue 3、Vite、Vue Router、Naive UI；
- `packages/backend`：Koa 3、TypeScript、TypeORM；
- `packages/markdown-renderer`：前后端共用的 Markdown 渲染包；
- MariaDB：文章、剪贴板、用户、工作流等持久数据；
- Redis：缓存、BullMQ 队列、OAuth state、匿名推荐和限流；
- Meilisearch：文章全文检索，可关闭；
- Chroma：文章摘要与分块向量，可关闭；
- Socket.IO：任务、队列和发现流程的实时更新。

## 前置要求

- Node.js 22.18.0 或更高版本；
- npm；
- Docker 与 Docker Compose；
- Git；
- 至少可用的 MariaDB 与 Redis；
- 可选的 Meilisearch、Chroma、LLM 提供方和 CP OAuth 应用。

## 1. 克隆与安装

```bash
git clone https://github.com/laikit-dev/luogu-saver.git
cd luogu-saver
npm install
```

`npm install` 会一次安装根目录与所有工作区依赖。

## 2. 启动本地基础设施

先创建 `.env`：

```dotenv
SAVER_DB_ROOT_PASSWORD=请替换为随机的本地密码
SAVER_MEILI_MASTER_KEY=请替换为随机的本地密钥
```

再启动依赖：

```bash
docker compose up -d
docker compose ps
```

Compose 中 MariaDB、Redis、Chroma 和 Meilisearch 的端口都只绑定 `127.0.0.1`。这不会启动 Node.js 前后端。

首次启动 MariaDB 后，需要创建配置中使用的数据库；如果沿用 `root` 用户，也必须让 `config.yml` 中的密码与 `.env` 一致。

## 3. 创建 `config.yml`

后端启动时必须找到 YAML 配置。最简单的路径是仓库根目录 `config.yml`。也可以通过 `CONFIG_PATH` 指向其他文件。

以下是用于理解结构的最小开发示例，不是生产配置：

```yaml
host: 127.0.0.1
port: 3000
env: development

db:
  host: 127.0.0.1
  port: 3306
  user: root
  password: 请填写与本地 MariaDB 一致的密码
  database: luogu_saver

redis:
  host: 127.0.0.1
  port: 6379
  password: ''
  keyPrefix: lgs_dev

chroma:
  enable: false
  host: 127.0.0.1
  port: 8000
  ssl: false

meilisearch:
  enable: false
  host: http://127.0.0.1:7700
  apiKey: 请填写本地 Meilisearch 密钥

recommendation: {}

llm:
  providers: []
  scenarios:
    chat: { use: disabled/model }
    summary: { use: disabled/model }
    embedding: { use: disabled/model }
    censor: { use: disabled/model }

verification:
  luogu: {}
```

该示例可以通过配置结构校验，但没有 LLM provider，任何真正调用 AI 的任务都会失败。要启用摘要、向量、RAG 或内容安全任务，必须加入与 OpenAI 兼容接口对应的 provider、token 和模型映射。

配置还支持队列并发、API 限流、文章发现、陶片同步、工作流清理、Tor 回退和 CP OAuth。字段以主仓库 `spec/config-system.spec.md` 和 `packages/backend/src/config/schemas/` 为准。

::: danger 不要提交密钥

`config.yml`、OAuth client secret、模型 API token、数据库密码和任何洛谷 Cookie 都不应提交到 Git。发布前运行 `git status` 和敏感信息扫描。

:::

## 4. 开发模式

```bash
npm run dev
```

该命令同时启动：

- Vite 前端开发服务器；
- Koa 后端开发进程。

前端开发代理默认把 `/api` 转发到本地后端。若使用自定义地址，请查看 `packages/frontend/vite.config.ts` 和 `VITE_API_URL`。

## 5. 构建与测试

完整构建：

```bash
npm run build
```

分别构建：

```bash
npm run build -w @luogu-saver/markdown-renderer
npm run build -w @luogu-saver/backend
npm run build -w @luogu-saver/frontend
```

质量检查：

```bash
npm test
npm run lint:prettier
npm run lint:eslint
```

前端产物位于 `packages/frontend/dist`，后端编译产物位于 `packages/backend/dist`。

## 6. 本地运行构建产物

```bash
node packages/backend/dist/index.js
```

后端默认监听 3000 端口。前端可以使用任意静态服务器预览；正式部署时必须把 SPA 回退和 `/api` 反向代理配置正确。

## 7. 生产部署要点

生产方案至少满足：

1. MariaDB、Redis、Chroma 和 Meilisearch只允许后端主机或私有网络访问；
2. 不把 3306、6379、8000、7700 暴露到公网；
3. 替换全部默认凭据并配置备份；
4. 静态服务器托管前端 `dist`，未知前端路由回退到 `index.html`；
5. `/api` 和 Socket.IO 正确反向代理到后端；
6. HTTPS、可信代理头与 API 限流按实际拓扑配置；
7. 自动部署所需的 GitHub Environment secrets 与仓库变量全部就绪。

仓库的自动部署默认关闭。只有 `ENABLE_PRODUCTION_DEPLOYMENT=true` 时，推送到 `master` 才进入生产部署；陶片迁移完成前，前端还受 `JUDGEMENT_MIGRATION_READY=true` 保护。

## 8. 陶片放逐历史导入

旧 SQLite 数据不在 Git 中。导入前必须备份源文件并确认旧服务时区：

```bash
npm run import:judgement -w @luogu-saver/backend -- \
  --db /安全路径/judgements.db \
  --source-time-zone +08:00
```

导入器可以重复运行，并输出数量、去重键和时间范围审计。先关闭新同步调度，完成数量核对后再启用，并观察 `/judgement/logs` 中的首次成功抓取。

## 9. 常见故障

### 找不到 `config.yml`

设置绝对路径：

```bash
CONFIG_PATH=/absolute/path/config.yml npm run dev
```

### 数据库或 Redis 连接失败

检查 `docker compose ps`、本地端口、密码、数据库名和 `keyPrefix`。不要用“临时暴露公网端口”解决连接问题。

### 搜索或 RAG 不工作

确认 Meilisearch/Chroma 已启用且密钥一致，并确认模型 provider 与场景映射存在。基础文章浏览可用，不代表所有可选 AI 服务已经配置。

### 保存任务一直等待

查看保存站“统计数据”页或 BullMQ 日志，确认 worker 已启动、队列未暂停、Redis 正常、并发与令牌桶未耗尽。

### 洛谷抓取失败

检查源站可达性、响应结构、验证码挑战和请求限流。Tor 回退是可选高级配置，不是绕过内容权限的工具。
