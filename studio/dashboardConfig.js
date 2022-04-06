export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '624d579392fefa00ba7235c5',
                  title: 'Sanity Studio',
                  name: 'sanity-new-online-message-studio',
                  apiId: 'a1e7ba40-8a14-46f7-939a-5da6d7edb047'
                },
                {
                  buildHookId: '624d579392fefa006d7236df',
                  title: 'Landing pages Website',
                  name: 'sanity-new-online-message',
                  apiId: 'e99971ea-335f-4f0c-9bb1-ec1c42e85368'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/smounge/sanity-new-online-message',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-new-online-message.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
