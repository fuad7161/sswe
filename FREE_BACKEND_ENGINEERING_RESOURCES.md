# 🚀 Free Alternatives to "Fundamentals of Backend Engineering" by Hussein Nasser

> **Your inability to pay for a course should NEVER stop you from learning.**
> The internet is full of incredible, free resources — many created by Hussein Nasser himself.
> This guide maps every major topic from the Udemy course to **100% free** alternatives.

---

## 📋 Table of Contents

- [About This Guide](#about-this-guide)
- [🎯 The Best News First — Hussein Nasser's FREE YouTube Content](#-the-best-news-first--hussein-nassers-free-youtube-content)
- [Section 1: Communication Design Patterns](#section-1-communication-design-patterns)
- [Section 2: Protocols (HTTP, gRPC, WebSockets, QUIC)](#section-2-protocols-http-grpc-websockets-quic)
- [Section 3: Execution Models & Concurrency](#section-3-execution-models--concurrency)
- [Section 4: Proxies & Infrastructure](#section-4-proxies--infrastructure)
- [Section 5: OSI Model & Networking Foundations](#section-5-osi-model--networking-foundations)
- [📚 Complete Free Courses (Structured Learning)](#-complete-free-courses-structured-learning)
- [🛠️ Hands-On Practice Projects](#️-hands-on-practice-projects)
- [📖 Free Books & References](#-free-books--references)
- [💡 My Honest Thoughts](#-my-honest-thoughts)
- [📅 Suggested 8-Week Study Plan](#-suggested-8-week-study-plan)

---

## About This Guide

The Udemy course **"Fundamentals of Backend Communications and Protocols"** by Hussein Nasser covers these core pillars:

| Pillar | Topics Covered |
|--------|---------------|
| **Communication Patterns** | Request-Response, Pub/Sub, Short Polling, Long Polling, Push, SSE |
| **Protocols** | HTTP/1.1, HTTP/2, HTTP/3, gRPC, WebRTC, QUIC, TLS/SSL |
| **Execution Models** | Processes vs Threads, Multi-process/Multi-threaded, Sync vs Async I/O |
| **Infrastructure** | Forward/Reverse Proxies, Load Balancing, Stateful vs Stateless, Sidecars |
| **Networking** | OSI Model, TCP, UDP, Connection Establishment |

**Every single one of these topics** has excellent free resources available. Let's dive in. 👇

---

## 🎯 The Best News First — Hussein Nasser's FREE YouTube Content

Here's something amazing: **Hussein Nasser himself** publishes hundreds of hours of free backend engineering content on YouTube! He has organized his videos into structured playlists:

### Core Backend Engineering Playlists (FREE)
| Level | Playlist | Link |
|-------|----------|------|
| 🟢 Beginner | Backend Engineering (Beginner) | [YouTube Playlist](https://www.youtube.com/playlist?list=PLQnljOFTspQUNnO4p00ua_C5mKTfldiYT) |
| 🟡 Intermediate | Backend Engineering (Intermediate) | [YouTube Playlist](https://www.youtube.com/playlist?list=PLQnljOFTspQWGuRmwojJ6LiV0ejm6eOcs) |
| 🔴 Advanced | Backend Engineering (Advanced) | [YouTube Playlist](https://www.youtube.com/playlist?list=PLQnljOFTspQUybacGRk1b_p13dgI-SmcZ) |

### Specialized Playlists (FREE)
| Topic | Link |
|-------|------|
| 🗄️ Database Engineering | [YouTube Playlist](https://www.youtube.com/playlist?list=PLQnljOFTspQXjD0HOzN7P2tgzu7scWpl2) |
| ⚖️ Load Balancing & Proxies | [YouTube Playlist](https://www.youtube.com/playlist?list=PLQnljOFTspQVMeBmWI2AhxULWEeo7AaMC) |
| 🏗️ Software Architecture | [YouTube Playlist](https://www.youtube.com/playlist?list=PLQnljOFTspQXNP6mQchJVP3S-3oKGEuw9) |
| 📨 Messaging Systems | [YouTube Playlist](https://www.youtube.com/playlist?list=PLQnljOFTspQVcumYRWE2w9kVxxIXy_AMo) |

> **Main Channel:** [Hussein Nasser - Software Engineering](https://www.youtube.com/c/HusseinNasser-software-engineering)

⭐ **This alone covers a massive portion of the Udemy course content — for free!**

---

## Section 1: Communication Design Patterns

*Covers: Request-Response, Pub/Sub, Short Polling, Long Polling, Push, Server-Sent Events*

### 📹 Video Resources (FREE)
- **Hussein Nasser's YouTube** — He has individual deep-dive videos on each pattern on his channel. Search his channel for specific topics like "long polling", "SSE", "pub sub".
- **freeCodeCamp YouTube** — Various tutorials on WebSockets, SSE, and real-time communication patterns.

### 📝 Articles & Guides (FREE)
| Resource | What It Covers | Link |
|----------|---------------|------|
| **freeCodeCamp: Communication Design Patterns** | Request-Response, Pub/Sub, Polling, Push — with code examples | [Read Here](https://www.freecodecamp.org/news/communication-design-patterns-for-backend-development/) |
| **freeCodeCamp: Full Handbook on HTTP, REST, WebSockets, GraphQL, gRPC** | Comprehensive guide covering all client-server communication methods | [Read Here](https://www.freecodecamp.org/news/how-clients-and-servers-communicate-full-handbook/) |
| **GeeksforGeeks: Communication Design Patterns** | Structured comparison with pros/cons of each pattern | [Read Here](https://www.geeksforgeeks.org/communication-design-patterns-for-backend-development/) |
| **Formation.dev: Polling vs SSE vs WebSockets** | Deep comparison of real-time communication approaches | [Read Here](https://formation.dev/blog/server-push-doesnt-exist-polling-sse-websockets/) |

### Quick Reference: When to Use What

| Pattern | How It Works | Best For |
|---------|-------------|----------|
| **Request-Response** | Client asks → Server replies | Standard APIs (REST, GraphQL) |
| **Short Polling** | Client asks repeatedly at intervals | Simple status checks |
| **Long Polling** | Server holds request until data is ready | Near-real-time without WebSockets |
| **SSE** | One-way server → client stream over HTTP | Live dashboards, news feeds |
| **WebSockets** | Full-duplex persistent connection | Chat apps, gaming, collaboration |
| **Pub/Sub** | Decoupled via message broker | Event-driven architectures at scale |

---

## Section 2: Protocols (HTTP, gRPC, WebSockets, QUIC)

*Covers: HTTP/1.1, HTTP/2, HTTP/3, gRPC, WebRTC, QUIC, TLS/SSL*

### 📹 Video Resources (FREE)
- **Hussein Nasser's YouTube** — He has dedicated videos on HTTP/2, HTTP/3, QUIC, gRPC, and TLS. These are essentially the same explanations from his Udemy course.
- **freeCodeCamp YouTube** — Full courses on HTTP and API protocols.

### 📝 Articles & Documentation (FREE)
| Resource | What It Covers | Link |
|----------|---------------|------|
| **MDN Web Docs: HTTP** | The gold standard reference for HTTP protocol | [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) |
| **MDN Web Docs: WebSockets API** | Complete WebSocket protocol and API guide | [MDN WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) |
| **gRPC Official Docs** | Official guides, tutorials, and concepts for gRPC | [grpc.io](https://grpc.io/docs/) |
| **Cloudflare: What is QUIC?** | Excellent explanation of QUIC and HTTP/3 | [Cloudflare Learning](https://www.cloudflare.com/learning/performance/what-is-http3/) |
| **Cloudflare: What is TLS/SSL?** | Clear explanation of TLS handshake and encryption | [Cloudflare TLS](https://www.cloudflare.com/learning/ssl/what-is-ssl/) |

### Protocol Comparison

| Protocol | Use Case | Key Feature |
|----------|----------|-------------|
| **HTTP/1.1** | General web requests | Head-of-line blocking, text-based |
| **HTTP/2** | Performance optimization | Multiplexing, header compression, server push |
| **HTTP/3** | Modern high-performance | Uses QUIC (UDP-based), no head-of-line blocking |
| **gRPC** | Microservice-to-microservice | Binary (Protobuf), streaming, strongly typed |
| **WebRTC** | Peer-to-peer media | Real-time audio/video, data channels |

---

## Section 3: Execution Models & Concurrency

*Covers: Process vs Thread, Multi-process/Multi-threaded, Sync vs Async I/O*

### 📹 Video Resources (FREE)
- **Hussein Nasser's YouTube** — Videos on event loops, threading models, and how Node.js/Python/Java handle concurrency.
- **[Jacob Sorber (YouTube)](https://www.youtube.com/c/JacobSorber)** — Excellent C/systems-level explanations of processes, threads, and concurrency.

### 📝 Articles & Guides (FREE)
| Resource | What It Covers | Link |
|----------|---------------|------|
| **freeCodeCamp: Concurrency Guide** | Threads, processes, async patterns explained | [freeCodeCamp](https://www.freecodecamp.org/news/concurrency-in-operating-systems/) |
| **System Design Primer (GitHub)** | Covers async processing, threading models in system design context | [GitHub Repo](https://github.com/donnemartin/system-design-primer) |
| **Real Python: Concurrency** | Practical guide to threading, multiprocessing, and asyncio | [Real Python](https://realpython.com/python-concurrency/) |

### Key Concepts to Master

```
┌─────────────────────────────────────────────────┐
│              Execution Models                    │
├─────────────────┬───────────────────────────────┤
│   PROCESS       │   THREAD                      │
│ • Own memory    │ • Shared memory               │
│ • Heavyweight   │ • Lightweight                 │
│ • Isolated      │ • Can communicate easily      │
│ • Fork/Exec     │ • Part of a process           │
├─────────────────┴───────────────────────────────┤
│              I/O Models                          │
├─────────────────┬───────────────────────────────┤
│   SYNCHRONOUS   │   ASYNCHRONOUS                │
│ • Blocking      │ • Non-blocking                │
│ • Simple code   │ • Event-driven                │
│ • Thread-per-   │ • Single-thread can handle    │
│   request       │   many connections            │
└─────────────────┴───────────────────────────────┘
```

---

## Section 4: Proxies & Infrastructure

*Covers: Forward/Reverse Proxies, Load Balancing, Stateful vs Stateless, Sidecars*

### 📹 Video Resources (FREE)
- **Hussein Nasser's Load Balancing & Proxies Playlist** — [YouTube Playlist](https://www.youtube.com/playlist?list=PLQnljOFTspQVMeBmWI2AhxULWEeo7AaMC)
- **[freeCodeCamp: NGINX for Backend Developers](https://www.youtube.com/watch?v=N4t_e5t2y-o)** — Hands-on NGINX as reverse proxy and load balancer.
- **freeCodeCamp: System Design Course** — Covers load balancing, scaling, and infrastructure.

### 📝 Articles & Guides (FREE)
| Resource | What It Covers | Link |
|----------|---------------|------|
| **System Design Primer** | Load balancing, reverse proxies, CDNs, caching — all in one place | [GitHub Repo](https://github.com/donnemartin/system-design-primer) |
| **NGINX Official Docs** | Complete documentation for proxy configuration | [nginx.org](https://nginx.org/en/docs/) |
| **Cloudflare: What is a Reverse Proxy?** | Clear visual explanation | [Cloudflare](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/) |
| **Awesome System Design Resources** | Curated links for proxies, LB, microservices | [GitHub Repo](https://github.com/ashishps1/awesome-system-design-resources) |

### Proxy Types at a Glance

```
Forward Proxy:                    Reverse Proxy:
                                  
Client → [Proxy] → Internet      Internet → [Proxy] → Server(s)
                                  
• Hides client identity           • Hides server identity
• Content filtering               • Load balancing
• Bypassing restrictions          • SSL termination
                                  • Caching
```

---

## Section 5: OSI Model & Networking Foundations

*Covers: OSI Model, TCP, UDP, Connection Establishment*

### 📹 Video Resources (FREE)
- **Hussein Nasser's YouTube** — He has multiple videos explaining OSI layers, TCP handshake, and UDP.
- **[NetworkChuck (YouTube)](https://www.youtube.com/c/NetworkChuck)** — Fun, beginner-friendly networking videos.
- **[Ben Eater (YouTube)](https://www.youtube.com/c/BenEater)** — Deep, hardware-level networking explanations.

### 🎓 Academic Courses (FREE)
| Course | Institution | Link |
|--------|-------------|------|
| **CS144: Intro to Computer Networking** | Stanford | [cs144.github.io](https://cs144.github.io/) |
| **Computer Networks (6.829)** | MIT OpenCourseWare | [MIT OCW](https://ocw.mit.edu/courses/6-829-computer-networks-fall-2002/) |
| **Computer System Engineering (6.033)** | MIT OpenCourseWare | [MIT OCW](https://ocw.mit.edu/courses/6-033-computer-system-engineering-spring-2018/) |

---

## 📚 Complete Free Courses (Structured Learning)

If you prefer a structured, course-like experience, these are your best bets:

| Course / Resource | Format | Link |
|-------------------|--------|------|
| **Hussein Nasser YouTube Playlists** (Beginner → Advanced) | Video Playlists | [See playlists above](#-the-best-news-first--hussein-nassers-free-youtube-content) |
| **Stanford CS144: Computer Networking** | University Course (free) | [cs144.github.io](https://cs144.github.io/) |
| **MIT 6.033: Computer System Engineering** | University Course (free) | [MIT OCW](https://ocw.mit.edu/courses/6-033-computer-system-engineering-spring-2018/) |
| **System Design Primer** | Self-paced GitHub repo | [GitHub](https://github.com/donnemartin/system-design-primer) |
| **freeCodeCamp Backend Development** | Articles + YouTube | [freeCodeCamp.org](https://www.freecodecamp.org/) |
| **The Odin Project** | Full-stack curriculum | [theodinproject.com](https://www.theodinproject.com/) |
| **Karan Pratap Singh: System Design** | Free online book | [karanpratapsingh.com](https://www.karanpratapsingh.com/courses/system-design) |

---

## 🛠️ Hands-On Practice Projects

Reading and watching alone won't make you a backend engineer. **Build these projects** to solidify your learning:

### Project 1: Multi-Protocol Chat App
> Build a chat app that uses **HTTP** for user registration, **WebSockets** for real-time messaging, and **SSE** for notifications.

### Project 2: Load Balancer from Scratch
> Write a simple Layer 7 load balancer in your preferred language that distributes requests across multiple backend servers using Round Robin.

### Project 3: Pub/Sub Message Broker
> Build a basic publish-subscribe system where publishers send messages to topics and subscribers receive them asynchronously.

### Project 4: Reverse Proxy with NGINX
> Set up NGINX as a reverse proxy in front of a Node.js/Python app. Configure SSL termination, caching, and rate limiting.

### Project 5: Async vs Sync Server Benchmark
> Build the same HTTP server in both synchronous (thread-per-request) and asynchronous (event-loop) styles. Benchmark them under load.

---

## 📖 Free Books & References

| Book / Resource | Link |
|-----------------|------|
| **"High Performance Browser Networking"** by Ilya Grigorik | [hpbn.co](https://hpbn.co/) (Free online) |
| **"Beej's Guide to Network Programming"** | [beej.us](https://beej.us/guide/bgnet/) (Free online) |
| **MDN Web Docs** | [developer.mozilla.org](https://developer.mozilla.org/) |
| **Cloudflare Learning Center** | [cloudflare.com/learning](https://www.cloudflare.com/learning/) |

---

## 💡 My Honest Thoughts

### ❌ What I Cannot Do
- I **cannot** provide stolen Udemy credentials — that would be piracy and it's illegal.
- I **cannot** bypass paywalls or crack courses — that harms creators like Hussein Nasser who put incredible effort into their content.

### ✅ What I Believe
- **Learning should be accessible to everyone.** And the beautiful truth is: for backend engineering, it already is!
- Hussein Nasser himself shares a **massive amount** of his knowledge for free on YouTube. He's one of the most generous educators in tech.
- The free resources listed above cover **every single topic** from his Udemy course.
- When you can afford it, **buying his course is a great way to support him** and get a more structured experience. Think of it as investing in a creator who gives so much for free.

### 🌟 The Reality
> You don't need a subscription to become a great backend engineer.
> You need **curiosity**, **consistency**, and **the willingness to build things**.
> All the knowledge is out there — for free. Go get it! 💪

---

## 📅 Suggested 8-Week Study Plan

| Week | Topic | Primary Free Resources |
|------|-------|----------------------|
| **1** | Networking Foundations & OSI Model | Stanford CS144 + Hussein Nasser OSI videos |
| **2** | TCP, UDP & Connection Establishment | Beej's Guide + Hussein Nasser TCP videos |
| **3** | HTTP/1.1, HTTP/2, HTTP/3 | MDN Docs + Hussein Nasser HTTP playlist |
| **4** | Communication Patterns (Polling, SSE, WebSockets) | freeCodeCamp articles + Hussein Nasser videos |
| **5** | gRPC, Protobuf & Advanced Protocols | grpc.io docs + Hussein Nasser gRPC videos |
| **6** | Processes, Threads & Concurrency | MIT 6.033 + Hussein Nasser execution videos |
| **7** | Proxies, Load Balancing & Infrastructure | System Design Primer + NGINX tutorial |
| **8** | Build Projects & Review | Build 2-3 projects from the list above |

---

> *"The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it."*
> — **Jordan Belfort**

**Now go learn. All of this is free. All of this is yours. 🚀**
