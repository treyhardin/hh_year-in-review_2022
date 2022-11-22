import styles from './navigation.module.css';

function Navigation() {

    let navBar


    const addScrollListener = (element) => {

        window.addEventListener('scroll', () => {
    
            let documentHeight = document.documentElement;
            let bodyHeight = document.body;
            
            let scrollPercent = Math.floor((documentHeight['scrollTop']||bodyHeight['scrollTop']) / ((documentHeight['scrollHeight']||bodyHeight['scrollHeight']) - documentHeight.clientHeight) * 100);
            element.style.setProperty('--scroll', scrollPercent)
        })  
    }


    return (
        <nav class={styles.navigation} ref={navBar => addScrollListener(navBar)}>
            <a class={`${styles.navLink} utility`} href="">Work</a>
            <a class={`${styles.navLink} utility`} href="">Team</a>
            <a class={`${styles.navLink} utility`} href="">Events</a>
            <a class={`${styles.navLink} utility`} href="">Recognition</a>
            <div class={styles.scrollProgress}></div>
        </nav>
    );
}

export default Navigation;
