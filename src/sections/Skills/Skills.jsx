import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML' />
        <SkillList src={checkMarkIcon} skill='CSS' />
        <SkillList src={checkMarkIcon} skill='JavaScript' />
        <SkillList src={checkMarkIcon} skill='Python' />
        <SkillList src={checkMarkIcon} skill='C' />
        <SkillList src={checkMarkIcon} skill='C#' />
        <SkillList src={checkMarkIcon} skill='Java' />
        <SkillList src={checkMarkIcon} skill='SQL' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='React' />
        <SkillList src={checkMarkIcon} skill='Vite' />
        <SkillList src={checkMarkIcon} skill='Node' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Express.js' />
        <SkillList src={checkMarkIcon} skill='MongoDB' />
        <SkillList src={checkMarkIcon} skill='Redux' />
        <SkillList src={checkMarkIcon} skill='Bcrypt' />
        <SkillList src={checkMarkIcon} skill='React-Router-DOM' />
        <SkillList src={checkMarkIcon} skill='Flask' />
        <SkillList src={checkMarkIcon} skill='Socket.IO' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Postman' />
        <SkillList src={checkMarkIcon} skill='MongoDB Compass' />
        <SkillList src={checkMarkIcon} skill='Jest' />
      </div>
    </section>
  );
}

export default Skills;
