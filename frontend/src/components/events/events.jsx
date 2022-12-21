import styles from './events.module.css';
import client from '../fetch/fetch';
import { urlFor } from '../../helpers/urlBuilder';
import { createSignal, onMount } from 'solid-js';
import changePageColor from '../../helpers/change-page-color';
import EventItem from '../event-item/event-item';

function Events() {

  let eventSection

  const [ events, setEvents ] = createSignal()

  // Fetch Team from Sanity

  const fetchEvents = () => {
    // fetching the data
    client
      .fetch('*[_type == "event"]{title, location, images}', {})
      .then(res => {
        setEvents(res)
      })
      .catch(err => {
        console.log(err);
      });
  };
    
  fetchEvents()

  onMount(() => {
    changePageColor(eventSection, 'var(--color-blue')
  })


  return (
    <section class={styles.events} ref={eventSection}>
      <For each={events()}>
        {(event, i) => 
          <EventItem 
            name={event.title}
            location={event.location}
            images={event.images}
            container={eventSection}
            indexEven={i() % 2 == 0}
          />
        }
      </For>
    </section>
  );
}

export default Events;
