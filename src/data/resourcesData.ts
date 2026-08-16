export const resourcesData = [
    {
        level: 'Level 1',
        title: 'Go Backend',
        desc: 'Core language, database, caching & testing fundamentals',
        categories: [
            {
                name: 'Core Go', items: [
                    { title: 'Go by Example', url: 'https://gobyexample.com/' },
                    { title: 'Effective Go (official)', url: 'https://go.dev/doc/effective_go' }
                ]
            }
        ]
    },
    {
        level: 'Level 2',
        title: 'Production Engineering',
        desc: 'Infrastructure, deployment & monitoring at scale',
        categories: [{ name: 'Docker', items: [{ title: 'Docker Multi-Stage Builds Guide', url: 'https://docs.docker.com/' }] }]
    }
]
