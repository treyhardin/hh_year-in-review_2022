// import globalStyles from './App.module.css';
import styles from './section-title.module.css';

function SectionTitle(props) {
    
  return (
    <div class={props.textTitle ? `${styles.sectionTitleWrapper} ${styles.sectionTitleWrapperText} ${styles[props.alignment]}` :  `${styles.sectionTitleWrapper} ${styles[props.alignment]}`}>
        <div class={styles.sectionTitle}>
            <p class={props.textTitle ? `h2` :  `h1`}>{props.title}</p>
        </div>
        <div class={styles.sectionLabel}>
            <div class={styles.tickerTextWrapper}>
                <p class={props.textTitle ? `utility` :  `h3`}>{props.label}</p>
                <p class={props.textTitle ? `utility` :  `h3`}>{props.label}</p>
                <p class={props.textTitle ? `utility` :  `h3`}>{props.label}</p>
                <p class={props.textTitle ? `utility` :  `h3`}>{props.label}</p>
                <p class={props.textTitle ? `utility` :  `h3`}>{props.label}</p>
            </div>
        </div>
    </div>
  );
}

export default SectionTitle;


