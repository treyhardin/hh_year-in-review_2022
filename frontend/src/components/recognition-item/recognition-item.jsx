import { urlFor } from '../../helpers/urlBuilder'
import styles from './recognition-item.module.css'

function RecognitionItem(props) {

    let recognitionItem

    return (
        <div class={styles.recognitionItem} ref={recognitionItem}>
            <p class={`${styles.recognitionPublication} utility`}>{props.publication}</p>
            <img class={styles.recognitionImage} src={urlFor(props.image).width(800).url()} alt={props.alt} />
            <div class={styles.recognitionText}>
                <p class={`${styles.recognitionProject} h3`}>{props.project}</p>
                <p class={`${styles.recognitionAward}`}>{props.award}</p>
            </div>
        </div>
    )
}

export default RecognitionItem