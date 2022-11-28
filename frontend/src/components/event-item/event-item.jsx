import client from '../fetch/fetch';
import { createSignal } from 'solid-js';
import styles from './event-item.module.css'
import { urlFor } from '../../helpers/urlBuilder';
import SectionTitle from '../section-title/section-title';

function EventItem(props) {

  return (
    <div class={styles.eventItem}>
        <SectionTitle
            title={props.name}
            label={props.location} 
            textTitle={true}
            alignment='left'
        />
        {/* <p class={styles.eventTitle}>{props.name}</p>
        <p class={styles.eventLocation}>{props.location}</p> */}
        <div class={styles.eventImagesWrapper}>
            <For each={props.images}>
                {image => <img class={styles.eventImage} src={urlFor(image).url()} alt={image.alt} />}
            </For>
        </div>
    </div>
  );
}

export default EventItem;
