import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="images/logo.svg"></img>
      <nav className={styles.nav}>
        <span className={styles.pageLinks}>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#languages">Skills</a>
          <a href="#grad-courses">Courses</a>
          <a href="#hobbies">Hobbies</a>
        </span>
        <div className={styles.verticalSeparator}></div>
        <a href="mailto:pauljscott8@gmail.com" target="_blank"><img src="icons/email.svg"/></a>
        <a href="https://drive.google.com/file/d/181m4g11n53sekOgt40T1ZhLruRoqN56X/view?usp=sharing" target="_blank"><img src="icons/resume.svg"/></a>
        <a href="https://www.linkedin.com/in/paul-scott-047858140/" target="_blank"><img src="icons/linkedin.svg"/></a>
        <a href="https://github.com/PScottZero" target="_blank"><img src="icons/github.svg"/></a>
      </nav>
    </header>
  );
}
