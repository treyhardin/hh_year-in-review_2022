import styles from './recognition.module.css';
import client from '../fetch/fetch';
import { urlFor } from '../../helpers/urlBuilder';
import { createSignal, For, onMount } from 'solid-js';
import RecognitionItem from '../recognition-item/recognition-item';
import changePageColor from '../../helpers/change-page-color';
import SectionTitle from '../section-title/section-title';

function Recognition() {

  let recognitionSection

  const [ recognition, setRecognition ] = createSignal()

  // Fetch Recognition from Sanity

  const fetchRecognition = () => {
    // fetching the data
    client
      .fetch('*[_type == "recognition"]{project, award, publication, image}', {})
      .then(res => {
        // console.log(res)
        setRecognition(res)
      })
      .catch(err => {
        console.log(err);
      });
  };
    
  fetchRecognition()

  onMount(() => {
    changePageColor(recognitionSection, 'var(--color-red)')
  })

  return (
    <section class={styles.recognition} ref={recognitionSection} id="recognition">
      <SectionTitle 
        title="15"
        label="Design & Dev Awards"
        alignment='center'
        container={recognitionSection}
      />
      <div class={styles.recognitionWrapper}>
        <For each={recognition()}>
          {recognition =>
            <RecognitionItem
              project={recognition.project}
              award={recognition.award}
              publication={recognition.publication}
              image={recognition.image}
            />
          }
        </For>
      </div>
    </section>
  );
}

export default Recognition;
