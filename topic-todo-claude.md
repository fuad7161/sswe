# Senior Software Engineer (Go-Focused) — Technology Checklist

## 1. Go — Expert Level
> ⏱️ **Estimated Time: 3-4 Days** (already know basics → expert proficiency)

### Core Go
- Goroutines, Channels, `select`
- Context, Interfaces, Structs and composition
- Error handling, Generics, Reflection
- Memory allocation, Escape analysis, Garbage collection
- Stack vs heap, Race conditions
- `sync` package: Mutex, RWMutex, WaitGroup, Once, Pool, Cond
- Atomic operations, Go memory model

### Advanced Go
- Profiling with `pprof` (CPU & memory profiling)
- Benchmarking, Race detector
- `go test`, `go vet`, `staticcheck`, `golangci-lint`
- Build tags, Modules, Cross-compilation
- Graceful shutdown, Dependency injection
- Go project architecture

### Important Go Libraries
- `net/http`, `context`, `database/sql`, `encoding/json`, `sync`, `errgroup`, `slog`

### Common Frameworks/Libraries
- Chi, Gin, Echo
- gRPC-Go, ConnectRPC
- sqlc, pgx
- GORM (understand it, but prefer raw SQL / sqlc for depth)

---

## 2. Computer Science Fundamentals
> ⏱️ **Estimated Time: 1 week** (DSA practice + complexity analysis)

### Data Structures
Arrays, Linked Lists, Stacks, Queues, Hash Maps, Trees, Binary Search Trees, Heaps, Tries, Graphs

### Algorithms
Sorting, Searching, BFS, DFS, Dijkstra, Topological Sort, Dynamic Programming, Greedy algorithms, Sliding Window, Two Pointers, Binary Search

### Complexity
- Time Complexity, Space Complexity, Amortized Complexity
- e.g., understand why `map[string]int` lookup is ~O(1) but can degrade

---

## 3. Networking — Extremely Important
> ⏱️ **Estimated Time: 1 week** (conceptual understanding + hands-on with tools)

### Must Know
- OSI Model, TCP/IP Model
- TCP, UDP
- HTTP/1.1, HTTP/2, HTTP/3, QUIC
- DNS, TLS/SSL, IP, Subnetting, NAT
- Firewall, Proxy, Reverse Proxy, Load Balancer

### HTTP Deep Dive
- Methods, Status codes, Headers, Cookies, Sessions
- CORS, CSRF
- HTTP caching, ETags, Keep-alive, Connection pooling, Compression, HTTP streaming

### Tools
`curl`, `dig`, `nslookup`, `ping`, `traceroute`, `netstat`, `ss`, Wireshark

---

## 4. API Development
> ⏱️ **Estimated Time: 1 week** (REST + gRPC theory and hands-on implementation)

### REST
- Resource design, HTTP methods, Idempotency
- Pagination, Filtering, Sorting, Versioning
- Rate limiting, Error design, API documentation

```
GET    /users
GET    /users/{id}
POST   /users
PUT    /users/{id}
PATCH  /users/{id}
DELETE /users/{id}
```

### gRPC
- Protocol Buffers
- Unary / Server streaming / Client streaming / Bidirectional streaming
- Deadlines, Cancellation, Interceptors, Error handling, Load balancing

### Other API Technologies
GraphQL, WebSockets, Server-Sent Events, Webhooks

---

## 5. Databases
> ⏱️ **Estimated Time: 1 week** (PostgreSQL deep dive + NoSQL concepts)

### PostgreSQL (Deep Knowledge)
- SQL, Joins, Indexes (B-Tree, Hash, GIN, GiST)
- Transactions, ACID, Isolation levels, MVCC, Locks, Deadlocks
- Query optimization: `EXPLAIN`, `EXPLAIN ANALYZE`
- Partitioning, Replication, Connection pooling

### PostgreSQL Tools
`psql`, pgAdmin, pgBouncer, Flyway, Goose, Atlas

### Recommended Go PostgreSQL Stack
```
Go
 ↓
pgx
 ↓
sqlc
 ↓
PostgreSQL
```

### NoSQL Databases
- **Redis** — Cache, Session store, Distributed lock, Pub/Sub, Streams, Rate limiting, Leaderboards
- **MongoDB** — Document database, Flexible schema, Aggregation pipeline, Indexing
- **Elasticsearch/OpenSearch** — Full-text search, Log searching, Distributed search

### Other Databases (Concept-Level)
Cassandra, DynamoDB, ClickHouse, Neo4j

---

## 6. Caching
> ⏱️ **Estimated Time: 1 week** (Redis hands-on + caching patterns theory)

### Technologies
Redis, Memcached, CDN (Cloudflare, AWS CloudFront)

### Concepts
- Cache-aside, Read-through, Write-through, Write-behind
- TTL, Eviction, LRU
- Cache stampede, Cache penetration, Cache avalanche
- Distributed caching, Cache invalidation


> "There are only two hard things in Computer Science: cache invalidation and naming things."

---

## 7. Message Brokers & Event-Driven Architecture
> ⏱️ **Estimated Time: 1 week** (Kafka + RabbitMQ hands-on setup and implementation)

### Kafka
Topics, Partitions, Brokers, Consumer groups, Offsets, Replication, Retention, Ordering, Delivery guarantees, Exactly-once semantics, At-least-once delivery

### RabbitMQ
Exchanges, Queues, Bindings, Routing keys, Acknowledgements, Dead-letter queues, Prefetch

### Other Technologies
NATS, NATS JetStream, Amazon SQS, Amazon SNS, Google Pub/Sub

**Priority: Kafka + RabbitMQ + SQS**

---

## 8. Distributed Systems
> ⏱️ **Estimated Time: 1 week** (heavy theory + reasoning through real-world scenarios)

- CAP theorem, PACELC
- Distributed consensus, Leader election
- Replication, Sharding, Consistent hashing
- Distributed locks
- Eventual vs Strong consistency
- Idempotency
- Distributed transactions, Two-phase commit
- Saga pattern, Outbox pattern
- CQRS, Event sourcing

**Example scenario to reason through:**
```
User sends payment request
        ↓
Request times out
        ↓
Did payment succeed?
        ↓
Retry?
```

---

## 9. System Design
> ⏱️ **Estimated Time: 1 week** (design 1–2 systems per day, review trade-offs)

### Be Comfortable Designing
URL Shortener, Chat System, Notification System, Payment System, File Upload System, Video Streaming System, Ride Sharing System, Social Media Feed, E-commerce System, Hotel Reservation System, Distributed Rate Limiter, Job Queue, Search System

### Design Topics
Scalability, Availability, Reliability, Fault tolerance, Horizontal/Vertical scaling, Load balancing, Database scaling, Caching, Message queues, Microservices vs Monoliths, Service discovery, API Gateway

---

## 10. Microservices
> ⏱️ **Estimated Time: 1 week** (patterns study + small project implementing 2–3 services)

- Service boundaries, Database per service
- API Gateway, Service discovery
- Circuit breaker, Retry, Timeout, Bulkhead pattern
- Distributed tracing, Centralized logging, Configuration management

### Technologies
Kubernetes, Docker, Istio, Envoy, Consul, etcd

---

## 11. Docker and Containers
> ⏱️ **Estimated Time: 1 week** (Dockerfile + Compose hands-on builds)

Dockerfile, Docker Image, Container, Docker Network, Docker Volume, Docker Compose

### Understand
Multi-stage builds, Container networking, Container security, Resource limits, Health checks, Image optimization

```
Build Stage
     ↓
Compile Go Binary
     ↓
Minimal Runtime Image
     ↓
Run Binary
```

---

## 12. Kubernetes
> ⏱️ **Estimated Time: 1 week** (local cluster with Minikube/Kind + deploy a Go app)

### Core Concepts
Pod, Deployment, Service, ConfigMap, Secret, Namespace, Ingress, StatefulSet, DaemonSet, Job, CronJob

### Important Features
Horizontal Pod Autoscaling, Rolling Deployment, Liveness/Readiness Probes, Resource Limits, Service Discovery

### Tools
`kubectl`, Helm, Kustomize, Minikube, Kind

---

## 13. Cloud (AWS Recommended)
> ⏱️ **Estimated Time: 1 week** (AWS Free Tier hands-on + SAA-C03 concept alignment)

| Category | Services |
|---|---|
| Compute | EC2, ECS, EKS, Lambda |
| Storage | S3, EBS |
| Database | RDS, Aurora, DynamoDB |
| Networking | VPC, Subnets, Security Groups, Internet Gateway, NAT Gateway, Load Balancer |
| Messaging | SQS, SNS, MSK |
| CDN | CloudFront |
| Monitoring | CloudWatch |

### Typical Deployment Flow
```
Go API
   ↓
Docker
   ↓
AWS EC2 / ECS / Kubernetes
   ↓
PostgreSQL
   ↓
Redis
   ↓
Load Balancer
   ↓
CI/CD Pipeline
```

---

## 14. DevOps and CI/CD
> ⏱️ **Estimated Time: 1 week** (set up a real GitHub Actions pipeline for a Go project)

- **Version Control:** Git, GitHub, GitLab
- **CI/CD:** GitHub Actions, GitLab CI, Jenkins, ArgoCD
- **IaC:** Terraform, Ansible
- **Container Tools:** Docker, Kubernetes, Helm

### Typical Pipeline
```
Developer Push
      ↓
GitHub
      ↓
Run Tests
      ↓
Run Linter
      ↓
Build Docker Image
      ↓
Push Image
      ↓
Deploy
      ↓
Health Check
```

---

## 15. Observability
> ⏱️ **Estimated Time: 1 week** (instrument a Go app with OpenTelemetry + set up Grafana stack)

### Logs
Structured logging, Log levels, Correlation IDs, Request IDs
**Tools:** Loki, ELK Stack, OpenSearch

### Metrics
Counter, Gauge, Histogram, Summary
**Tools:** Prometheus, Grafana

### Tracing
Trace, Span, Context propagation
**Tools:** OpenTelemetry, Jaeger, Tempo

### Recommended Stack
```
Go Application
      ↓
OpenTelemetry
      ↓
Prometheus → Metrics
Loki       → Logs
Tempo      → Traces
Grafana    → Dashboard
```

---

## 16. Security
> ⏱️ **Estimated Time: 1 week** (implement JWT + OAuth in a project, study threat models)

### Authentication
Session-based auth, JWT, OAuth 2.0, OpenID Connect, SAML

### Security Concepts
TLS, Password hashing (bcrypt, Argon2), SQL Injection, XSS, CSRF, SSRF, CORS, Rate limiting, Secrets management

### Tools
Keycloak, HashiCorp Vault, AWS Secrets Manager

---

## 17. Testing
> ⏱️ **Estimated Time: 1 week** (write unit + integration tests for an existing project)

- **Unit Testing:** `func TestCalculateTotal(t *testing.T) {}`
- **Integration Testing:** Go Application → PostgreSQL → Redis
- **End-to-End Testing:** Full system testing

### Important Tools
Go testing package, Testify, GoMock, Mockery, Testcontainers, Postman/Newman, k6

---

## 18. Linux and Operating Systems
> ⏱️ **Estimated Time: 1 week** (daily Linux usage + diagnose a slow/broken service)

### Important Topics
Processes, Threads, Signals, File descriptors, Memory, CPU, Disk I/O, Scheduling, Virtual memory, Permissions, Sockets

### Linux Tools
`top`, `htop`, `ps`, `lsof`, `strace`, `vmstat`, `iostat`, `df`, `du`, `free`, `ss`, `netstat`, `journalctl`, `systemctl`

### Key Debugging Questions
- Why is the service slow?
- Why is CPU high?
- Why is memory increasing?
- Why are connections exhausted?

---

## 19. Architecture and Design Patterns
> ⏱️ **Estimated Time: 1 week** (read + apply patterns in a real or toy project)

### General Design Patterns
Factory, Strategy, Adapter, Observer, Decorator, Builder, Command

### Backend Patterns
Repository, Service Layer, Dependency Injection, Middleware, CQRS, Saga, Outbox, Circuit Breaker, Retry, Bulkhead

### Architecture Styles
Layered Architecture, Clean Architecture, Hexagonal Architecture, Domain-Driven Design

---

## 20. Tools You Should Be Comfortable With
> ⏱️ **Estimated Time: Ongoing** (pick up as needed throughout other topics)

| Category | Tools |
|---|---|
| Development | Git, GitHub, Linux, Docker, Make, Go |
| API | Postman, Insomnia, curl, Swagger/OpenAPI |
| Database | psql, DBeaver, pgAdmin, Redis CLI |
| Debugging | Delve, pprof, strace, Wireshark |
| DevOps | Docker Compose, Kubernetes, kubectl, Helm, Terraform, GitHub Actions |
| Monitoring | Prometheus, Grafana, OpenTelemetry, Jaeger, Loki |

---

## 📊 Total Estimated Time Summary

| # | Topic | Estimated Time |
|---|---|---|
| 1 | Go — Expert Level | 1 week |
| 2 | CS Fundamentals (DSA) | 1 week |
| 3 | Networking | 1 week |
| 4 | API Development | 1 week |
| 5 | Databases | 1 week |
| 6 | Caching | 1 week |
| 7 | Message Brokers & Event-Driven | 1 week |
| 8 | Distributed Systems | 1 week |
| 9 | System Design | 1 week |
| 10 | Microservices | 1 week |
| 11 | Docker & Containers | 1 week |
| 12 | Kubernetes | 1 week |
| 13 | Cloud (AWS) | 1 week |
| 14 | DevOps & CI/CD | 1 week |
| 15 | Observability | 1 week |
| 16 | Security | 1 week |
| 17 | Testing | 1 week |
| 18 | Linux & OS | 1 week |
| 19 | Architecture & Design Patterns | 1 week |
| 20 | Tools | Ongoing |
| **Total** | | **~19 weeks** |