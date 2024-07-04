import styles from './HeroStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import pfp from '../../assets/pfp.jpg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={pfp}
          style={{
            border: `5px solid ${theme === 'light' ? '#222' : '#fff'}`,
            boxShadow: `${theme === 'light' ? '#222' : '#fff'}`,
            aspectRatio: '1',
            objectFit: 'cover',
            objectPosition: '5% center',
          }}
          className={styles.hero}
          alt='Profile picture of Oliver Atherton'
        />
      </div>
      <div className={styles.info}>
        <h1>
          Oliver
          <br />
          Atherton
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href='https://github.com/olivrrcode' target='_blank'>
            <img src={githubIcon} alt='Github icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/oliverhatherton/'
            target='_blank'>
            <img src={linkedinIcon} alt='Linkedin icon' />
          </a>
        </span>
        <p className={styles.description}>
          A full-stack developer from Huddersfield, West Yorkshire, with a
          passion for creating elegant solutions for web applications.
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
