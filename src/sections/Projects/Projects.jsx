import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import chess from '../../assets/chess.png';
import chat from '../../assets/chat.png';
import phone from '../../assets/phone.jpg';
import bell from '../../assets/bell.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={bell}
          width='40%'
          link='https://github.com/olivrrcode/MERN-Social-Media'
          h3='Social Media'
          p='MERN Social Media'
        />
        <ProjectCard
          src={chess}
          width='100%'
          link='https://github.com/olivrrcode/Chess-Engine'
          h3='Chess AI'
          p='Python Chess Game'
        />
        <ProjectCard
          src={chat}
          width='45%'
          link='https://github.com/olivrrcode/Chat-Room'
          h3='Chat Room'
          p='Python Flask Chat Room'
        />
        <ProjectCard
          src={phone}
          width='55%'
          link='https://github.com/olivrrcode/Meetup-Web-App'
          h3='CRUD Web App'
          p='React and Firebase App'
        />
      </div>
    </section>
  );
}

export default Projects;
