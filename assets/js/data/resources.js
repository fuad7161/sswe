export const resourceGroups = [
    {
      level: 'Level 1',
      title: 'Go Backend',
      desc: 'Core language, database, caching & testing fundamentals',
      categories: [
        { name: 'Core Go', items: [
          { title: 'Go by Example', url: 'https://gobyexample.com/', type: 'web' },
          { title: 'Effective Go (official)', url: 'https://go.dev/doc/effective_go', type: 'docs' },
          { title: 'Learning Go by Jon Bodner', url: null, type: 'book' },
          { title: 'Go Concurrency Patterns — Rob Pike', url: 'https://www.youtube.com/watch?v=f6kdp27TYZs', type: 'video' }
        ]},
        { name: 'Advanced / Performance', items: [
          { title: 'Ardan Labs Go Training (free, GitHub)', url: 'https://github.com/ardanlabs/gotraining', type: 'github' },
          { title: "Julia Evans' Blog", url: 'https://jvns.ca/', type: 'web' },
          { title: "Dave Cheney's Blog", url: 'https://dave.cheney.net/', type: 'web' },
          { title: 'Go pprof Official Blog Post', url: 'https://go.dev/blog/pprof', type: 'docs' }
        ]},
        { name: 'PostgreSQL + pgx + sqlc', items: [
          { title: 'sqlc Documentation', url: 'https://docs.sqlc.dev/', type: 'docs' },
          { title: 'pgx (GitHub)', url: 'https://github.com/jackc/pgx', type: 'github' },
          { title: 'Use The Index, Luke', url: 'https://use-the-index-luke.com/', type: 'web' }
        ]},
        { name: 'Redis', items: [
          { title: 'Redis University (free courses)', url: 'https://university.redis.com/', type: 'course' }
        ]},
        { name: 'Testing', items: [
          { title: 'testcontainers-go Documentation', url: 'https://golang.testcontainers.org/', type: 'docs' },
          { title: 'Testify (GitHub)', url: 'https://github.com/stretchr/testify', type: 'github' }
        ]}
      ]
    },
    {
      level: 'Level 2',
      title: 'Production Engineering',
      desc: 'Infrastructure, deployment & monitoring at scale',
      categories: [
        { name: 'Docker', items: [
          { title: 'Docker Multi-Stage Builds Guide', url: 'https://docs.docker.com/build/building/multi-stage/', type: 'docs' }
        ]},
        { name: 'Linux', items: [
          { title: 'Wizard Zines — Julia Evans', url: 'https://wizardzines.com/', type: 'web' },
          { title: 'Brendan Gregg — Linux Performance', url: 'https://www.brendangregg.com/linuxperf.html', type: 'web' }
        ]},
        { name: 'CI/CD', items: [
          { title: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions', type: 'docs' },
          { title: 'GitHub Actions for Go — Example Workflows', url: 'https://github.com/mvdan/github-actions-golang', type: 'github' }
        ]},
        { name: 'AWS', items: [
          { title: 'AWS Skill Builder (free tier)', url: 'https://skillbuilder.aws/', type: 'course' }
        ]},
        { name: 'Observability', items: [
          { title: 'Prometheus Documentation', url: 'https://prometheus.io/docs/introduction/overview/', type: 'docs' },
          { title: 'Grafana Tutorials', url: 'https://grafana.com/tutorials/', type: 'docs' },
          { title: 'OpenTelemetry — Go Docs', url: 'https://opentelemetry.io/docs/languages/go/', type: 'docs' }
        ]}
      ]
    },
    {
      level: 'Level 3',
      title: 'Senior Architecture',
      desc: 'Distributed systems, design patterns & orchestration',
      categories: [
        { name: 'Kafka', items: [
          { title: 'Confluent Developer — Free Kafka Courses', url: 'https://developer.confluent.io/courses/', type: 'course' },
          { title: 'Kafka: The Definitive Guide (free PDF from Confluent)', url: null, type: 'book' }
        ]},
        { name: 'Distributed Systems', items: [
          { title: 'MIT 6.824 Distributed Systems (free, labs in Go)', url: 'https://pdos.csail.mit.edu/6.824/', type: 'course' },
          { title: 'Designing Data-Intensive Applications by Martin Kleppmann', url: null, type: 'book' }
        ]},
        { name: 'System Design', items: [
          { title: 'systemdesign.one', url: 'https://systemdesign.one/', type: 'web' },
          { title: 'ByteByteGo (YouTube)', url: 'https://www.youtube.com/@ByteByteGo', type: 'video' },
          { title: 'Excalidraw (for diagramming designs)', url: 'https://excalidraw.com/', type: 'web' }
        ]},
        { name: 'Microservices', items: [
          { title: 'microservices.io — Chris Richardson', url: 'https://microservices.io/', type: 'web' }
        ]},
        { name: 'Kubernetes', items: [
          { title: 'Kubernetes Official Tutorials', url: 'https://kubernetes.io/docs/tutorials/', type: 'docs' },
          { title: 'Killercoda — Free Interactive K8s Scenarios', url: 'https://killercoda.com/', type: 'course' }
        ]}
      ]
    },
    {
      level: 'Level 4',
      title: 'Advanced Specialization',
      desc: 'Performance, databases & cloud at expert level',
      categories: [
        { name: 'Performance Engineering', items: [
          { title: 'Go pprof Guide', url: 'https://go.dev/blog/pprof', type: 'docs' },
          { title: 'Systems Performance by Brendan Gregg', url: null, type: 'book' }
        ]},
        { name: 'Distributed Databases', items: [
          { title: 'CMU Database Group Lectures (YouTube)', url: 'https://www.youtube.com/@cmudatabasegroup', type: 'video' }
        ]},
        { name: 'Cloud Architecture', items: [
          { title: 'AWS Architecture Center', url: 'https://aws.amazon.com/architecture/', type: 'docs' }
        ]},
        { name: 'High-Scale / Load Testing', items: [
          { title: 'k6 Documentation', url: 'https://k6.io/docs/', type: 'docs' }
        ]}
      ]
    }
  ];
