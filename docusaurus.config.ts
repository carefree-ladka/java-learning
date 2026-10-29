import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Java Backend Mastery",
  tagline:
    "From Java Fundamentals to Production-Grade Backend Systems — current through JDK 27",
  favicon: "img/java-icon.svg",

  // Modern web fonts: Inter for UI/text, JetBrains Mono for code.
  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,400..700;1,400..700&display=swap",
      rel: "stylesheet",
    },
  ],
  headTags: [
    {
      tagName: "link",
      attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
  ],

  future: {
    v4: true,
  },

  // GitHub Pages project site: https://carefree-ladka.github.io/java-learning/
  url: "https://carefree-ladka.github.io",
  baseUrl: "/java-learning/",

  organizationName: "carefree-ladka",
  projectName: "java-learning",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  themes: [
    "@docusaurus/theme-mermaid",
    [
      // Local, offline full-text search across all MDX docs.
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: "/docs",
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "docs",
          editUrl: undefined,
          showLastUpdateTime: false,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/social-card.jpg",
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    mermaid: {
      theme: { light: "neutral", dark: "dark" },
    },
    navbar: {
      title: "Java Backend Mastery",
      logo: {
        alt: "Java Backend Mastery",
        src: "img/java-icon.svg",
      },
      hideOnScroll: true,
      items: [
        { to: "/docs/roadmap", label: "Roadmap", position: "left" },
        {
          type: "dropdown",
          label: "Java",
          position: "left",
          items: [
            { label: "Java Fundamentals", to: "/docs/java-fundamentals/" },
            { label: "OOP", to: "/docs/oop/" },
            { label: "Collections", to: "/docs/collections/" },
            { label: "Generics", to: "/docs/generics/" },
            { label: "Exceptions", to: "/docs/exceptions/" },
            { label: "Modern Java (8+)", to: "/docs/java-8-plus/" },
            { label: "Concurrency", to: "/docs/concurrency/" },
            { label: "JVM Internals", to: "/docs/jvm/" },
          ],
        },
        {
          type: "dropdown",
          label: "Spring",
          position: "left",
          items: [
            { label: "Spring Core", to: "/docs/spring-core/" },
            { label: "Spring Boot", to: "/docs/spring-boot/" },
            { label: "REST APIs", to: "/docs/rest-api/" },
            { label: "Spring Data JPA", to: "/docs/spring-data-jpa/" },
            { label: "Spring Security", to: "/docs/security/" },
            { label: "Testing", to: "/docs/testing/" },
          ],
        },
        {
          type: "dropdown",
          label: "Databases",
          position: "left",
          items: [
            { label: "SQL & Databases", to: "/docs/database/" },
            { label: "JDBC", to: "/docs/jdbc/" },
            { label: "Spring Data JPA", to: "/docs/spring-data-jpa/" },
          ],
        },
        {
          type: "dropdown",
          label: "Backend",
          position: "left",
          items: [
            { label: "Redis & Caching", to: "/docs/redis-caching/" },
            { label: "Kafka & Messaging", to: "/docs/kafka-messaging/" },
            { label: "Docker & Deployment", to: "/docs/docker/" },
            { label: "Production Concepts", to: "/docs/production/" },
            { label: "Backend Patterns", to: "/docs/patterns/" },
          ],
        },
        { to: "/docs/dsa/", label: "DSA", position: "left" },
        {
          to: "/docs/system-design/",
          label: "System Design",
          position: "left",
        },
        { to: "/docs/projects/", label: "Projects", position: "left" },
        {
          to: "/docs/interview-preparation/",
          label: "Interview",
          position: "left",
        },
        { to: "/docs/cheat-sheets/", label: "Cheat Sheets", position: "left" },
        {
          type: "html",
          position: "right",
          value:
            '<span class="jbm-version-badge" title="Content current through JDK 27">JDK 27</span>',
        },
        {
          href: "https://github.com/java-learning/java-learning",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Learn",
          items: [
            { label: "Roadmap", to: "/docs/roadmap" },
            { label: "Java Fundamentals", to: "/docs/java-fundamentals/" },
            { label: "Spring Boot", to: "/docs/spring-boot/" },
            { label: "System Design", to: "/docs/system-design/" },
          ],
        },
        {
          title: "Practice",
          items: [
            { label: "Projects", to: "/docs/projects/" },
            { label: "Interview Prep", to: "/docs/interview-preparation/" },
            { label: "Cheat Sheets", to: "/docs/cheat-sheets/" },
          ],
        },
        {
          title: "Backend",
          items: [
            { label: "REST APIs", to: "/docs/rest-api/" },
            { label: "Spring Security", to: "/docs/security/" },
            { label: "Kafka", to: "/docs/kafka-messaging/" },
            { label: "Docker", to: "/docs/docker/" },
          ],
        },
      ],
      copyright: `Java Backend Mastery — Built with Docusaurus. Learn. Build. Ship. © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: [
        "java",
        "sql",
        "json",
        "bash",
        "yaml",
        "docker",
        "properties",
        "http",
        "groovy",
        "git",
      ],
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
