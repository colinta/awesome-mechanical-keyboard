module.exports = ctx => ({
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    repo: 'benroe/awesome-mechanical-keyboard',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    // repoLabel: 'Edit this page!',
    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    // docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    // docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    // nav: [
    //   { text: 'Home',˚
    //   { text: 'Guide', link: '/guide/' },
    //   { text: 'External', link: 'https://google.com' },
    // ],
    lastUpdated: true,
    // sidebarDepth: 1,
    // displayAllHeaders: true,
    // sidebar: 'auto',

    sidebar: getGuideSidebar('Guide', 'Advanced')
    
    
  },
  title: 'Awesome Keyboard List',
  description: 'Just playing around'
})

function getGuideSidebar(groupA, groupB) {
  return [
    {
      // title: groupA,
      collapsable: false,
      children: [
        '',
        'switches',
        'firmware',
        'tutorials',
        'tools',
        'shops',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'frontmatter',
        'permalinks',
        'markdown-slot',
        'global-computed'
      ]
    }
  ]
}