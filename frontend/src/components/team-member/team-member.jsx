import styles from './team-member.module.css'
// import { smoother } from '../../App'
import { onMount } from 'solid-js'
import gsap, {Power4} from 'gsap'

        
function TeamMember(props) {

    let teamMemberCard
    let teamMemberName
    let teamMemberTitle
    

    onMount(() => {

        // smoother().effects(teamMemberCard, {lag: 0.1});

        let offsetStrength = 50

        gsap.from(teamMemberCard, {
            // y: 20,
            x: `${(Math.random() - 0.5) * 2 * offsetStrength}%`,
            y: `${(Math.random() - 0.5) * 2 * offsetStrength}%`,
            opacity: 0,
            ease: Power4.easeOut,
            duration: 1,
            scrollTrigger: {
                trigger: teamMemberCard,
                start: 'top bottom-=100',
                end: 'bottom center',
                scrub: true,
            }
        })

    })
    

    return (
        <div class={styles.teamMemberCard} ref={teamMemberCard}>

            <img class={styles.teamMemberImage} src={props.imageUrl} />

            <p class={`${styles.teamMemberName} h3`}>{props.name}</p>
            <p class={`${styles.teamMemberTitle} utility`}>{props.title}</p>
            {/* <p>{props.imageUrl}</p> */}
        </div>
    )
}

export default TeamMember