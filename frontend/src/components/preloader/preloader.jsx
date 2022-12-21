import gsap from 'gsap';
import styles from './preloader.module.css';

function Preloader() {

    let preloader

    let body = document.documentElement
    // body.style.opacity = 0;

    window.addEventListener('load', () => {
        if (preloader) {
            preloader.classList.add(styles.loaded)
        }
    })

    // gsap.from(preloader, {
    //     y: -100
    // })


    return (
        <div class={styles.preloader} ref={preloader}>
            <svg class={styles.icon} viewBox="0 0 132 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.71 67.0352C25.9421 67.0352 1 75.8881 1 86.8142C1 97.7402 25.9421 106.599 56.71 106.599M56.71 93.4072C25.9421 93.4072 1 84.5543 1 73.6282C1 62.7022 25.9421 53.8492 56.71 53.8492M56.71 53.8492C25.9421 53.8492 1 44.9963 1 34.0702C1 23.1442 25.9421 14.2852 56.71 14.2852C97.7379 14.2852 131 26.0972 131 40.6632C131 55.2293 97.7379 67.0412 56.71 67.0412C25.9421 67.0412 1 58.1823 1 47.2562C1 36.3302 25.9421 27.4772 56.71 27.4772C97.7379 27.4772 131 39.2831 131 53.8492C131 68.4153 97.7379 80.2272 56.71 80.2272C25.9421 80.2272 1 71.3683 1 60.4482C1 49.5282 25.9421 40.6632 56.71 40.6632C97.7379 40.6632 131 52.4752 131 67.0412C131 81.6073 97.7379 93.4132 56.71 93.4132M56.71 53.8492C97.7379 53.8492 131 42.0433 131 27.4772C131 12.9112 97.7379 1.09921 56.71 1.09921" stroke="currentColor" stroke-miterlimit="10"/>
            </svg>
        </div>
    );
}

export default Preloader;
