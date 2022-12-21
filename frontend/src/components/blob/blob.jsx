import styles from './blob.module.css';
import gsap, {Power4} from 'gsap';

function Blob() {

    const animateBlob = (element) => {

    }

  return (
    <div class={styles.blob} ref={element => animateBlob(element)}>
        <div class={styles.blobInner}>
            <div class={`${styles.blobArea} ${styles.blobElement1}`}></div>
            <div class={`${styles.blobArea} ${styles.blobElement2}`}></div>
            <div class={`${styles.blobArea} ${styles.blobElement3}`}></div>
        </div>
    </div>
  );
}

export default Blob;
