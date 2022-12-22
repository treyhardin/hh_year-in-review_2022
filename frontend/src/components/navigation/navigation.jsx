import styles from './navigation.module.css';
// import { isPageEnd } from '../contact/contact'
import { isPageEnd } from '../../App'
import gsap, { Power4 } from 'gsap';
import { onMount } from 'solid-js';
import { smoother } from '../../App'
import scroll from './../../helpers/scroll';

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

        let documentHeight = document.documentElement;
        let bodyHeight = document.body;
        let isPageEndFlag = false

        scroll((y) => {
            scrollProgress.style.setProperty('--scroll', (
                Math.floor((documentHeight['scrollTop']||bodyHeight['scrollTop']) / ((documentHeight['scrollHeight']||bodyHeight['scrollHeight']) - documentHeight.clientHeight) * 100)
            ))

            if (isPageEnd() && !isPageEndFlag) {
                navigation.classList.add(styles.pageEnd)
                gsap.to(navigation, {
                    width: '100%',
                    ease: Power4.easeOut,
                    duration: 0.8,
                })
                isPageEndFlag = true
            } else if (!isPageEnd() && isPageEndFlag) {
                navigation.classList.remove(styles.pageEnd)
                gsap.to(navigation, {
                    width: 'auto',
                    ease: Power4.easeOut,
                    duration: 0.8,
                })
                isPageEndFlag = false
            }
        })
    })

    const addClickListener = (element, target) => {
        element.addEventListener("click", () => {
            smoother().scrollTo(target, true, 'top top-=10')
        })
    }


    return (
        <nav class={styles.navigation} ref={navigation}>
            <div class={styles.navigationInner}>
                {isPageEnd() ? 
                <>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                    <a class={`${styles.navLink} utility`} href="https://www.halfhelix.com/contact" target="_blank">Get in Touch &#183;</a>
                </> : 
                <>
                    <button class={`${styles.navLink} utility`} ref={button => addClickListener(button, '#work')}>Work</button>
                    <button class={`${styles.navLink} utility`} ref={button => addClickListener(button, '#team')}>Team</button>
                    <button class={`${styles.navLink} utility`} ref={button => addClickListener(button, '#events')}>Events</button>
                    <button class={`${styles.navLink} utility`} ref={button => addClickListener(button, '#recognition')}>Recognition</button>
                </>
                }
                
                <div class={styles.scrollProgress} ref={scrollProgress}></div>
            </div>
        </nav>
    );
}

export default Navigation;
