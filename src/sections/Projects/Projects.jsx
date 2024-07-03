import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link='https://github.com/olivrrcode/Chess-Engine'
          h3='Chess AI Project'
          p='Python Chess Game'
        />
        <ProjectCard
          src={freshBurger}
          link='https://github.com/olivrrcode/Chat-Room'
          h3='Chat Room'
          p='Python Flask Chat Room'
        />
        <ProjectCard
          src={hipsster}
          link='https://github.com/olivrrcode/Meetup-Web-App'
          h3='Meetup Web App'
          p='React and Firebase App'
        />
        <ProjectCard
          src={fitLift}
          link='https://github.com/Ade-mir/company-landing-page-2'
          h3='FitLift'
          p='Fitness App'
        />
      </div>
    </section>
  );
}

export default Projects;
