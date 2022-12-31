import styles from './brand.module.css';
// import { isPageEnd } from '../contact/contact';
import { isPageEnd } from '../../App';
import gsap, {Power4} from 'gsap';
import { onMount } from 'solid-js'
import scroll from './../../helpers/scroll';

function Brand() {
  let brand

  onMount(() => {
    let isPageEndFlag = false

    window.addEventListener('load', () => {
      gsap.from(brand, {
        y: '100%',
        duration: 0.8,
        ease: Power4.easeOut
      })
    })
    
    scroll(() => {
      if (isPageEnd() && !isPageEndFlag) {
        gsap.to(brand, {
          y: '100%',
          opacity: 0,
        })
        isPageEndFlag = true
      } else if (!isPageEnd() && isPageEndFlag) {
        gsap.to(brand, {
          y: '0%',
          opacity: 1,
        })
        isPageEndFlag = false
      }
    })
  })

  return (
    <div class={styles.brandWrapper} ref={brand}>
        <a href="https://www.halfhelix.com/" class={`${styles.logo} h3`} target="_blank">Half Helix</a>
        <a href="https://www.halfhelix.com/contact" class={`${styles.contact}`} target="_blank">Get in Touch</a>
    </div>
  );
}

export default Brand;
