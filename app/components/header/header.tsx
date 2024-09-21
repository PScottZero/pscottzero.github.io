import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src="/images/logo.svg" alt="Logo" width={2526} height={1024} />
      <nav className={styles.nav}>
        <span className={styles.pageLinks}>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#top-languages">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#grad-courses">Courses</a>
          <a href="#hobbies">Hobbies</a>
        </span>
        <div className={styles.verticalSeparator}></div>
        <a href="mailto:pauljscott8@gmail.com" target="_blank">
          <Image src="/icons/email.svg" alt="Email" width={128} height={128} />
        </a>
        <a
          href="https://drive.google.com/file/d/181m4g11n53sekOgt40T1ZhLruRoqN56X/view?usp=sharing"
          target="_blank"
        >
          <Image
            src="/icons/resume.svg"
            alt="Resume"
            width={128}
            height={128}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/paul-scott-047858140/"
          target="_blank"
        >
          <Image
            src="/icons/linkedin.svg"
            alt="Linkedin"
            width={128}
            height={128}
          />
        </a>
        <a href="https://github.com/PScottZero" target="_blank">
          <Image
            src="/icons/github.svg"
            alt="GitHub"
            width={128}
            height={128}
          />
        </a>
      </nav>
    </header>
  );
}
