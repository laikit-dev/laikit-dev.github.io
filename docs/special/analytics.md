# 流量分析

流量分析回答“哪些页面被访问、访客从哪里来、使用什么设备”，不等同于保存站的任务队列统计，也不能替代网站可用性监控。

## 当前接入

- 保存站前端包含 Cloudflare Web Analytics；
- 帮助中心加载位于 `analytics.lailai.one` 的 Umami tracker；
- 帮助中心限制 tracker 只在 `laikit.dev` 域名运行，并排除 URL 查询参数。

Umami 的 website ID 写在帮助中心 VitePress 配置中。统计后台账号、数据库和管理入口不应提交到公开仓库。

2026-07-21，帮助中心从返回 HTTP 502 的旧 `analytics.luogu.me` tracker 迁移到 `analytics.lailai.one`，同时更换对应的 website ID。迁移时新 tracker 脚本返回 HTTP 200；实际统计闭环仍应以 `laikit.dev` 产生访问后，Umami 后台出现对应页面浏览记录为准。

## 历史共享链接

旧文档曾公开三个 Umami share 链接，分别对应保存站、旧帮助文档和“LGS NG DOCS”。截至 2026-07-21，自动检查这些链接得到 403，旧预览域名的证书也与主机名不匹配，因此不再把它们作为可用导航展示。

如果希望继续公开统计，应在当前 Umami 实例重新生成只读 share URL，再用实际浏览器验证匿名访问。

## 隐私边界

流量统计不应接收：

- 登录 Token 或 OAuth 回调参数；
- 搜索框中的敏感查询；
- 删除申请理由；
- RAG 问题正文；
- Cookie、数据库 ID 或其他可直接识别用户的值。

保存站设置中的“允许匿名数据追踪”控制推荐系统的设备 ID，不应被误解为统一管理 Cloudflare 或帮助中心 Umami。

## 监控建议

要判断网站是否在线，应独立探测：

- `https://www.luogu.me/` 的 HTTP 状态与响应时间；
- 后端健康接口或一个只读 API；
- `https://laikit.dev/` 的文档首页；
- DNS、TLS 证书和关键依赖。

“Umami 最近没有访问”可能只是没人访问、脚本被拦截或统计服务故障，不能单独证明保存站宕机。
