import { onMount } from 'solid-js';
import styles from './event-item.module.css'
import { urlFor } from '../../helpers/urlBuilder';
import SectionTitle from '../section-title/section-title';
import gsap, { Power4 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

function EventItem(props) {

  gsap.registerPlugin(ScrollTrigger)

  let eventItem
  let eventImages
  

  onMount(() => {
    let eventsArray = document.querySelectorAll(`div[id~="_eventItem-"]`)

    function killTimeline(id) {
      let killAnimation = ScrollTrigger.getById(id);
      killAnimation?.kill()
    }
    window.onresize = killTimeline;

    eventItem.style.minHeight = `${props.images.length * 100}vh`;

    // let componentWidth = - (window.innerWidth + eventImages.offsetWidth) / props.images.length;
    let componentWidth = - (eventImages.offsetWidth - window.innerWidth * 0.5);

    window.addEventListener('load', () => {

      gsap.to(eventImages, {
        x: componentWidth,
        ease: 'linear',
        scrollTrigger: {
          id: props.id,
          trigger: eventItem,
          invalidateOnRefresh: true,
          start: 'top top',
          end: 'bottom bottom',
          // end: () => "+=" + eventItem.offsetWidth, 
          scrub: true,
          pin: eventImages,
          // pinSpacer: true,
        }
      })
    })

    
  })

  return (
    <div id={props.id} class={styles.eventItem} ref={eventItem}>
        <SectionTitle
            title={props.name}
            label={props.location} 
            textTitle={true}
            alignment={props.indexEven ? 'right' : 'left'}
            container={eventItem}
        />
        <div class={styles.eventImagesWrapper}>
          <div class={`eventImages ${styles.eventImages}`} ref={eventImages}>
            <For each={props.images}>
                {image => <img class={styles.eventImage} src={urlFor(image).width(1200).url()} alt={image.alt} />}
            </For>
          </div>
        </div>
    </div>
  );
}

export default EventItem;
