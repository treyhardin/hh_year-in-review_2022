import { createEffect, createSignal, For, onMount } from 'solid-js';
import styles from './launches.module.css';
import client from '../fetch/fetch';
import SectionTitle from '../section-title/section-title';
import ProjectCard from '../project-card/project-card';
import gsap, { Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import changePageColor from '../../helpers/change-page-color';

import viewportDetect from '../../helpers/viewport-detect';


const [ activeProject, setActiveProject ] = createSignal('Project')

function Launches() {

  // let activeProjectTitle
  let launchSection
  let projectTitle

  gsap.registerPlugin(ScrollTrigger)

  const [ projects, setProjects ] = createSignal() 

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


  onMount(() => {

    changePageColor(launchSection, 'var(--color-ink)')

    ScrollTrigger.create({
      trigger: projectTitle,
      start: 'top top',
      end: 'bottom bottom',
      pin: projectTitle,
      endTrigger: launchSection,
    })

  })


  return (

    <section class={styles.launchesSection} ref={launchSection} id="work">
      <SectionTitle 
        title="16" 
        label="Projects Launched" 
        alignment='right'
        container={launchSection}
      />
      <div class={styles.activeProjectTitle} ref={projectTitle}>{activeProject()}</div>
      <For each={projects()}>
        {(project, i) => 
          <ProjectCard 
            name={project.name} 
            imageUrl={project.imageUrl} 
            currentIndex={i()}
            totalProjects={projects().length} 
            container={launchSection}
          />
        }
      </For>
    </section>
  );
}

export { Launches, setActiveProject };
