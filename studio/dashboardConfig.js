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
                  buildHookId: '609b96a4bbdf89db109d67d1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-f53ank56',
                  apiId: '038d951f-3eb1-47cb-a48c-5d1a89584c30'
                },
                {
                  buildHookId: '609b96a5df237bc9b7937cf6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tcg1pd6b',
                  apiId: 'c1d5f192-82e2-48c1-b3a8-8501bae808c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Profrantit/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tcg1pd6b.netlify.app', category: 'apps'}
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
