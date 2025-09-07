# 从源代码构建
如果您想要拥有私人的保存站，请阅读此章节。

在终端中执行如下命令：

```bash
git clone https://github.com/laikit-dev/luogu-saver.git
cd luogu-saver
npm install
cp .env.example .env
vim .env # 用您最喜欢的编辑器编辑环境变量，请修改默认值。
node app.js
```

出现 `Server is running on port xxx` 说明成功。此时访问 `http://127.0.0.1:<port>` 即可。

