export const portfolioData = {
  personal: {
    name: "Alex Chen",
    title: "Senior Software Engineer",
    tagline: "I build scalable web systems",
    subtagline:
      "Specializing in real-time applications, high-concurrency backends, and distributed systems that handle millions of users.",
    email: "alex@alexchen.dev",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
    location: "San Francisco, CA",
    openToWork: true,
    avatar: "/avatar.jpg",
    bio: "I'm a full-stack engineer with 6+ years of experience building production systems at scale. I've architected real-time platforms handling 100K+ concurrent connections, led teams of 8 engineers, and shipped products used by millions.",
    story:
      "I don't just write code — I solve problems at scale. My journey started with a failed startup where I learned what happens when systems break under pressure. That experience shaped how I think: reliability first, performance always, user experience never compromised.",
  },

  metrics: [
    {
      label: "Concurrent Users",
      value: "100K+",
      description: "Peak connections handled in production",
      icon: "Users",
    },
    {
      label: "Daily Active Users",
      value: "2.4M",
      description: "Across deployed products",
      icon: "Activity",
    },
    {
      label: "Performance Gain",
      value: "68%",
      description: "Average API response time improvement",
      icon: "Zap",
    },
    {
      label: "Projects Shipped",
      value: "47",
      description: "Production deployments in 6 years",
      icon: "Package",
    },
    {
      label: "Uptime SLA",
      value: "99.99%",
      description: "Maintained across critical services",
      icon: "Shield",
    },
    {
      label: "Engineers Led",
      value: "12",
      description: "Maximum team size managed",
      icon: "GitMerge",
    },
  ],

  featuredProjects: [
    {
      id: "realtime-collab",
      title: "CollabStream",
      tagline: "Real-time collaborative workspace",
      description:
        "Built a Google Docs-like real-time collaboration platform supporting 100K+ concurrent users. Engineered conflict-free replicated data types (CRDTs) for operational transforms and WebSocket-based presence system.",
      problem:
        "Existing tools couldn't handle 100K+ simultaneous editors without data conflicts or race conditions.",
      solution:
        "Implemented CRDT-based operational transforms with a custom WebSocket gateway and Redis Pub/Sub for horizontal scaling.",
      impact: [
        "100K concurrent connections in production",
        "< 50ms sync latency globally",
        "99.99% uptime over 18 months",
        "Adopted by 3 Fortune 500 companies",
      ],
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "WebSockets",
        "Redis",
        "PostgreSQL",
        "Docker",
        "K8s",
      ],
      color: "cyan",
      links: {github: "#", live: "#"},
    },
    {
      id: "fintech-platform",
      title: "PayFlow Engine",
      tagline: "High-throughput payment processing",
      description:
        "Architected a payment processing microservice handling $50M in daily transactions with sub-100ms response times. Implemented distributed saga pattern for transaction integrity across 12 services.",
      problem:
        "Legacy monolith couldn't scale beyond 500 TPS and had a 0.3% failure rate causing millions in daily losses.",
      solution:
        "Migrated to event-driven microservices with CQRS, distributed sagas, and idempotency keys for exactly-once processing.",
      impact: [
        "10,000 transactions per second",
        "0.001% failure rate",
        "$0 in transaction losses post-launch",
        "85% infrastructure cost reduction",
      ],
      stack: [
        "Go",
        "gRPC",
        "Kafka",
        "PostgreSQL",
        "Redis",
        "Stripe API",
        "AWS ECS",
      ],
      color: "blue",
      links: {github: "#", live: "#"},
    },
    {
      id: "analytics-platform",
      title: "DataPulse",
      tagline: "Real-time analytics at petabyte scale",
      description:
        "Designed and built a real-time analytics pipeline processing 5M events/second with sub-second query response on petabyte-scale data. Replaced $2M/year Snowflake contract.",
      problem:
        "Business intelligence queries on 10TB+ datasets took 30+ minutes, making real-time decisions impossible.",
      solution:
        "Built a streaming pipeline with Apache Flink, ClickHouse for OLAP, and a custom query optimizer that pre-aggregates 95% of common queries.",
      impact: [
        "5M events/second ingestion",
        "< 1s query response on petabyte data",
        "$2M/year saved vs Snowflake",
        "Used by 200+ internal analysts daily",
      ],
      stack: [
        "Python",
        "Apache Flink",
        "ClickHouse",
        "Kafka",
        "Grafana",
        "dbt",
        "Terraform",
      ],
      color: "green",
      links: {github: "#", live: "#"},
    },
  ],

  otherProjects: [
    {
      title: "OpenMCP",
      description:
        "Open-source Model Context Protocol server framework with plugin architecture",
      stack: ["TypeScript", "Node.js", "LLM APIs"],
      stars: "2.1k",
      links: {github: "#"},
    },
    {
      title: "Kache",
      description:
        "Distributed in-memory cache with LRU eviction and consistent hashing",
      stack: ["Go", "gRPC", "etcd"],
      stars: "890",
      links: {github: "#", live: "#"},
    },
    {
      title: "QueryForge",
      description:
        "Visual SQL query builder with AI-powered optimization suggestions",
      stack: ["React", "TypeScript", "AI/ML"],
      stars: "1.4k",
      links: {github: "#", live: "#"},
    },
    {
      title: "LogLens",
      description:
        "Structured logging library with automatic context propagation and sampling",
      stack: ["Go", "OpenTelemetry"],
      stars: "450",
      links: {github: "#"},
    },
    {
      title: "DevFlow",
      description:
        "CLI tool for managing multi-service local development environments",
      stack: ["Rust", "Docker", "CLI"],
      stars: "320",
      links: {github: "#", live: "#"},
    },
    {
      title: "SchemaDiff",
      description:
        "Database schema migration diffing tool with safe rollback detection",
      stack: ["Python", "PostgreSQL", "SQLite"],
      stars: "670",
      links: {github: "#"},
    },
  ],

  products: [
    {
      name: "react-realtime-hooks",
      description:
        "Zero-config hooks for WebSocket, SSE, and long-polling in React. Handles reconnection, message queuing, and state sync automatically.",
      npm: "https://www.npmjs.com/package/react-realtime-hooks",
      github: "#",
      weeklyDownloads: "48,200",
      version: "3.2.1",
      tags: ["React", "WebSockets", "Hooks"],
    },
    {
      name: "ts-event-bus",
      description:
        "Type-safe event bus for TypeScript with automatic payload validation, priority queuing, and dead letter handling.",
      npm: "https://www.npmjs.com/package/ts-event-bus",
      github: "#",
      weeklyDownloads: "22,400",
      version: "1.8.0",
      tags: ["TypeScript", "Events", "Pub/Sub"],
    },
    {
      name: "pg-migrate-cli",
      description:
        "PostgreSQL migration CLI with branching, dry-run, and production-safe rollback built for CI/CD pipelines.",
      npm: "https://www.npmjs.com/package/pg-migrate-cli",
      github: "#",
      weeklyDownloads: "9,800",
      version: "2.1.3",
      tags: ["PostgreSQL", "CLI", "DevOps"],
    },
  ],

  experience: [
    {
      role: "Senior Software Engineer — Platform",
      company: "Vercel",
      period: "2023 — Present",
      description:
        "Leading the Edge Runtime team, building infrastructure that serves 10B+ requests/day across 100+ regions.",
      achievements: [
        "Reduced cold start latency by 40% through V8 isolate pooling",
        "Designed auto-scaling system handling 10x traffic spikes without manual intervention",
        "Led migration of core routing from Node.js to Rust, 3x throughput improvement",
        "Mentored 4 junior engineers, 2 promoted to mid-level",
      ],
      stack: ["Rust", "TypeScript", "V8", "K8s", "Prometheus"],
    },
    {
      role: "Full Stack Engineer",
      company: "Stripe",
      period: "2021 — 2023",
      description:
        "Built developer-facing API infrastructure and internal tooling for the Payments platform team.",
      achievements: [
        "Improved API response time by 68% through query optimization and caching",
        "Shipped idempotency key system preventing $4M in duplicate charges monthly",
        "Authored 12 public API endpoints used by 50K+ developers",
        "Led initiative to migrate 200 internal dashboards to a unified design system",
      ],
      stack: ["Ruby", "Go", "React", "PostgreSQL", "Kafka"],
    },
    {
      role: "Software Engineer",
      company: "Notion",
      period: "2020 — 2021",
      description:
        "Worked on the core editor and collaboration infrastructure during Notion's hypergrowth phase (5M → 30M users).",
      achievements: [
        "Re-architected block rendering engine reducing DOM mutations by 85%",
        "Implemented offline-first sync with conflict resolution for 30M users",
        "Built real-time presence system for collaborative editing",
      ],
      stack: ["React", "TypeScript", "Node.js", "CRDTs", "PostgreSQL"],
    },
    {
      role: "Junior Developer",
      company: "Freelance / Startups",
      period: "2018 — 2020",
      description:
        "Shipped full-stack products for 8 early-stage startups, handling everything from database design to deployment.",
      achievements: [
        "Launched 8 MVPs in 18 months, 3 went on to raise funding",
        "Built e-commerce platform processing $1M+ in first-year sales",
        "First engineering hire at a SaaS startup that grew to $2M ARR",
      ],
      stack: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    },
  ],

  skills: {
    frontend: [
      "React",
      "TypeScript",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "WebSockets",
      "PWA",
      "Web Performance",
    ],
    backend: [
      "Node.js",
      "Go",
      "Rust",
      "Python",
      "gRPC",
      "GraphQL",
      "REST APIs",
      "Microservices",
      "Event Sourcing",
      "CQRS",
    ],
    databases: [
      "PostgreSQL",
      "Redis",
      "ClickHouse",
      "MongoDB",
      "DynamoDB",
      "Elasticsearch",
      "SQLite",
      "Prisma",
    ],
    devops: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "AWS",
      "GCP",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
    ],
    tools: [
      "Git",
      "Linux",
      "Vim",
      "Figma",
      "DataDog",
      "Sentry",
      "Postman",
      "Turborepo",
      "pnpm workspaces",
    ],
  },

  blogPosts: [
    {
      title: "How I Scaled WebSockets to 100K Concurrent Connections",
      date: "Dec 12, 2024",
      readTime: "12 min",
      tags: ["WebSockets", "Scaling", "Architecture"],
      excerpt:
        "A deep dive into the architecture decisions, Redis pub/sub patterns, and load balancing strategies that made it possible.",
      slug: "scaling-websockets-100k",
    },
    {
      title: "CRDTs Explained: Building Conflict-Free Collaborative Apps",
      date: "Nov 28, 2024",
      readTime: "18 min",
      tags: ["CRDTs", "Real-time", "Distributed Systems"],
      excerpt:
        "Everything you need to know about conflict-free replicated data types without the academic jargon.",
      slug: "crdts-explained",
    },
    {
      title: "Why I Rewrote Our Node.js Service in Rust (And What Happened)",
      date: "Oct 15, 2024",
      readTime: "10 min",
      tags: ["Rust", "Performance", "Node.js"],
      excerpt:
        "The real story of a production rewrite: the wins, the surprises, and what I'd do differently.",
      slug: "rust-rewrite-node",
    },
    {
      title: "Database Query Optimization: From 30s to 50ms",
      date: "Sep 3, 2024",
      readTime: "15 min",
      tags: ["PostgreSQL", "Performance", "SQL"],
      excerpt:
        "Step-by-step walkthrough of optimizing a nightmare query using indexes, materialized views, and query planning.",
      slug: "query-optimization",
    },
  ],
};
