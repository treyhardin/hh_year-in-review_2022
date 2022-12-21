import styles from './brand.module.css';
import { isPageEnd } from '../contact/contact';
import gsap, {Power4} from 'gsap';
import { onMount } from 'solid-js'

function Brand() {

  let brand

  onMount(() => {

    window.addEventListener('load', () => {
      gsap.from(brand, {
        y: '100%',
        duration: 0.8,
        ease: Power4.easeOut
      })
    })

    window.addEventListener('scroll', () => {

        if (isPageEnd()) {
            // element.classList.add(styles.pageEnd)
            gsap.to(brand, {
              y: '100%',
              opacity: 0,
            })
        } else {
          gsap.to(brand, {
            y: '0%',
            opacity: 1,
          })
        }
    }) 

  })

  return (
    <div class={styles.brandWrapper} ref={brand}>
        <a href="#" class={`${styles.logo} h3`} target="_blank">Half Helix</a>
        <a href="#" class={`${styles.contact}`} target="_blank">Get in Touch</a>
    </div>
  );
}

export default Brand;
