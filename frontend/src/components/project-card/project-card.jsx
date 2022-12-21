import styles from './project-card.module.css';
import { setActiveProject } from '../launches/launches'
import gsap, { Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { createEffect, onMount } from 'solid-js'

// import { smoother } from '../../App'

function ProjectCard(props) {

    gsap.registerPlugin(ScrollTrigger)

    let projectCard
    let projectCardInner

    onMount(() => {

        // smoother().effects(projectCard, {lag: 0.3});

        const maxAngle = 6
        const rotationMultiplier = 2

        const targetRotation = (Math.random() * 2 - 1) * maxAngle;
        const initialRotation = targetRotation * -1 * rotationMultiplier


        const maxOffset = 100

        const offsetX = ((window.innerWidth - maxOffset * 2) / props.totalProjects) * props.currentIndex - maxOffset
        const offsetY = ((window.innerHeight - maxOffset * 2) / props.totalProjects) * props.currentIndex - maxOffset


        gsap.fromTo(projectCard, {
            rotate: targetRotation,
            x: offsetX + 100,
        }, {
            x: offsetX,
            scrollTrigger: {
                trigger: projectCard,
                start: `top top+=${offsetY}`,
                end: 'bottom bottom',
                endTrigger: props.container,
                pin: projectCard,
                pinSpacer: true,
                scrub: true,
            }
        })

        ScrollTrigger.create({
            trigger: projectCard,
            start: `top center`,
            end: 'top top',
            endTrigger: props.container,
            onEnter: () => {
                // gsap.to(projectCard, {opacity: 0})
                setActiveProject(props.name)
            },
            onEnterBack: () => {
                // gsap.to(projectCard, {opacity: 0})
                setActiveProject(props.name)
            },
        })
    })


    return (
        <div class={styles.projectCard} ref={projectCard} >
            <div class={styles.projectCardInner} ref={projectCardInner}>
                <img class={styles.projectImage} src={props.imageUrl} />
                <div class={styles.projectTitle}><p class="utility">{props.name}</p></div>
            </div>
        </div>
    );
}

export default ProjectCard;
