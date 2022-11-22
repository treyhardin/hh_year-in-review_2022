import { createSignal, For, onMount } from 'solid-js';
import styles from './launches.module.css';
import client from '../fetch/fetch';
import SectionTitle from '../section-title/section-title';
import ProjectCard from '../project-card/project-card';


const [ activeProject, setActiveProject ] = createSignal()

function Launches() {

  const [ projects, setProjects ] = createSignal('hi') 

  // Fetch Projects from Sanity

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
      <div class={styles.stickyWrapper}>
        <SectionTitle title="16" label="Projects Launched" />
        <div class={styles.activeProjectTitle}>
          <div class={styles.activeProjectTitle}>{activeProject()}</div>
        </div>
      </div>
      <div class={styles.projectsWrapper}>
        <For each={projects()}>
          {(project, i) => 
            <ProjectCard 
              name={project.name} 
              imageUrl={project.imageUrl} 
              currentIndex={i()}
              totalProjects={projects().length} 
            />
          }
        </For>
      </div>
      {/* <p ref={testRef}>Test Text Goes Here</p> */}
    </section>
  );
}

export { Launches, setActiveProject };
