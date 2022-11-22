import styles from './project-card.module.css';

function ProjectCard(props) {

    const animateScroll = (projectCard) => {

        const maxAngle = 6
        const rotationMultiplier = 3

        const targetRotation = (Math.random() * 2 - 1) * maxAngle;
        const initialRotation = targetRotation * -1 * rotationMultiplier

        projectCard.style.setProperty('--rotation', initialRotation)

        if (props.currentIndex > 0) {

            window.addEventListener('scroll', (e) => {

                const boundingBox = projectCard.getBoundingClientRect();

                if (boundingBox.top <= window.innerHeight && boundingBox.top > 0) {
                
                    let scrollProgress = 1 - boundingBox.top / window.innerHeight
                    
                    let valueRange = targetRotation - initialRotation
                    
                    let newValue = (valueRange * scrollProgress) + initialRotation
                    projectCard.style.setProperty('--rotation', newValue)
                    
                }
                
            })
        }

    }


    const positionCard = (projectCard) => {

        const maxOffset = 100

        const offsetX = ((window.innerWidth - maxOffset * 2) / props.totalProjects) * props.currentIndex + maxOffset
        const offsetY = ((window.innerHeight - maxOffset * 2) / props.totalProjects) * props.currentIndex + maxOffset

        projectCard.style.setProperty("--offsetX", `${offsetX}`);
        projectCard.style.setProperty("--offsetY", `${offsetY}`);
    }

    const transformCard = (projectCard) => {
        positionCard(projectCard)
        animateScroll(projectCard)


        window.addEventListener('resize', () => {
            rotateCard(projectCard)
            positionCard(projectCard)
        })
    }

    

    return (
        <div class={styles.projectCard} ref={projectCard => transformCard(projectCard)} >
            <div class={styles.projectCardInner}>
            <img class={styles.projectImage} src={props.imageUrl} />
            <div class={styles.projectTitle}><p class="utility">{props.name}</p></div>
            </div>
        </div>
    );
}

export default ProjectCard;
