# 贡献者与资料来源

本页不再维护容易过时的手工“开发者名单”。贡献事实直接来自 Git 历史，并明确统计口径。

## 保存站代码仓库

统计对象：`laikit-dev/luogu-saver` 的 `master` 分支，截至提交 `f238b39`（2026-07-21），共 353 个提交。

| Git 作者标识 | 提交数 | 说明 |
| --- | ---: | --- |
| Aak | 206 | 现役代码史主要作者 |
| Xirui Xiong | 53 | GitHub noreply 身份对应 `Ark-Aak` |
| liyifan202201 / OI-liyifan202201 | 23 | 同邮箱别名合并 |
| quanac-lcx / Chengxuan Li | 19 | 同邮箱别名合并 |
| lailai0916 | 15 | 代码、治理流程、UI 与文档链接 |
| SomeoneHX | 15 | 同名的两个提交邮箱合并 |
| ZemuZzz | 8 | 代码贡献 |
| Ikaleio | 4 | 同名提交身份合并 |
| IsHPDuwu | 3 | 代码贡献 |
| chenyichen0420 | 3 | 代码贡献 |
| nr0728 | 2 | 代码贡献 |
| MZMTab | 1 | 代码贡献 |
| Murasame | 1 | 代码贡献 |

数字来自 `git shortlog -sne master`，只统计进入当前主分支历史的 commit，不等价于代码行数、维护责任或贡献价值。合并提交、共同工作、issue、评审、设计、运营和数据迁移无法被 commit 数完整表达。

最新名单可查看 [GitHub Contributors](https://github.com/laikit-dev/luogu-saver/graphs/contributors)。

## 帮助中心仓库

统计对象：现 `laikit-dev/laikit-dev.github.io` 的 `main` 分支，截至提交 `b91ec5d`（2026-07-21），共 148 个提交。该仓库由原 `laikit-dev/docs` 原地重命名而来，因此旧地址会重定向到新地址。

| Git 作者标识 | 提交数 | 说明 |
| --- | ---: | --- |
| Chengxuan Li / quanac-lcx | 103 | 同邮箱别名合并 |
| lailai0916 | 17 | 文档、迁移与站点维护 |
| Murasame | 16 | 文档维护 |
| Hongshi | 7 | 更新日志与文档 |
| cirrationaler | 2 | 早期文档 |
| jishuya | 2 | 早期鸣谢内容 |
| Xirui Xiong | 1 | 仓库维护 |

## 非代码贡献

还应感谢：

- 提交可复现 issue、PR 评审与测试反馈的社区成员；
- 保存站、数据库、CDN、域名和监控的运营维护者；
- 陶片放逐旧服务数据的保管与迁移参与者；
- 为早期更新日志保存项目事件的文档维护者；
- 归档内容的原作者及提出合理移除请求的权利人。

## 文档考古资料

本轮帮助中心重建使用以下来源：

1. 保存站 `master` 分支源码与 353 个提交；
2. 根目录 README、`package.json`、Compose 和 GitHub Actions；
3. 32 份后端 `spec/*.spec.md`；
4. 帮助中心 `main`、`v1` 和历史分支的 148 个提交；
5. 旧版人工更新日志；
6. 保存站现役路由、界面文案和公开页面。

## 证据限制

- 站内把 2025-02-12 作为创立日，但当前保存站 Git 历史始于 2025-11-16；
- 2025-08 至 10 月的功能事件主要来自人工旧日志，不能逐条由现役仓库复核；
- 2025-09-21 旧日志记录过因配置泄露而归档源码，说明早期代码史可能不完整；
- Git 提交数会因作者别名、合并方式和历史重写变化；
- 未进入 Git 的生产数据、部署密钥和旧 SQLite 不属于可公开考据材料。

发现姓名归并错误或遗漏非代码贡献时，请提交带证据的文档修正，不要仅凭印象覆盖历史。
