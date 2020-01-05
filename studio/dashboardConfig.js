export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1274882388ff331ce1bd5f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-q4j94mx5',
                  apiId: '1918f835-790f-448b-860a-029acf699008'
                },
                {
                  buildHookId: '5e127488c61b634a51c028b5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-76enotto',
                  apiId: 'd5c02496-3d4c-48aa-b1fe-b5a76c0a93e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dudesl/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-76enotto.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
