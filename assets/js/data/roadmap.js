export const roadmap = [
    {
      id: 's1',
      title: '1 — Go Language and Standard Library',
      topics: [
        { title: 'Core Go', items: ['Variables and constants','Primitive data types','Strings and runes','Arrays','Slices','Maps','Structs','Methods','Pointers','Functions','Multiple return values','Variadic functions','Closures','init function','blank identifier','iota','Defer','Panic','Recover','Interfaces','Composition','Embedding','Type assertions','Type switches','Generics','Reflection'] },
        { title: 'Go Error Handling', items: ['error interface','errors.New','fmt.Errorf','%w error wrapping','errors.Is','errors.As','Custom errors','panic vs error','Error handling strategies','Error propagation','Sentinel errors','Error design in APIs'] },
        { title: 'Go Concurrency', items: ['Goroutines','Channels','Buffered channels','Unbuffered channels','Directional channels','select','Channel closing','Worker pools','Fan-in','Fan-out','Pipelines','sync.Mutex','sync.RWMutex','sync.WaitGroup','sync.Once','sync.Cond','sync.Pool','sync/atomic','Atomic operations','Race conditions','Deadlocks','Livelocks','Starvation','Go Memory Model','Race detector'] },
        { title: 'Go Runtime and Internals', items: ['Goroutine scheduler','GMP model','Stack growth','Heap vs stack','Escape analysis','Garbage collection','Garbage collector tuning','Memory allocation','Object lifetime','Runtime package','CPU profiling','Memory profiling','Goroutine profiling'] },
        { title: 'Go Project and Tooling', items: ['Go modules','go.mod','go.sum','go work','Dependency management','Semantic versioning','Build tags','Cross compilation','go build','go run','go test','go vet','go fmt','go generate','go install','go list','go env','pprof','Go benchmarks','golangci-lint','staticcheck','Delve debugger'] },
        { title: 'Go Standard Library', items: ['fmt','net/http','context','database/sql','encoding/json','encoding/xml','os','io','bufio','bytes','strings','strconv','sort','regexp','time','sync','sync/atomic','errors','log/slog','crypto','crypto/tls','crypto/sha256','crypto/rand','net','os/signal','syscall','reflect','runtime','testing','embed','flag','text/template','path/filepath'] }
      ]
    },
    {
      id: 's2',
      title: '2 — Java and Spring Boot',
      topics: [
        { title: 'Core Java', items: ['Java type system','Primitive types vs wrapper classes','String immutability','String pool','equals and hashCode contract','Object equality vs reference equality','final keyword','static keyword','Method overloading','Method overriding','Abstract classes vs interfaces','Composition vs inheritance','Immutability','Records','Enums','Annotations','Generics','Type erasure','Wildcards','Checked vs unchecked exceptions','try-with-resources','Optional','Java Date and Time API'] },
        { title: 'Collections and Functional Java', items: ['Java Collections Framework','List vs Set vs Map','ArrayList vs LinkedList','HashMap internals','HashMap collisions','ConcurrentHashMap','HashSet internals','TreeMap and TreeSet','Comparable vs Comparator','Fail-fast vs fail-safe iterators','Streams API','Intermediate vs terminal stream operations','map vs flatMap','Lambda expressions','Functional interfaces','Method references','Parallel streams','Collectors'] },
        { title: 'JVM and Memory', items: ['JDK vs JRE vs JVM','Java compilation and bytecode','Class loading','Class loader hierarchy','Parent delegation model','Heap vs stack in Java','JVM memory areas','Object lifecycle','Garbage collection in Java','Generational garbage collection','G1 garbage collector','ZGC','Stop-the-world pauses','Strong soft weak and phantom references','Java Memory Model','Happens-before relationship','volatile keyword','Escape analysis in Java','JIT compilation','JVM profiling','OutOfMemoryError','StackOverflowError','Memory leaks in Java'] },
        { title: 'Java Concurrency', items: ['Threads and Runnable','Callable and Future','Thread lifecycle','Race conditions in Java','synchronized keyword','Intrinsic locks','ReentrantLock','ReadWriteLock','volatile vs synchronized','Atomic classes','CAS in Java','ExecutorService','Thread pools in Java','CompletableFuture','Fork Join framework','Virtual threads','ThreadLocal','Concurrent collections','CountDownLatch','CyclicBarrier','Semaphore in Java','Deadlocks in Java','Livelocks in Java','Thread starvation','Concurrency exception handling'] },
        { title: 'Spring Core', items: ['Spring Framework','Inversion of Control','Dependency Injection in Spring','Constructor injection','Spring IoC container','BeanFactory vs ApplicationContext','Spring bean lifecycle','Spring bean scopes','Component scanning','Stereotype annotations','Java-based configuration','Conditional beans','Spring profiles','Bean ambiguity and @Qualifier','Circular dependencies in Spring','Spring proxy mechanism','JDK dynamic proxies vs CGLIB','Aspect-Oriented Programming','Spring events'] },
        { title: 'Spring Boot Fundamentals', items: ['Spring Boot','Spring Boot auto-configuration','Spring Boot starters','@SpringBootApplication','Configuration properties','Externalized configuration','Application startup lifecycle','Embedded web server','Spring Boot Actuator','Custom health indicators','Graceful shutdown in Spring Boot','Spring Boot logging','Spring Boot DevTools','Creating custom Spring Boot starters'] },
        { title: 'Spring MVC and REST APIs', items: ['Spring MVC request lifecycle','DispatcherServlet','@RestController vs @Controller','Request mapping annotations','Path variables vs request parameters','Request body deserialization','Bean Validation','Global exception handling','@ControllerAdvice','HTTP response design in Spring','Content negotiation in Spring','HTTP message converters','Servlet filters','Spring interceptors','Filters vs interceptors','CORS in Spring','File upload and streaming','REST API pagination','REST API idempotency','API versioning in Spring','OpenAPI with Spring Boot','WebClient','RestClient','RestTemplate','Spring MVC vs WebFlux','Reactive programming with Reactor','Mono vs Flux','Reactive backpressure'] },
        { title: 'Spring Data and Transactions', items: ['Spring Data JPA','JPA vs Hibernate','Entity lifecycle states','JPA persistence context','Dirty checking','First-level cache','Second-level cache','Lazy vs eager loading','N+1 query problem in JPA','JPQL vs native SQL','JpaRepository','Entity relationships','Cascade types','Orphan removal','Optimistic locking with @Version','Pessimistic locking in JPA','Spring transaction management','@Transactional','Transaction propagation','Transaction isolation in Spring','Transactional rollback rules','Self-invocation and @Transactional','Open Session in View','Database migrations with Flyway','Connection pooling with HikariCP','JDBC batching','Spring Data JDBC vs JPA'] },
        { title: 'Spring Security', items: ['Spring Security architecture','Security filter chain','Authentication vs authorization in Spring','SecurityContext','UserDetailsService','PasswordEncoder','Session-based authentication in Spring','JWT authentication in Spring','OAuth 2.0 in Spring Security','OpenID Connect in Spring Security','Resource server configuration','Method-level security','CSRF protection in Spring','CORS vs CSRF','Stateless API security','Role-based access control in Spring','Security exception handling','Password storage with BCrypt'] },
        { title: 'Messaging Caching and Resilience', items: ['Spring for Apache Kafka','Kafka consumer groups in Spring','Kafka retry and dead-letter topics','Message idempotency in Spring','Spring AMQP','Spring Cache abstraction','@Cacheable and cache eviction','Redis with Spring Boot','Resilience4j circuit breaker','Retry with Resilience4j','Timeouts with Resilience4j','Bulkhead pattern with Resilience4j','Rate limiting with Resilience4j','Transactional outbox in Spring'] },
        { title: 'Testing Spring Applications', items: ['JUnit 5','Mockito','Mock vs Spy','Unit testing Spring services','Spring Boot integration tests','@SpringBootTest','Spring test slices','@WebMvcTest','@DataJpaTest','MockMvc','WebTestClient','Testcontainers with Spring Boot','Testing transactions','Testing secured endpoints','Contract testing with Spring Cloud Contract'] },
        { title: 'Spring Microservices and Production', items: ['Spring Cloud','Centralized configuration with Spring Cloud Config','Service discovery with Spring Cloud','Spring Cloud Gateway','Declarative HTTP clients','Distributed tracing in Spring Boot','Micrometer','Prometheus metrics in Spring Boot','Structured logging in Spring Boot','Correlation IDs','Readiness and liveness probes','Dockerizing Spring Boot','Layered Spring Boot jars','Kubernetes configuration for Spring Boot','Spring Boot performance tuning','JVM container awareness','Observability in Spring Boot','Modular monolith with Spring Modulith'] }
      ]
    },
    {
      id: 's3',
      title: '3 — Data Structures and Algorithms',
      topics: [
        { title: 'Data Structures', items: ['Arrays','Strings','Linked Lists','Stacks','Queues','Deques','Hash Tables','Binary Trees','Binary Search Trees','AVL Trees','Red-Black Trees','Heaps','Priority Queues','Tries','Graphs','Union-Find / Disjoint Set'] },
        { title: 'Algorithms', items: ['Binary Search','Sorting','Merge Sort','Quick Sort','Heap Sort','BFS','DFS','Dijkstra','Bellman-Ford','Floyd-Warshall','Topological Sort','Union-Find Algorithms','Dynamic Programming','Greedy Algorithms','Backtracking','Sliding Window','Two Pointers','Prefix Sum','Recursion','Bit Manipulation'] },
        { title: 'Complexity', items: ['Big O','Big Omega','Big Theta','Time Complexity','Space Complexity','Amortized Complexity'] }
      ]
    },
    {
      id: 's4',
      title: '4 — Computer Science Fundamentals',
      topics: [
        { title: 'Operating Systems', items: ['Processes','Threads','Goroutines vs Threads','Context Switching','CPU Scheduling','Memory Management','Virtual Memory','Paging','Page Faults','Stack','Heap','File Descriptors','System Calls','Signals','Epoll','I/O multiplexing','Inter-Process Communication','Pipes','Shared Memory','Semaphores','Mutexes','Deadlocks'] },
        { title: 'Linux', items: ['Linux filesystem','File permissions','Users and groups','Processes','Services','Environment variables','Shell scripting','Bash','systemctl','journalctl','ps','top','htop','lsof','strace','vmstat','iostat','df','du','free','ss','netstat','kill','grep','awk','sed','find','xargs'] }
      ]
    },
    {
      id: 's5',
      title: '5 — Networking',
      topics: [
        { title: 'Networking Fundamentals', items: ['OSI Model','TCP/IP Model','IP Addresses','IPv4','IPv6','Subnetting','CIDR','MAC Addresses','ARP','NAT','Firewalls','Ports','Sockets'] },
        { title: 'TCP', items: ['TCP Handshake','TCP Connection Termination','TCP Flow Control','TCP Congestion Control','TCP Retransmission','TCP Keepalive','TCP Connection Pooling'] },
        { title: 'UDP', items: ['UDP Characteristics','UDP vs TCP','Use Cases'] },
        { title: 'DNS', items: ['DNS Resolution','DNS Records','A Record','AAAA Record','CNAME','MX','TXT','NS','PTR Record','DNS Caching','DNS TTL'] },
        { title: 'TLS', items: ['TLS Handshake','Certificates','Certificate Authorities','Public Key Cryptography','Symmetric Encryption','HTTPS','TLS Termination'] },
        { title: 'Networking Tools', items: ['curl','ping','dig','nslookup','traceroute','Wireshark'] }
      ]
    },
    {
      id: 's6',
      title: '6 — HTTP',
      topics: [
        { title: 'HTTP', items: ['HTTP Request','HTTP Response','HTTP Methods','HTTP Status Codes','HTTP Headers','HTTP Cookies','HTTP Sessions','HTTP Keep-Alive','HTTP Connection Pooling','HTTP Compression','HTTP Streaming','HTTP/1.0','HTTP/1.1','HTTP/2','HTTP/3','QUIC','HTTP Caching','Cache-Control','ETag','Last-Modified','Conditional Requests','Content Negotiation','Multipart Requests'] }
      ]
    },
    {
      id: 's7',
      title: '7 — API Development',
      topics: [
        { title: 'REST API', items: ['REST Principles','Resource Design','Idempotency','HATEOAS','Pagination','Cursor Pagination','Offset Pagination','Filtering','Sorting','Searching','API Versioning','Error Response Design','Rate Limiting','Token Bucket','Sliding Window Rate Limiting','Request Validation','Response Validation','API Documentation','OpenAPI','Swagger'] },
        { title: 'gRPC', items: ['Protocol Buffers','Unary RPC','Server Streaming','Client Streaming','Bidirectional Streaming','Deadlines','Timeouts','Cancellation','Interceptors','Metadata','Error Handling','gRPC Health Checking','gRPC Load Balancing'] },
        { title: 'Other API Technologies', items: ['GraphQL','WebSockets','Server-Sent Events','Webhooks','Long Polling'] }
      ]
    },
    {
      id: 's8',
      title: '8 — PostgreSQL',
      topics: [
        { title: 'SQL', items: ['SELECT','INSERT','UPDATE','DELETE','WHERE','ORDER BY','GROUP BY','HAVING','JOIN','INNER JOIN','LEFT JOIN','RIGHT JOIN','FULL JOIN','CROSS JOIN','Subqueries','CTEs','Window Functions','Aggregation','UNION','INTERSECT','EXCEPT','RETURNING','JSONB','Views','Triggers'] },
        { title: 'Database Design', items: ['Primary Keys','Foreign Keys','Unique Constraints','Check Constraints','Not Null Constraints','Natural Keys','Surrogate Keys','Normalization','Denormalization','1NF','2NF','3NF','BCNF'] },
        { title: 'Indexes', items: ['B-Tree Index','Hash Index','GIN Index','GiST Index','BRIN Index','Composite Index','Partial Index','Covering Index','Expression Index','Unique Index','Index Selectivity','Index Scan','Sequential Scan'] },
        { title: 'Transactions', items: ['ACID','Atomicity','Consistency','Isolation','Durability','Read Uncommitted','Read Committed','Repeatable Read','Serializable','MVCC','Row Locks','Table Locks','Deadlocks','Optimistic Locking','Pessimistic Locking'] },
        { title: 'Performance', items: ['EXPLAIN','EXPLAIN ANALYZE','Query Optimization','Slow Queries','Connection Pooling','PgBouncer','N+1 Query Problem','Database Partitioning','Table Partitioning','Read Replicas','Streaming Replication','Database Backups','Database Recovery'] },
        { title: 'Go PostgreSQL Stack', items: ['pgx','database/sql','sqlc','GORM','Goose','Atlas','Flyway'] }
      ]
    },
    {
      id: 's9',
      title: '9 — Redis',
      topics: [
        { title: 'Redis', items: ['Redis Strings','Redis Lists','Redis Sets','Redis Sorted Sets','Redis Hashes','Redis Streams','Redis Pub/Sub','Redis Transactions','Redis Pipelines','Redis Lua Scripts','Redis TTL','Redis Expiration','Redis Eviction Policies','Redis Persistence','RDB','AOF','Redis Replication','Redis Sentinel','Redis Cluster','Distributed Locks','HyperLogLog','Geospatial','Cache'] }
      ]
    },
    {
      id: 's10',
      title: '10 — Caching',
      topics: [
        { title: 'Caching Strategies', items: ['Cache-Aside','Read-Through Cache','Write-Through Cache','Write-Behind Cache','Cache Invalidation','Cache Warming','TTL','LRU','LFU','Cache Stampede','Cache Penetration','Cache Avalanche','Distributed Cache','Local Cache','CDN Cache','Browser Cache','HTTP Cache','Cache Versioning'] },
        { title: 'Technologies', items: ['Memcached','Cloudflare CDN','AWS CloudFront'] }
      ]
    },
    {
      id: 's11',
      title: '11 — Message Brokers',
      topics: [
        { title: 'Kafka', items: ['Topics','Partitions','Brokers','Producers','Consumers','Consumer Groups','Offsets','Partition Ordering','Retention','Log Compaction','At-Most-Once Delivery','At-Least-Once Delivery','Exactly-Once Semantics','Consumer Rebalancing','Kafka Connect','Kafka Streams'] },
        { title: 'RabbitMQ', items: ['Exchanges','Queues','Bindings','Routing Keys','Direct Exchange','Topic Exchange','Fanout Exchange','Headers Exchange','Acknowledgements','Prefetch','Dead Letter Queues','Retry Queues'] },
        { title: 'Other Messaging Systems', items: ['NATS','NATS JetStream','Amazon SQS','Amazon SNS','Google Pub/Sub'] }
      ]
    },
    {
      id: 's12',
      title: '12 — Distributed Systems',
      topics: [
        { title: 'Distributed Systems', items: ['CAP Theorem','PACELC','Consistency','Availability','Partition Tolerance','Strong Consistency','Eventual Consistency','Distributed Consensus','Raft Consensus','Paxos','Leader Election','Replication','Sharding','Consistent Hashing','Distributed Locks','Vector Clocks','Lamport Timestamps','Gossip Protocol','Clock Synchronization','Network Partitions','Split Brain','Partial Failures','Idempotency','Duplicate Requests','Exactly-Once Processing','Distributed Transactions','Two-Phase Commit'] }
      ]
    },
    {
      id: 's13',
      title: '13 — System Design',
      topics: [
        { title: 'Scalability', items: ['Vertical Scaling','Horizontal Scaling','Stateless Services','Load Balancing','Connection Pooling','Database Sharding','Database Scaling','CDN'] },
        { title: 'Reliability', items: ['High Availability','Fault Tolerance','Failover','Disaster Recovery','Chaos Engineering','Backup Strategy','Recovery Time Objective','Recovery Point Objective'] },
        { title: 'Design Problems', items: ['URL Shortener','Rate Limiter','Chat Application','Notification System','Payment System','File Upload System','Video Streaming System','Social Media Feed','Search System','Ride Sharing System','E-commerce System','Hotel Reservation System','Distributed Job Queue','Back-of-envelope Estimation'] }
      ]
    },
    {
      id: 's14',
      title: '14 — Software Architecture',
      topics: [
        { title: 'Software Architecture', items: ['Layered Architecture','Clean Architecture','Hexagonal Architecture','Ports and Adapters','Domain-Driven Design','Modular Monolith','Service-Oriented Architecture','Event-Driven Architecture'] },
        { title: 'Design Patterns', items: ['Factory Pattern','Strategy Pattern','Adapter Pattern','Observer Pattern','Decorator Pattern','Builder Pattern','Command Pattern','Repository Pattern','Service Layer Pattern','Dependency Injection','Middleware Pattern'] },
        { title: 'Distributed Patterns', items: ['Circuit Breaker','Retry Pattern','Timeout Pattern','Bulkhead Pattern','Saga Pattern','Outbox Pattern','CQRS','Event Sourcing'] }
      ]
    },
    {
      id: 's15',
      title: '15 — Microservices',
      topics: [
        { title: 'Microservices', items: ['Service Boundaries','Database per Service','API Gateway','Service Discovery','Service Mesh','Configuration Management','Health Checks','Distributed Transactions','Event-Driven Communication','Synchronous Communication','Asynchronous Communication','Backward Compatibility','Contract Testing'] }
      ]
    },
    {
      id: 's16',
      title: '16 — Docker',
      topics: [
        { title: 'Docker', items: ['Docker Images','Docker Containers','Dockerfile','.dockerignore','Docker Compose','Docker Networks','Docker Volumes','Docker Registry','Multi-Stage Builds','BuildKit','Image Optimization','Container Health Checks','Container Security','Container Resource Limits','Container Networking','Docker Hub','Private Registries'] }
      ]
    },
    {
      id: 's17',
      title: '17 — Kubernetes',
      topics: [
        { title: 'Core Concepts', items: ['Cluster','Node','Pod','Deployment','ReplicaSet','Service','Namespace','ConfigMap','Secret','Ingress','StatefulSet','DaemonSet','Job','CronJob'] },
        { title: 'Operations', items: ['kubectl','Health Checks','Liveness Probe','Readiness Probe','Startup Probe','Resource Requests','Resource Limits','Horizontal Pod Autoscaling','Rolling Deployments','Rollbacks','Service Discovery','Kubernetes Networking','Service Mesh'] },
        { title: 'Tools', items: ['Helm','Kustomize','Minikube','Kind'] }
      ]
    },
    {
      id: 's18',
      title: '18 — AWS Cloud',
      topics: [
        { title: 'Compute', items: ['EC2','ECS','EKS','Lambda'] },
        { title: 'Storage', items: ['S3','EBS','EFS'] },
        { title: 'Databases', items: ['RDS','Aurora','DynamoDB','ElastiCache'] },
        { title: 'Networking', items: ['VPC','Subnets','Route Tables','Internet Gateway','NAT Gateway','Security Groups','Network ACLs','Elastic Load Balancer','Application Load Balancer','Network Load Balancer','Route 53','API Gateway'] },
        { title: 'Messaging', items: ['SQS','SNS','MSK','EventBridge'] },
        { title: 'Monitoring', items: ['CloudWatch','CloudTrail'] },
        { title: 'CDN', items: ['CloudFront'] },
        { title: 'Container Registry', items: ['ECR'] },
        { title: 'Security', items: ['IAM','KMS','Secrets Manager','Parameter Store'] }
      ]
    },
    {
      id: 's19',
      title: '19 — DevOps and CI/CD',
      topics: [
        { title: 'Git', items: ['Git Basics','Branching','Merging','Rebasing','Cherry-pick','Revert','Reset','Stash','Git Hooks','Conventional Commits','Git Flow'] },
        { title: 'CI/CD', items: ['GitHub Actions','GitLab CI','Jenkins','ArgoCD','GitOps','Build Pipelines','Automated Testing','Automated Deployment','Blue-Green Deployment','Canary Deployment','Rolling Deployment','Rollbacks'] },
        { title: 'Infrastructure as Code', items: ['Terraform','Ansible','Terraform State','Terraform Modules','Infrastructure Provisioning','Makefile'] }
      ]
    },
    {
      id: 's20',
      title: '20 — Observability',
      topics: [
        { title: 'Logging', items: ['Structured Logging','Log Levels','Request IDs','Correlation IDs','Centralized Logging','Log Aggregation','Log Rotation'] },
        { title: 'Metrics', items: ['Counter','Gauge','Histogram','Summary','RED Method','USE Method','SLI','SLO','SLA','Alerting'] },
        { title: 'Tracing', items: ['Distributed Tracing','Trace','Span','Context Propagation','Trace Sampling'] },
        { title: 'Tools', items: ['Prometheus','Grafana','OpenTelemetry','Jaeger','Tempo','Loki','ELK Stack','OpenSearch'] },
        { title: 'Incident Management', items: ['On-call','PagerDuty','Runbooks'] }
      ]
    },
    {
      id: 's21',
      title: '21 — Security',
      topics: [
        { title: 'Authentication', items: ['Session Authentication','JWT','OAuth 2.0','OpenID Connect','SAML','API Keys','Basic Authentication','mTLS','RBAC'] },
        { title: 'Cryptography', items: ['Hashing','Encryption','Symmetric Encryption','Asymmetric Encryption','Digital Signatures'] },
        { title: 'Password Security', items: ['bcrypt','Argon2','Password Hashing','Salt'] },
        { title: 'Web Security', items: ['SQL Injection','XSS','CSRF','SSRF','CORS','Clickjacking','Session Hijacking','Brute Force Protection'] },
        { title: 'Security Tools', items: ['Keycloak','HashiCorp Vault','AWS Secrets Manager','AWS IAM'] }
      ]
    },
    {
      id: 's22',
      title: '22 — Testing',
      topics: [
        { title: 'Unit Testing', items: ['Go Testing Package','Test Tables','Test Fixtures','Test Helpers','Mocks','Stubs','Fakes','Test Coverage'] },
        { title: 'Integration Testing', items: ['Database Integration Tests','Redis Integration Tests','Kafka Integration Tests','API Integration Tests','Testcontainers'] },
        { title: 'End-to-End Testing', items: ['E2E Testing','API E2E Testing','User Flow Testing'] },
        { title: 'Advanced Testing', items: ['Fuzz Testing','Benchmark Testing'] },
        { title: 'Testing Tools', items: ['Testify','GoMock','Mockery','Postman','Newman','k6'] }
      ]
    },
    {
      id: 's23',
      title: '23 — Performance Engineering',
      topics: [
        { title: 'Performance Engineering', items: ['Benchmarking','Load Testing','Stress Testing','Soak Testing','Capacity Planning','Latency Analysis','Throughput Analysis','Memory Leaks','Goroutine Leaks','Connection Pool Tuning','Cache Optimization','Flame Graphs','Heap dump analysis'] },
        { title: 'Tools', items: ['Go pprof','perf','k6','Apache JMeter','Locust'] }
      ]
    },
    {
      id: 's24',
      title: '24 — Search and Analytics',
      topics: [
        { title: 'Elasticsearch / OpenSearch', items: ['Indexes','Documents','Mappings','Inverted Index','Full-Text Search','Queries','Aggregations','Sharding','Replication'] },
        { title: 'Other Databases', items: ['MongoDB','Cassandra','ClickHouse','Neo4j'] }
      ]
    },
    {
      id: 's25',
      title: '25 — Professional Senior Engineer Skills',
      topics: [
        { title: 'Code Quality', items: ['SOLID Principles','Clean Code','Code Reviews','Refactoring','Technical Debt','Design Documentation','ADRs','API Design','Backward Compatibility','Technical Writing'] },
        { title: 'Engineering Practices', items: ['Requirements Analysis','Technical Estimation','System Design','Trade-off Analysis','Incident Response','Root Cause Analysis','Postmortems','Production Debugging','Runbooks','On-call Rotation','Technical Leadership','Mentoring'] }
      ]
    },
    {
      id: 's26',
      title: '26 — Recommended Go Backend Stack',
      topics: [
        { title: 'Core', items: ['Go','Linux','Git'] },
        { title: 'API', items: ['net/http','Chi','REST','gRPC','WebSockets'] },
        { title: 'Database', items: ['PostgreSQL','pgx','sqlc','Goose'] },
        { title: 'Cache', items: ['Redis'] },
        { title: 'Messaging', items: ['Kafka','RabbitMQ'] },
        { title: 'Infrastructure', items: ['Docker','Kubernetes','Helm'] },
        { title: 'Cloud', items: ['AWS','EC2','S3','RDS','ECS/EKS','VPC','IAM','CloudFront'] },
        { title: 'CI/CD', items: ['GitHub Actions','Terraform'] },
        { title: 'Observability', items: ['Prometheus','Grafana','OpenTelemetry'] }
      ]
    },
    {
      id: 's27',
      title: '27 — Practical Projects',
      topics: [
        { title: 'Project 1 — Production REST API', items: ['Build Go REST API','PostgreSQL','Redis','Authentication','JWT','Pagination','Filtering','Rate Limiting','Unit Tests','Integration Tests','Docker','CI/CD','Deploy to AWS','Add Monitoring'] },
        { title: 'Project 2 — Distributed Notification System', items: ['Go API','Kafka','Worker Services','Retry Mechanism','Dead Letter Queue','Idempotency','Redis','PostgreSQL','Distributed Tracing','Metrics','Docker','Kubernetes'] },
        { title: 'Project 3 — Distributed Job Queue', items: ['Job Producer','Job Consumer','Worker Pool','Retry','Dead Letter Queue','Job Scheduling','Priority Queue','Redis','PostgreSQL','Kafka or RabbitMQ','Monitoring'] },
        { title: 'Project 4 — High-Scale URL Shortener', items: ['REST API','PostgreSQL','Redis','Distributed ID Generation','Caching','Rate Limiting','Load Balancing','Horizontal Scaling','Docker','Kubernetes','Monitoring'] },
        { title: 'Project 5 — Real-Time Chat System', items: ['WebSockets','Go','Redis','Kafka','PostgreSQL','Presence System','Message Delivery','Offline Messages','Message Ordering','Horizontal Scaling'] }
      ]
    },
    {
      id: 's28',
      title: '28 — Final Senior Engineer Checklist',
      topics: [
        { title: 'Final Checklist', items: ['I can write production-quality Go','I understand Go concurrency deeply','I can design REST APIs','I can design gRPC services','I understand TCP, HTTP, DNS, and TLS','I can design PostgreSQL schemas','I can optimize slow SQL queries','I understand Redis deeply','I understand Kafka or another message broker','I understand distributed systems','I can design scalable systems','I can build microservices','I can use Docker','I can deploy applications to Kubernetes','I can deploy applications to AWS','I can build CI/CD pipelines','I can monitor production systems','I can debug production incidents','I understand security fundamentals','I write unit and integration tests','I can perform performance optimization','I can review code','I can make architectural trade-offs','I can mentor other engineers','I can lead technical projects'] }
      ]
    }
  ];
