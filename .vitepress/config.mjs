import { defineConfig } from 'vitepress'

const luoguSaverSidebar = [
  {
    text: '洛谷保存站',
    collapsed: false,
    items: [
      { text: '文档首页', link: '/docs/home' },
      { text: '特别鸣谢', link: '/docs/special/thanks' }
    ]
  },
  {
    text: '账号与凭据',
    collapsed: false,
    items: [
      { text: 'Token（归档）', link: '/docs/account/token' },
      { text: '绘板 AccessKey', link: '/docs/account/accessKey' }
    ]
  },
  {
    text: '冬日绘版',
    collapsed: true,
    items: [
      { text: '项目介绍', link: 'https://www.luogu.me/article/pssi9ceo' },
      { text: 'API 文档', link: 'https://www.luogu.me/article/57b4jd3c' },
      { text: '非官方计划统计', link: 'https://www.luogu.me/article/b069ty2v' },
      { text: '进入绘版', link: 'https://www.luogu.me/paintboard' }
    ]
  },
  {
    text: '开发与贡献',
    collapsed: true,
    items: [
      { text: '洛谷保存站贡献指南（归档）', link: '/docs/dev/saver' },
      { text: '网站文档贡献指南', link: '/docs/dev/docs' },
      { text: 'AIGC 公约', link: '/docs/dev/aigc' }
    ]
  },
  {
    text: '协议与政策',
    collapsed: true,
    items: [
      { text: '隐私协议', link: '/docs/license/privacy' },
      { text: '免责声明', link: '/docs/license/disclaimer' },
      { text: '数据移除政策', link: '/docs/license/deletion' }
    ]
  },
  {
    text: '历史文档',
    collapsed: true,
    items: [
      { text: '旧版构建指南', link: '/docs/build/build' },
      { text: '公益广告位申请', link: '/docs/start/ad' },
      { text: '更新日志', link: '/docs/update' }
    ]
  }
]

export default defineConfig({
  lang: 'zh-CN',
  title: 'laikit-dev',
  titleTemplate: ':title | laikit-dev',
  description: 'laikit-dev 官方网站：开源项目、洛谷保存站帮助文档与开发资源。',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://laikit.dev'
  },
  srcExclude: ['README.md'],
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3451b2' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: 'laikit-dev' }],
    ['meta', { property: 'og:image', content: 'https://laikit.dev/logo.svg' }],
    [
      'script',
      {
        async: '',
        src: 'https://analytics.luogu.me/script.js',
        'data-website-id': '32e91990-3c50-4462-8be5-0e6886e6c380'
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'laikit-dev',
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects' },
      { text: '洛谷保存站文档', link: '/docs/home' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/docs/': luoguSaverSidebar
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到相关结果',
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
    outline: [2, 6],
    outlineTitle: '页面导航',
    sidebarMenuLabel: '菜单',
    skipToContentLabel: '跳转到正文',
    langMenuLabel: '切换语言',
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
      { icon: 'github', link: 'https://github.com/laikit-dev' }
    ],
    footer: {
      message: '开源项目与文档',
      copyright: '© 2025–2026 laikit-dev'
    },
    notFound: {
      title: '页面未找到',
      quote: '该页面可能已移动、删除，或链接地址有误。',
      linkLabel: '返回首页',
      linkText: '返回首页'
    }
  }
})
