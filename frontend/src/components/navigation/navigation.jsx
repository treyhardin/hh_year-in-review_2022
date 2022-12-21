import styles from './navigation.module.css';
import { isPageEnd } from '../contact/contact'
import gsap, { Power4 } from 'gsap';
import { onMount } from 'solid-js';

function Navigation() {

    let navigation
    let scrollProgress

    onMount(() => {

        window.addEventListener('load', () => {
            gsap.from(navigation, {
                y: '100%',
                duration: 0.8,
                delay: 0.2,
                ease: Power4.easeOut
            })
          })

        window.addEventListener('scroll', () => {

            let documentHeight = document.documentElement;
            let bodyHeight = document.body;
            
            let scrollPercent = Math.floor((documentHeight['scrollTop']||bodyHeight['scrollTop']) / ((documentHeight['scrollHeight']||bodyHeight['scrollHeight']) - documentHeight.clientHeight) * 100);
            scrollProgress.style.setProperty('--scroll', scrollPercent)

            if (isPageEnd()) {
                navigation.classList.add(styles.pageEnd)
                // navigation.classList.add('pageEnd')

            } else {
                navigation.classList.remove(styles.pageEnd)
            }
        }) 
    })


    return (
        <nav class={styles.navigation} ref={navigation}>
            <div class={styles.navigationInner}>
                {isPageEnd() ? 
                <>
                    <a class={`${styles.navLink} utility`} href="">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="">Get in Touch &#183;</a>
                </> : 
                <>
                    <a class={`${styles.navLink} utility`} href="">Work</a>
                    <a class={`${styles.navLink} utility`} href="">Team</a>
                    <a class={`${styles.navLink} utility`} href="">Events</a>
                    <a class={`${styles.navLink} utility`} href="">Recognition</a>
                </>
                }
                
                <div class={styles.scrollProgress} ref={scrollProgress}></div>
            </div>
        </nav>
    );
}

export default Navigation;
