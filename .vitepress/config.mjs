import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "洛谷保存站帮助中心",
  head: [["link", { rel: "icon", href: "public/favicon.ico" }]],
  description: "洛谷保存站帮助中心",
  // base: "/docs/", // 若需要部署到子路径可取消注释，当前注释不影响
  ignoreDeadLinks: true,
  lastUpdated: true,
  // 顶层 themeConfig（所有主题相关配置都在这里面）
  themeConfig: {
    outlineTitle: "目录",
    outline: [2, 6], // 正确：outline 接受 [minLevel, maxLevel]，2~6级标题符合规范
    nav: [
      { text: "首页", link: "/" },
      { text: "洛谷保存站", link: "https://www.luogu.me" },
    ],

    // 搜索配置（正确嵌套在 themeConfig 内）
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    editLink: {
      pattern: "https://github.com/laikit-dev/docs/edit/v1/:path",
      text: "在 Github 上编辑此页面",
    },

    // 侧边栏配置（正确放在 themeConfig 内，与其他键同级）
    sidebar: [
      {
        text: "起步",
        items: [
          { text: "欢迎", link: "/docs/home" },
          { text: "从源代码构建", link: "/docs/start/build" },
          { text: "广告位申请", link: "/docs/start/ad" },
        ],
      },
      {
        text: "账号相关",
        items: [{ text: "token", link: "/docs/account/token" }],
      },
      {
        text: "开发者",
        items: [
          { text: "针对洛谷保存站的贡献指南", link: "/docs/dev/saver" },
          { text: "针对本文档的贡献指南", link: "/docs/dev/docs" },
          { text: "AIGC公约", link: "/docs/dev/aigc" },
        ],
      },
      {
        text: "协议与政策",
        items: [
          { text: "免责声明", link: "/docs/license/disclaimer" },
          { text: "数据移除政策", link: "/docs/license/deletion" },
          { text: "隐私协议", link: "/docs/license/privacy" },
        ],
      },
      {
        text: "其它",
        items: [
          { text: "更新日志", link: "/docs/update" },
          { text: "特别鸣谢", link: "/docs/special/thanks" },
        ],
      },
    ],

    // 社交链接配置
    socialLinks: [
      { icon: "github", link: "https://github.com/laikit-dev/docs" },
    ],

    // 页脚配置
    footer: {
      message: "This project licensed under GPL-3.0 license",
      copyright: "Copyright © 2025 laikit-dev",
    },
  },
});
