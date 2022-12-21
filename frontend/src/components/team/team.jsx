import { createSignal, onMount } from 'solid-js';
import client from '../fetch/fetch';
import TeamMember from '../team-member/team-member';
import styles from './team.module.css';
import { urlFor } from '../../helpers/urlBuilder';
import changePageColor from '../../helpers/change-page-color';
import SectionTitle from '../section-title/section-title';

function Team() {

  let teamSection

  const imageSize = 800

  const [ team, setTeam ] = createSignal()

  // Fetch Team from Sanity

  const fetchTeam = () => {
    // fetching the data
    client
      .fetch('*[_type == "team"]{name, title, image, "imageUrl": image.asset->url}', {})
      .then(res => {
        setTeam(res)
      })
      .catch(err => {
        console.log(err);
      });
  };
    
  fetchTeam()

  onMount(() => {
    
    changePageColor(teamSection, 'var(--color-red)')
  })


  return (
    <section class={styles.team} ref={teamSection}>
      <SectionTitle 
        title="18" 
        label="New Team Members"
        container={teamSection}
        alignment='left'
      />
      <div class={styles.teamMembersWrapper}>
        <For each={team()}>
          {(teamMember) => 
            <TeamMember 
              name={teamMember.name}
              title={teamMember.title}
              container={teamSection}
              imageUrl={urlFor(teamMember.image).width(imageSize).height(imageSize).url()}
            />
          }
        </For>
      </div>
    </section>
  );
}

export default Team;
