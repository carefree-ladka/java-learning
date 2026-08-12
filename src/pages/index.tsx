import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

import styles from './index.module.css';

const TRACKS = [
  {
    icon: '☕',
    title: 'Core Java',
    desc: 'Fundamentals, OOP, Collections, Generics, Exceptions, Modern Java, Concurrency, JVM internals.',
    to: '/docs/java-fundamentals/',
  },
  {
    icon: '🌱',
    title: 'Spring & Spring Boot',
    desc: 'IoC, DI, auto-configuration, REST APIs, layered architecture, DTOs, validation.',
    to: '/docs/spring-core/',
  },
  {
    icon: '🗄️',
    title: 'Databases & JPA',
    desc: 'SQL, indexes, transactions, JDBC, Hibernate, entity relationships, the N+1 problem.',
    to: '/docs/database/',
  },
  {
    icon: '🔐',
    title: 'Security & Testing',
    desc: 'JWT auth, Spring Security, BCrypt, JUnit 5, Mockito, MockMvc, Testcontainers.',
    to: '/docs/security/',
  },
  {
    icon: '⚡',
    title: 'Caching & Messaging',
    desc: 'Redis caching patterns, cache invalidation, Kafka producers/consumers, delivery semantics.',
    to: '/docs/redis-caching/',
  },
  {
    icon: '🐳',
    title: 'Docker & Production',
    desc: 'Containerize Spring Boot, Compose, observability, resilience, rate limiting, migrations.',
    to: '/docs/docker/',
  },
  {
    icon: '🏗️',
    title: 'System Design',
    desc: '10 full designs: URL shortener, e-commerce, payments, feeds, rate limiter, and more.',
    to: '/docs/system-design/',
  },
  {
    icon: '🎯',
    title: 'Interview Prep',
    desc: 'Categorized questions with answers, follow-ups, and common mistakes for every topic.',
    to: '/docs/interview-preparation/',
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <img
          src={`${siteConfig.baseUrl}img/java-icon.svg`}
          alt="Java"
          className={styles.heroIcon}
          width={96}
          height={96}
        />
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <p className={styles.heroPitch}>
          A complete, opinionated backend engineering curriculum. Learn the
          language, understand the internals, write real code, build production
          APIs, design scalable systems, and walk into interviews ready.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/roadmap">
            Start the Roadmap →
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/java-fundamentals/">
            Jump into Java
          </Link>
        </div>
      </div>
    </header>
  );
}

function OutcomeBanner() {
  return (
    <section className={styles.outcome}>
      <div className="container">
        <blockquote className={styles.outcomeQuote}>
          “I can independently design, build, test, deploy, debug, and explain a
          production-grade Java backend.”
        </blockquote>
      </div>
    </section>
  );
}

function Tracks() {
  return (
    <section className={styles.tracks}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Learning Tracks
        </Heading>
        <div className="jbm-card-grid">
          {TRACKS.map((t) => (
            <Link key={t.title} className="jbm-card" to={t.to}>
              <div className="jbm-card__icon">{t.icon}</div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </Link>
          ))}
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
      description="A production-focused Java backend engineering curriculum: Java, Spring Boot, databases, REST, security, caching, messaging, Docker, and system design.">
      <HomepageHeader />
      <main>
        <OutcomeBanner />
        <Tracks />
      </main>
    </Layout>
  );
}
