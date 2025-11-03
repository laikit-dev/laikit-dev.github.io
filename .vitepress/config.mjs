import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "洛谷保存站帮助中心",
  head: [
    ["link", { rel: "icon", href: "https://www.luogu.me/static/self/img/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "zh-CN" }],
    ["meta", { name: "og:title", content: "洛谷保存站帮助中心" }],
    ["meta", { name: "og:site_name", content: "洛谷保存站帮助中心" }],
    ["meta", { name: "og:image", content: "https://www.luogu.me/favicon.ico" }],
    ["meta", { name: "og:url", content: "https://docs.luogu.me/" }],
    ['script', { 
            async : '', 
            src : "https://analytics.luogu.me/script.js", 
            "data-website-id" : "32e91990-3c50-4462-8be5-0e6886e6c380"
         }]
  ],
  description: "洛谷保存站帮助中心 - 提供全面的使用指南和开发文档",
  // base: "/docs/", // 若需要部署到子路径可取消注释，当前注释不影响
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  // 顶层 themeConfig（所有主题相关配置都在这里面）
  themeConfig: {
    logo: "https://www.luogu.me/static/self/img/favicon.ico",
    siteTitle: "洛谷保存站帮助中心",
    outlineTitle: "页面导航",
    outline: [2, 6], // 正确：outline 接受 [minLevel, maxLevel]，2~6级标题符合规范
    
    // 返回顶部
    returnToTopLabel: "返回顶部",
    
    // 暗黑模式切换
    darkModeSwitchLabel: "外观",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    nav: [
      { text: "🏠 文档首页", link: "/" },
      { text: "🌟 洛谷保存站", link: "https://www.luogu.me" },
      { text: "📝 更新日志", link: "/docs/update" },
      { text: "🎨 冬日绘版", link: "https://www.luogu.me/paintboard" },
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
      text: "✏️ 在 Github 上编辑此页面",
    },
    
    // 文档页脚导航
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    
    // 最后更新时间
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    sidebar: [
      {
        text: "🚀 起步",
        collapsed: false,
        items: [
          { text: "👋 欢迎", link: "/docs/home" },
          { text: "🔨 从源代码构建", link: "/docs/build/build" },
          { text: "📢 广告位申请", link: "/docs/start/ad" },
        ],
      },
      {
        text: "👤 账号相关",
        collapsed: false,
        items: [
            { text: "🔑 Token", link: "/docs/account/token" },
            { text: "🎨 绘板AccessKey", link: "/docs/account/accessKey" },
        ],
      },
      {
        text: "🎨 冬日绘版",
        collapsed: false,
        items: [
          { text: "📖 介绍", link: "https://www.luogu.me/article/pssi9ceo" },
          { text: "📋 API文档", link: "https://www.luogu.me/article/57b4jd3c" },
          { text: "📊 非官方计划统计", link: "https://www.luogu.me/article/b069ty2v" },
          { text: "🎨 绘版链接", link: "https://www.luogu.me/paintboard" },
        ],
      },
      {
        text: "开发",
        collapsed: true,
        items: [
          { text: "针对洛谷保存站的贡献指南", link: "/docs/dev/saver" },
          { text: "针对本文档的贡献指南", link: "/docs/dev/docs" },
          { text: "AIGC 公约", link: "/docs/dev/aigc" },
        ],
      },
      {
        text: "协议与政策",
        collapsed: true,
        items: [
          { text: "免责声明", link: "/docs/license/disclaimer" },
          { text: "数据移除政策", link: "/docs/license/deletion" },
          { text: "隐私协议", link: "/docs/license/privacy" },
        ],
      },
      {
        text: "其它",
        collapsed: false,
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
      message: "基于 GPL-3.0 协议开源",
      copyright: "© 2025 laikit-dev ",
    },
    notFound: {
      title: "页面未找到",
      quote: "抱歉，您访问的页面不存在。可能链接地址有误，或页面已被移动。",
      linkLabel: "brand",
      linkText: "TAKE ME HOME",
    },
  },
});
