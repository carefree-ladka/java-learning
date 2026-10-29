import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import type { ReactNode } from "react";

import styles from "./index.module.css";

const STATS = [
  { value: "18+", label: "Topic tracks" },
  { value: "10", label: "System designs" },
  { value: "100s", label: "Code examples" },
  { value: "∞", label: "Interview answers" },
];

const TRACKS = [
  {
    icon: "☕",
    title: "Core Java",
    desc: "Fundamentals, OOP, Collections, Generics, Exceptions, Modern Java, Concurrency, and JVM internals.",
    to: "/docs/java-fundamentals/",
    accent: "linear-gradient(135deg, #f97316, #ef4444)",
  },
  {
    icon: "🌱",
    title: "Spring & Spring Boot",
    desc: "IoC, DI, auto-configuration, REST APIs, layered architecture, DTOs, and validation.",
    to: "/docs/spring-core/",
    accent: "linear-gradient(135deg, #22c55e, #16a34a)",
  },
  {
    icon: "🗄️",
    title: "Databases & JPA",
    desc: "SQL, indexes, transactions, JDBC, Hibernate, entity relationships, and the N+1 problem.",
    to: "/docs/database/",
    accent: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
  },
  {
    icon: "🔐",
    title: "Security & Testing",
    desc: "JWT auth, Spring Security, BCrypt, JUnit 5, Mockito, MockMvc, and Testcontainers.",
    to: "/docs/security/",
    accent: "linear-gradient(135deg, #a78bfa, #7c3aed)",
  },
  {
    icon: "⚡",
    title: "Caching & Messaging",
    desc: "Redis caching patterns, cache invalidation, Kafka producers/consumers, delivery semantics.",
    to: "/docs/redis-caching/",
    accent: "linear-gradient(135deg, #facc15, #f59e0b)",
  },
  {
    icon: "🐳",
    title: "Docker & Production",
    desc: "Containerize Spring Boot, Compose, observability, resilience, rate limiting, and migrations.",
    to: "/docs/docker/",
    accent: "linear-gradient(135deg, #2dd4bf, #0d9488)",
  },
  {
    icon: "🏗️",
    title: "System Design",
    desc: "10 full designs: URL shortener, e-commerce, payments, feeds, rate limiter, and more.",
    to: "/docs/system-design/",
    accent: "linear-gradient(135deg, #f472b6, #db2777)",
  },
  {
    icon: "🎯",
    title: "Interview Prep",
    desc: "Categorized questions with answers, follow-ups, and common mistakes for every topic.",
    to: "/docs/interview-preparation/",
    accent: "linear-gradient(135deg, #818cf8, #4f46e5)",
  },
];

const TIMELINE = [
  { version: "8", year: "2014", note: "Lambdas & Streams" },
  { version: "11", year: "2018", note: "HttpClient", lts: true },
  { version: "17", year: "2021", note: "Sealed classes", lts: true },
  { version: "21", year: "2023", note: "Virtual threads", lts: true },
  { version: "25", year: "2025", note: "Scoped values", lts: true },
  { version: "27", year: "2026", note: "Post-quantum TLS", current: true },
];

const OUTCOMES = [
  {
    icon: "🧠",
    title: "Understand the internals",
    desc: "Not just how to use a tool, but why it works — the JVM, Hibernate, Spring proxies, and TCP under your APIs.",
  },
  {
    icon: "⌨️",
    title: "Write production code",
    desc: "Build real, layered Spring Boot services with validation, security, caching, and tests that actually run.",
  },
  {
    icon: "📐",
    title: "Design at scale",
    desc: "Reason about trade-offs, bottlenecks, and reliability the way senior engineers do in design reviews.",
  },
  {
    icon: "🚀",
    title: "Ship with confidence",
    desc: "Containerize, deploy, observe, and debug backends in production — then explain every decision.",
  },
];

function HeroCodeCard() {
  return (
    <div className={styles.codeCard} aria-hidden="true">
      <div className={styles.codeCardBar}>
        <span className={styles.dot} data-color="red" />
        <span className={styles.dot} data-color="yellow" />
        <span className={styles.dot} data-color="green" />
        <span className={styles.codeCardFile}>BackendMastery.java</span>
      </div>
      <pre className={styles.codeCardBody}>
        <code>
          <span className={styles.cKeyword}>@RestController</span>
          {"\n"}
          <span className={styles.cKeyword}>public class</span>{" "}
          <span className={styles.cType}>CareerController</span> {"{"}
          {"\n\n"}
          {"  "}
          <span className={styles.cAnno}>@GetMapping</span>(
          <span className={styles.cStr}>"/offer"</span>){"\n"}
          {"  "}
          <span className={styles.cKeyword}>public</span>{" "}
          <span className={styles.cType}>Offer</span> land() {"{"}
          {"\n"}
          {"    "}
          <span className={styles.cKeyword}>return</span> Offer.builder(){"\n"}
          {"        "}.skills(<span className={styles.cType}>Java</span>,{" "}
          <span className={styles.cType}>Spring</span>){"\n"}
          {"        "}.systemDesign(<span className={styles.cNum}>true</span>)
          {"\n"}
          {"        "}.confidence(<span className={styles.cNum}>100</span>)
          {"\n"}
          {"        "}.build();{"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"}"}
        </code>
      </pre>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true">
        <span className={styles.orb} data-orb="1" />
        <span className={styles.orb} data-orb="2" />
        <span className={styles.orb} data-orb="3" />
      </div>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} /> Backend engineering, end to
            end
          </span>
          <Heading as="h1" className={styles.heroTitle}>
            From <span className={styles.heroGradient}>first line of Java</span>{" "}
            to production-grade systems.
          </Heading>
          <p className={styles.heroPitch}>
            A complete, opinionated curriculum. Learn the language, understand
            the internals, write real code, build production APIs, design
            scalable systems, and walk into interviews ready.
          </p>
          <div className={styles.buttons}>
            <Link
              className={`button button--lg ${styles.ctaPrimary}`}
              to="/docs/roadmap"
            >
              Start the Roadmap →
            </Link>
            <Link
              className={`button button--lg ${styles.ctaGhost}`}
              to="/docs/java-fundamentals/"
            >
              Jump into Java
            </Link>
          </div>
          <div className={styles.statRow}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statChip}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.heroArt}>
          <HeroCodeCard />
        </div>
      </div>
    </header>
  );
}

function Tracks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>Learning tracks</span>
          <Heading as="h2" className={styles.sectionTitle}>
            Everything a backend engineer needs
          </Heading>
          <p className={styles.sectionLede}>
            Eighteen focused tracks, ordered so each one builds on the last.
            Start anywhere — or follow the roadmap top to bottom.
          </p>
        </div>
        <div className={styles.trackGrid}>
          {TRACKS.map((t) => (
            <Link key={t.title} className={styles.trackCard} to={t.to}>
              <span
                className={styles.trackAccent}
                style={{ background: t.accent }}
              />
              <span
                className={styles.trackIcon}
                style={{ background: t.accent }}
              >
                {t.icon}
              </span>
              <h3 className={styles.trackTitle}>{t.title}</h3>
              <p className={styles.trackDesc}>{t.desc}</p>
              <span className={styles.trackArrow}>Explore →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function VersionTimeline() {
  return (
    <section className={styles.timelineSection}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>Always current</span>
          <Heading as="h2" className={styles.sectionTitle}>
            Up to date through JDK 27
          </Heading>
          <p className={styles.sectionLede}>
            Java ships every six months. This curriculum tracks the language —
            from Java 8 to the latest release.
          </p>
        </div>
        <ol className={styles.timeline}>
          {TIMELINE.map((t) => (
            <li
              key={t.version}
              className={styles.timelineItem}
              data-current={t.current ? "true" : undefined}
            >
              <span className={styles.timelineNode} />
              <span className={styles.timelineVersion}>
                Java {t.version}
                {t.lts && <span className={styles.ltsTag}>LTS</span>}
                {t.current && <span className={styles.nowTag}>Latest</span>}
              </span>
              <span className={styles.timelineYear}>{t.year}</span>
              <span className={styles.timelineNote}>{t.note}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>The outcome</span>
          <Heading as="h2" className={styles.sectionTitle}>
            What you&apos;ll be able to do
          </Heading>
        </div>
        <div className={styles.outcomeGrid}>
          {OUTCOMES.map((o) => (
            <div key={o.title} className={styles.outcomeCard}>
              <span className={styles.outcomeIcon}>{o.icon}</span>
              <h3 className={styles.outcomeTitle}>{o.title}</h3>
              <p className={styles.outcomeDesc}>{o.desc}</p>
            </div>
          ))}
        </div>
        <blockquote className={styles.outcomeQuote}>
          “I can independently design, build, test, deploy, debug, and explain a
          production-grade Java backend.”
        </blockquote>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className={styles.ctaBand}>
      <div className={`container ${styles.ctaBandInner}`}>
        <Heading as="h2" className={styles.ctaTitle}>
          Ready to build backends that ship?
        </Heading>
        <p className={styles.ctaSub}>
          Free, open, and always up to date. No sign-up required.
        </p>
        <div className={styles.buttons}>
          <Link
            className={`button button--lg ${styles.ctaPrimary}`}
            to="/docs/roadmap"
          >
            Start learning now →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A production-focused Java backend engineering curriculum: Java, Spring Boot, databases, REST, security, caching, messaging, Docker, and system design."
    >
      <HomepageHeader />
      <main>
        <Tracks />
        <VersionTimeline />
        <Outcomes />
        <FinalCta />
      </main>
    </Layout>
  );
}
