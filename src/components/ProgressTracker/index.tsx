import React, {useEffect, useState, type ReactNode} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

const STAGES = [
  {key: 'read', label: 'Read', icon: '📖'},
  {key: 'understand', label: 'Understand', icon: '🧠'},
  {key: 'implement', label: 'Implement', icon: '⌨️'},
  {key: 'practice', label: 'Practice', icon: '🔁'},
  {key: 'interview', label: 'Interview Ready', icon: '🎯'},
] as const;

type StageKey = (typeof STAGES)[number]['key'];
type State = Record<StageKey, boolean>;

const STORAGE_PREFIX = 'jbm-progress:';

function emptyState(): State {
  return STAGES.reduce((acc, s) => {
    acc[s.key] = false;
    return acc;
  }, {} as State);
}

function Tracker({id}: {id: string}): ReactNode {
  const storageKey = `${STORAGE_PREFIX}${id}`;
  const [state, setState] = useState<State>(emptyState);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        setState({...emptyState(), ...JSON.parse(raw)});
      }
    } catch {
      /* ignore corrupt storage */
    }
    setLoaded(true);
  }, [storageKey]);

  const toggle = (key: StageKey) => {
    setState((prev) => {
      const next = {...prev, [key]: !prev[key]};
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        /* storage full or blocked */
      }
      return next;
    });
  };

  const completed = STAGES.filter((s) => state[s.key]).length;
  const pct = Math.round((completed / STAGES.length) * 100);

  return (
    <div className={styles.tracker} data-loaded={loaded}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>📊 Your progress on this topic</span>
        <span className={styles.headerPct}>{pct}%</span>
      </div>
      <div className={styles.bar}>
        <div className={styles.barFill} style={{width: `${pct}%`}} />
      </div>
      <div className={styles.stages}>
        {STAGES.map((s) => (
          <button
            key={s.key}
            type="button"
            className={`${styles.stage} ${state[s.key] ? styles.stageOn : ''}`}
            onClick={() => toggle(s.key)}
            aria-pressed={state[s.key]}
          >
            <span className={styles.stageBox} aria-hidden="true">
              {state[s.key] ? '☑' : '☐'}
            </span>
            <span className={styles.stageIcon} aria-hidden="true">
              {s.icon}
            </span>
            <span className={styles.stageLabel}>{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * ProgressTracker renders a 5-stage learning checklist persisted to
 * localStorage, keyed by the required `id` prop (use a unique slug per page).
 */
export default function ProgressTracker({id}: {id: string}): ReactNode {
  return (
    <BrowserOnly fallback={<div className={styles.tracker} />}>
      {() => <Tracker id={id} />}
    </BrowserOnly>
  );
}
