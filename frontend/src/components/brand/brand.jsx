import styles from './brand.module.css';

function Brand() {
  return (
    <div class={styles.brandWrapper}>
        <a href="#" class={`${styles.logo} h3`} target="_blank">Half Helix</a>
        <a href="#" class={`${styles.contact}`} target="_blank">Get in Touch</a>
    </div>
  );
}

export default Brand;
