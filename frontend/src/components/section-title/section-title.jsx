import styles from './section-title.module.css';
import gsap, { Power4 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createEffect, createSignal, onMount } from 'solid-js';

gsap.registerPlugin(ScrollTrigger)
function SectionTitle(props) {

  let sectionTitle


  onMount(() => {
    
    switch (props.alignment) {
      case 'right':
        gsap.fromTo(sectionTitle, {
          // opacity: 0.2,
          x: '100%',
        }, {
          x: '0%',
          scrollTrigger: {
            trigger: props.container,
            start: 'top top',
            end: 'bottom bottom',
            pin: sectionTitle,
          }
        })
        break
      case 'left':
          gsap.fromTo(sectionTitle, {
            // opacity: 0.2,
            x: '-100%',
          }, {
            x: '0%',
            scrollTrigger: {
              trigger: props.container,
              start: 'top top',
              end: 'bottom bottom',
              pin: sectionTitle,
            }
          })
          break
        case 'center':
            gsap.fromTo(sectionTitle, {
              // opacity: 0,
              // x: '-100%',
              // y: '100%',
            }, {
              // y: '-50%',
              // y: window.offsetHeight / 2,
              // x: '0%',
              // opacity: 1,
              scrollTrigger: {
                trigger: props.container,
                start: 'top center',
                end: 'bottom bottom',
                pin: sectionTitle,
                // markers: true,
              }
            })
            break
    }

      

  })


    
  return (
    <div class={props.textTitle ? `${styles.sectionTitleWrapper} ${styles.sectionTitleWrapperText} ${styles[props.alignment]}` :  `${styles.sectionTitleWrapper} ${styles[props.alignment]}`} ref={sectionTitle}>
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


