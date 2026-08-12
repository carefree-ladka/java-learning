import Link from '@docusaurus/Link';
import {
  Backend,
  Important,
  Interview,
  Note,
  Tip,
  Warning,
} from '@site/src/components/Callouts';
import ProgressTracker from '@site/src/components/ProgressTracker';
import MDXComponents from '@theme-original/MDXComponents';

// Register custom components globally so every MDX page can use them
// without an explicit import statement. Link is Docusaurus' baseUrl-aware
// anchor, so internal links work correctly under a subpath (GitHub Pages).
export default {
  ...MDXComponents,
  Link,
  Important,
  Interview,
  Warning,
  Tip,
  Backend,
  Note,
  ProgressTracker,
};
