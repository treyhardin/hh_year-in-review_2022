import styles from './team-member.module.css'

function TeamMember(props) {

    return (
        <div class={styles.teamMemberCard}>
            {/* <p class={styles.teamMemberName}>{props.name}</p>
            <p class={styles.teamMemberTitle}>{props.title}</p> */}
            <svg viewBox="0 0 100 100" class={styles.textCircle}>
                <defs>
                    <path id="circle"
                    d="
                        M 50, 50
                        m -37, 0
                        a 37,37 0 1,1 74,0
                        a 37,37 0 1,1 -74,0"/>
                </defs>
                <text fill="currentColor" font-size="8px" line-height="0px">
                    <textPath xlink:href="#circle">{props.name} · {props.title}</textPath>
                </text>
            </svg>
            <img class={styles.teamMemberImage} src={props.imageUrl} />
            {/* <p>{props.imageUrl}</p> */}
        </div>
    )
}

export default TeamMember