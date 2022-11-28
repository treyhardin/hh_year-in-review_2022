import { createSignal } from 'solid-js';
import client from '../fetch/fetch';
import TeamMember from '../team-member/team-member';
import styles from './team.module.css';
import { urlFor } from '../../helpers/urlBuilder';
import changePageColor from '../../helpers/change-page-color';
import SectionTitle from '../section-title/section-title';

function Team() {

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


  return (
    <section class={styles.team} ref={section => changePageColor(section, 'var(--color-ink)')}>
      <SectionTitle 
        title="18" 
        label="New Team Members" 
        alignment='right'
      />
      <div class={styles.teamMembersWrapper}>
        <For each={team()}>
          {(teamMember) => 
            <TeamMember 
              name={teamMember.name}
              title={teamMember.title}
              imageUrl={urlFor(teamMember.image).width(imageSize).height(imageSize).url()}
            />
          }
        </For>
      </div>
    </section>
  );
}

export default Team;
