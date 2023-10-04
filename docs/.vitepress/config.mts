import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "老Qu电子寒舍",
  description: "身无半亩，心忧天下",
  base: 'https://github.com/renbooc/vitepressBlog.git',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.png',
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '传不习乎',
        items: [
          { 
            text: '技术',
            link: '/node/web/index.md'
          }, 
          { 
            text: '读书',
            link: '/node/book/index.md'
          },
        ]
      },
      { text: '生活', link: '/markdown-examples' },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
