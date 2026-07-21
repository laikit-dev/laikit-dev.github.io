import { defineConfig } from 'vitepress'

const sidebar = [
  {
    text: '开始使用',
    collapsed: false,
    items: [
      { text: '欢迎与文档地图', link: '/docs/home' },
      { text: '五分钟上手', link: '/docs/start/quick-start' },
      { text: '常见问题', link: '/docs/start/faq' }
    ]
  },
  {
    text: '使用指南',
    collapsed: false,
    items: [
      { text: '查找与保存内容', link: '/docs/guide/search-and-save' },
      { text: '阅读文章与剪贴板', link: '/docs/guide/reading' },
      { text: '登录与账号', link: '/docs/account/login' },
      { text: '设置与本地数据', link: '/docs/guide/settings' }
    ]
  },
  {
    text: '功能详解',
    collapsed: true,
    items: [
      { text: '文章广场与推荐', link: '/docs/features/plaza' },
      { text: 'RAG 问答与知识库', link: '/docs/features/rag' },
      { text: '陶片放逐', link: '/docs/features/judgement' },
      { text: '通知与工作流', link: '/docs/features/notifications' },
      { text: '运行统计', link: '/docs/features/statistics' }
    ]
  },
  {
    text: '政策与治理',
    collapsed: true,
    items: [
      { text: '数据移除政策', link: '/docs/license/deletion' },
      { text: '隐私说明', link: '/docs/license/privacy' },
      { text: '免责声明', link: '/docs/license/disclaimer' }
    ]
  },
  {
    text: '开发与贡献',
    collapsed: true,
    items: [
      { text: '架构总览', link: '/docs/dev/architecture' },
      { text: '从源代码构建', link: '/docs/build/build' },
      { text: '保存站贡献指南', link: '/docs/dev/saver' },
      { text: '文档贡献指南', link: '/docs/dev/docs' },
      { text: 'AIGC 公约', link: '/docs/dev/aigc' }
    ]
  },
  {
    text: '项目档案',
    collapsed: true,
    items: [
      { text: '完整历史与更新日志', link: '/docs/update' },
      { text: '贡献者与资料来源', link: '/docs/special/thanks' },
      { text: '流量分析', link: '/docs/special/analytics' },
      { text: '旧 Token 机制', link: '/docs/account/token' },
      { text: '旧绘板 AccessKey', link: '/docs/account/accessKey' },
      { text: '旧广告位申请', link: '/docs/start/ad' }
    ]
  }
]

export default defineConfig({
  lang: 'zh-CN',
  title: '洛谷保存站帮助中心',
  titleTemplate: ':title | 洛谷保存站帮助中心',
  description: '洛谷保存站的使用指南、功能说明、开发文档、政策与项目历史。',
  srcExclude: ['README.md'],
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://laikit.dev'
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3451b2' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:title', content: '洛谷保存站帮助中心' }],
    ['meta', { property: 'og:site_name', content: '洛谷保存站帮助中心' }],
    ['meta', { property: 'og:url', content: 'https://laikit.dev/' }],
    ['meta', { property: 'og:image', content: 'https://laikit.dev/lgicon.svg' }],
    [
      'script',
      {
        defer: '',
        src: 'https://analytics.lailai.one/script.js',
        'data-website-id': '4677a99a-4992-4e2d-9518-7e3966b74b32',
        'data-domains': 'laikit.dev',
        'data-exclude-search': 'true'
      }
    ]
  ],
  themeConfig: {
    logo: '/lgicon.svg',
    siteTitle: '洛谷保存站帮助中心',
    nav: [
      { text: '文档首页', link: '/' },
      { text: '使用指南', link: '/docs/start/quick-start' },
      { text: '项目历史', link: '/docs/update' },
      { text: '洛谷保存站', link: 'https://www.luogu.me' },
      { text: 'GitHub', link: 'https://github.com/laikit-dev/luogu-saver' }
    ],
    sidebar,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    editLink: {
      pattern: 'https://github.com/laikit-dev/laikit-dev.github.io/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },
    outline: [2, 4],
    outlineTitle: '本页目录',
    sidebarMenuLabel: '文档目录',
    skipToContentLabel: '跳转到正文',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/laikit-dev/luogu-saver' }
    ],
    footer: {
      message: 'Luogu Saver 以 AGPL-3.0-or-later 许可证开源',
      copyright: '© 2025–2026 laikit-dev'
    },
    notFound: {
      title: '页面未找到',
      quote: '该页面可能已移动、删除，或链接地址有误。',
      linkLabel: '返回文档首页',
      linkText: '返回文档首页'
    }
  }
})
