import { createSignal, For, onMount } from 'solid-js';
import { Client } from "@notionhq/client"
import styles from './launches.module.css';
import client from '../fetch/fetch';

// const notion = new Client({ auth: import.meta.env.VITE_NOTION_TOKEN })
// const databaseId = import.meta.env.VITE_NOTION_DATABASE_ID




function Launches() {

  const [ projects, setProjects ] = createSignal() 

  const fetchProjects = () => {
    // fetching the data
      client
        .fetch('*[_type == "project"]{name, "imageUrl": image.asset->url}', {})
        .then(res => {
          setProjects(res)
        })
        .catch(err => {
          console.log(err);
        });
    };
    
  fetchProjects()

  return (
    <section class={styles.launchesSection}>
      <h1>Launches</h1>
      <For each={projects()}>
        {project => 
          <div class={styles.projectCard}>
            <p class={styles.projectTitle}>{project.name}</p>
            <img class={styles.projectImage} src={project.imageUrl} />
          </div>
        }
      </For>
      {/* <p ref={testRef}>Test Text Goes Here</p> */}
    </section>
  );
}

export default Launches;
