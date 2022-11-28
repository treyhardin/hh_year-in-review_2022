import styles from './events.module.css';
import client from '../fetch/fetch';
import { urlFor } from '../../helpers/urlBuilder';
import { createSignal } from 'solid-js';
import changePageColor from '../../helpers/change-page-color';
import EventItem from '../event-item/event-item';

function Events() {

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


  return (
    <section class={styles.events} ref={section => changePageColor(section, 'var(--color-blue')}>
      <For each={events()}>
        {event => 
          <EventItem 
            name={event.title}
            location={event.location}
            images={event.images}
          />
        }
      </For>
    </section>
  );
}

export default Events;
