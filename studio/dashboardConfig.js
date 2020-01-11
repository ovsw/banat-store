export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e1974ff87a3d9525fa3017a',
                  title: 'Sanity Studio',
                  name: 'banat-store-studio',
                  apiId: '3e0bc105-8c8e-478e-9117-85dbf66ca7ab'
                },
                {
                  buildHookId: '5e1974ff90aa3d5fdf2a588d',
                  title: 'Portfolio Website',
                  name: 'banat-store',
                  apiId: '9ccd4a60-1feb-4a03-91bd-a29d7044d4b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ovsw/banat-store',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://banat-store.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
