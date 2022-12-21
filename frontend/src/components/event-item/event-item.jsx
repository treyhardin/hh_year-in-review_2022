import client from '../fetch/fetch';
import { createSignal, onMount } from 'solid-js';
import styles from './event-item.module.css'
import { urlFor } from '../../helpers/urlBuilder';
import SectionTitle from '../section-title/section-title';
import gsap, { Power4 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import changePageColor from '../../helpers/change-page-color';

function EventItem(props) {

  gsap.registerPlugin(ScrollTrigger)

  let eventItem
  let eventImages
  

  onMount(() => {

    eventItem.style.minHeight = `${props.images.length * 100}vh`;

    // changePageColor(eventItem, 'var(--color-ink)')

    gsap.to(eventImages, {
      x: window.innerWidth + eventImages.offsetWidth * -1,
      ease: 'linear',
      // ease: Power4.easeOut,
      scrollTrigger: {
        trigger: eventItem,
        start: 'top top',
        end: 'bottom bottom',
        // endTrigger: eventItem,
        // toggleActions: 'play reset replay reset',
        scrub: true,
        pin: eventImages,
      }
    })
    
  })

  return (
    <div class={styles.eventItem} ref={eventItem}>
        <SectionTitle
            title={props.name}
            label={props.location} 
            textTitle={true}
            alignment={props.indexEven ? 'right' : 'left'}
            container={eventItem}
        />
        <div class={styles.eventImagesWrapper}>
          <div class={styles.eventImages} ref={eventImages}>
            <For each={props.images}>
                {image => <img class={styles.eventImage} src={urlFor(image).url()} alt={image.alt} />}
            </For>
          </div>
        </div>
    </div>
  );
}

export default EventItem;
