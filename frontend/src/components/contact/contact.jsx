import changePageColor from '../../helpers/change-page-color';
import styles from './contact.module.css';

function Contact() {
  return (
    <section class={styles.contact} ref={section => changePageColor(section, 'var(--page-color-default')}>
      <p class={`${styles.contactText} h3`}>Wishing a happy new year to you and yours.</p>
      <p class={`${styles.contactLabel} utility`}>Half Helix</p>
    </section>
  );
}

export default Contact;
