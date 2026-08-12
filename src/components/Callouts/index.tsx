import React, {type ReactNode} from 'react';
import styles from './styles.module.css';

type CalloutProps = {
  children: ReactNode;
  title?: string;
};

type CalloutConfig = {
  defaultTitle: string;
  icon: string;
  className: string;
};

const CONFIG: Record<string, CalloutConfig> = {
  important: {defaultTitle: 'Important', icon: '📌', className: styles.important},
  interview: {defaultTitle: 'Interview Insight', icon: '🎯', className: styles.interview},
  warning: {defaultTitle: 'Warning', icon: '⚠️', className: styles.warning},
  tip: {defaultTitle: 'Tip', icon: '💡', className: styles.tip},
  backend: {defaultTitle: 'Backend Relevance', icon: '🖥️', className: styles.backend},
  note: {defaultTitle: 'Note', icon: '📝', className: styles.note},
};

function Callout({
  kind,
  title,
  children,
}: CalloutProps & {kind: keyof typeof CONFIG}): ReactNode {
  const cfg = CONFIG[kind];
  return (
    <div className={`${styles.callout} ${cfg.className}`}>
      <div className={styles.calloutHeader}>
        <span className={styles.calloutIcon} aria-hidden="true">
          {cfg.icon}
        </span>
        <span className={styles.calloutTitle}>{title ?? cfg.defaultTitle}</span>
      </div>
      <div className={styles.calloutBody}>{children}</div>
    </div>
  );
}

export function Important({children, title}: CalloutProps): ReactNode {
  return (
    <Callout kind="important" title={title}>
      {children}
    </Callout>
  );
}

export function Interview({children, title}: CalloutProps): ReactNode {
  return (
    <Callout kind="interview" title={title}>
      {children}
    </Callout>
  );
}

export function Warning({children, title}: CalloutProps): ReactNode {
  return (
    <Callout kind="warning" title={title}>
      {children}
    </Callout>
  );
}

export function Tip({children, title}: CalloutProps): ReactNode {
  return (
    <Callout kind="tip" title={title}>
      {children}
    </Callout>
  );
}

export function Backend({children, title}: CalloutProps): ReactNode {
  return (
    <Callout kind="backend" title={title}>
      {children}
    </Callout>
  );
}

export function Note({children, title}: CalloutProps): ReactNode {
  return (
    <Callout kind="note" title={title}>
      {children}
    </Callout>
  );
}
