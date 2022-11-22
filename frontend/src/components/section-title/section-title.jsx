// import globalStyles from './App.module.css';
import styles from './section-title.module.css';

function SectionTitle(props) {
  return (
    <div class={styles.sectionTitleWrapper}>
        <div class={styles.sectionTitle}>
            <p class="h1">{props.title}</p>
        </div>
        <div class={styles.sectionLabel}>
            <div class={styles.tickerTextWrapper}>
                <p class="h3">{props.label}</p>
                <p class="h3">{props.label}</p>
                <p class="h3">{props.label}</p>
                <p class="h3">{props.label}</p>
                <p class="h3">{props.label}</p>
            </div>
        </div>
    </div>
  );
}

export default SectionTitle;


