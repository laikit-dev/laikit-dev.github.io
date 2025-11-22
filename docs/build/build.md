> [!IMPORTANT] 仓库已存档
> [仓库](https://github.com/laikit-dev/luogu-saver)已存档，不再维护和更新。我们正在开发新版保存站，但是本文档的内容仍会**持续更新**，直到 `未定` 时。

> [!TIP] 征求志愿者测试本教程
> 本教程可能会有错误或疏漏，欢迎各位加入 QQ 群（1017248143）测试并反馈文档问题。也可以直接提交 PR，参考[贡献指南](../dev/docs.md)。

# 从源代码构建 {#build-from-source}

如果您想要从头搭建一个保存站，请阅读此章节。

## 准备工作{#preparation}
在终端中执行如下命令：

```bash
git clone https://github.com/laikit-dev/luogu-saver.git #克隆仓库
cd luogu-saver #进入目录
npm install #安装依赖
cp ormconfig.example.json ormconfig.json
cp contentConfig.example.json contentConfig.json
cp config.example.js config.js #极其重要
cp accounts.example.json accounts.json
```

## 修改默认值{#modify-default-values}

### 修改 `ormconfig.json`{#modify-ormconfig-json}
```bash
vim ormconfig.json
```
代码：
```json{2}
{
    "type": "mariadb",
    "synchronize": true,
    "logging": true
}
```
修改 `type` 为您的数据库类型。（常见：`mysql`、`mariadb`、`postgres`、`sqlite`）。


### 修改 `config.json`{#modify-config-json}
```bash
vim config.json
```
代码：
```json{3-10,20,35-40}
export default {
	debug: true,
	port: 55086,
	database: {
		host: 'localhost',
		port: 3306,
		user: 'luogu_saver',
		password: 'your_password',
		database: 'luogu_save'
	},
	pagination: {
		search: 10,
		problem: 50
	},
	request: {
		concurrency: 2,
		maxRequestToken: 20,
		tokenRefillInterval: 1000
	},
	jwtSecret: 'your_jwt_secret',
     requestHeader: {
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
		'x-luogu-type': 'content-only'
	},
	queue: {
		processInterval: 200,
		maxLength: 500
	},
	recent: {
		article: {
			default: 20,
			max: 2000
		}
	},
	redis: {
		host: '127.0.0.1',
		port: 6379,
		password: null,
		db: 0
	},
	service: { // 用于爬取犇犇
		name: "luogu-saver",
		api_url: "https://api-benben.imken.dev",
		crawler_url: "https://spider-benben.imken.dev",
		ws_url: "wss://spider-benben.imken.dev",
		callback_timeout: 30000
	},
	rss: {
		article: {
			recentHours: 24
		}
	}
}
```
- 修改 `port` 为您喜欢的端口。
- 修改 `database` 为您自己的数据库信息。推荐使用 [MariaDB](https://mariadb.org/) 或 [MySQL](https://www.mysql.com/)。
- 修改 `jwtSecret` 为您喜欢的密钥。
- 修改 `redis` 为您自己的 [Redis](https://redis.io/downloads/) 信息。
- 其他内容请自行修改。
>[!IMPORTANT] 注意
> 未安装或不想使用 Redis？请不要修改此部分内容，我们将**自动**取消 Redis 的使用，无需您手动配置。


不知道配置数据库，可以加入 QQ 群（1017248143）讨论。

### 修改 `accounts.json`{#modify-accounts-json}
> [!TIP] 注意
> 这个玩意是爬取题解能否提交用的，需要用到您的洛谷账号。如果不需要题解信息爬取，可以不修改。请勿泄露 `__client_id`。
```bash
vim accounts.json
```
代码如下：
```json{2}
[
	{ "_uid": "114514", "__client_id": "1145141919810" }
]
```
修改 `_uid` 为您的洛谷 UID，修改 `__client_id` 为您的洛谷 Client ID。
如何获取 Client ID？
1. 登录您的洛谷账号。
   
2. 点击您键盘上的 `F12` 按钮，打开开发者工具。

3. 点击 `Application` 或 `应用程序` 标签 -> `Cookie` -> `https://www.luogu.com.cn` -> 找到 `__client_id`，复制`值`即可。

- Edge 浏览器示例：
![](https://lgs-res.kkksc03.com/docs/getCookieEdge.png)
- Chrome 浏览器示例：
![](https://lgs-res.kkksc03.com/docs/getCookieChrome.png)

### 修改 `contentConfig.json`{#modify-settings-json}
`contentConfig.json` 是一些设置文件，一般情况下**无需修改**。

## 运行
在终端中执行如下命令：
```bash
node app.js
```
出现 `Server is running on port xxx` 说明成功。此时访问 `http://127.0.0.1:端口号` 即可。

## 管理员操作{#admin-operation}
### 添加/取消管理员{#add-or-cancel-administrator}
> [!TIP] 提示
> 仅需在第一次运行时用命令行工具添加管理员。后续可以直接在后台操作。需要先注册一个用户（Token）。注意您的 Token 与 `luogu.me` 并不相同两者互不影响。

#### 命令行操作{#command-line-operation}
进入您的数据库软件的终端，执行如下命令：
```sql
use luogu_save;
```
这里的 `luogu_save` 为您数据库的名称。在这里获取数据库名称：
```json{9}
export default {
	debug: true,
	port: 55086,
	database: {
		host: 'localhost',
		port: 3306,
		user: 'luogu_saver',
		password: 'your_password',
		database: 'luogu_save' // here
	},
	pagination: {
		search: 10,
		problem: 50
	},
	// 后略……
}
```
接下来执行：
```sql
UPDATE token SET role = 1 WHERE id = 'your_token';
/* role = 1 为管理员，如果要取消管理员，把 1 改成 0 即可！*/
```
比如你的 Token 是 `dfhsugfuidsgfiusodfgafio`，那么命令为：
```sql
/* 给予管理权 */
UPDATE token SET role = 1 WHERE id = 'dfhsugfuidsgfiusodfgafio';
/* 取消管理权 */
UPDATE token SET role = 0 WHERE id = 'dfhsugfuidsgfiusodfgafio';
```

没有傻瓜不会了吧。

#### 后台面板{#backend-dashboard}
请先确保您的账号是管理员。

登录您的账号，进入后台（`https://127.0.0.1:端口号/admin`），点击 `Token 管理`，找到您要操作的用户，点齿轮，再点 `设为管理员`。

取消管理员同理。

### 置顶文章{#pin-article}
被指定的文章会在“最近更新”中置顶显示。原则上不限制置顶数量，但是为了美观，不建议超过 6 篇。

进入您的数据库软件的终端，执行如下命令：
```sql
use luogu_save; /*这里的 `luogu_save` 为您数据库的名称。*/
UPDATE article SET priority = 100 WHERE id = 'your_article_id';
```

这个命令会将指定文章的优先级设置为 `100`。根据 `getRecentArticles` 函数的实现，文章按照 `priority` **降序排列**，然后按`updated_at` **降序排列**，所以设置一个较高的 `priority` 值会使文章出现在最近更新列表的顶部。默认值为 `0`，代表不置顶。

- 您需要将 `your_article_id` 替换为您想置顶的文章 ID。如 `https://www.luogu.me/article/ilovecz6`，那么文章 ID 为 `ilovecz6`。

## 其他操作{#other-operations}
请在后台自行探索。操作很简单。
## 后续步骤{#next}
恭喜您，您已经搭建了一个保存站。

### 更新{#update}
请在终端中执行如下命令：
```bash
git pull
npm install #以防缺少新依赖，小版本更新不需要（节省时间）
node app.js #启动
```
### 配置 PM2{#configure-pm2}
PM2 是一个 Node.js 的进程管理工具，它可以帮助您管理您的 Node.js 应用程序。

管理后台的重启服务功能也依赖 PM2。

在终端执行：
```bash
npm install -g pm2
pm2 start app.js --name luogu-saver
```
即可。

### 配置 Systemctl{#configure-systemctl}
Systemctl 是一个 Linux 的进程管理工具，它可以帮助您管理您的 Node.js 应用程序。
> [!DANGER] AI 声明
> 此部分内容由 AI 生成，未经验证。


#### 创建systemd服务文件
```bash
# 创建服务文件
sudo nano /etc/systemd/system/luogu-saver.service
```

#### 服务文件内容
```ini
[Unit]
Description=Luogu Saver Node.js Application
After=network.target

[Service]
Type=simple
User=你的用户名
WorkingDirectory=/path/to/luogu-saver
ExecStart=/usr/bin/node app.js
Restart=always
RestartSec=10
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```
#### 启用和启动服务
```bash
# 重新加载systemd配置
sudo systemctl daemon-reload

# 启用服务（开机自启）
sudo systemctl enable luogu-saver

# 启动服务
sudo systemctl start luogu-saver

# 检查状态
sudo systemctl status luogu-saver
```

<hr />

<center>本页面访问量：<img src="https://w.saobby.com/w/02u6sdfc"></center>