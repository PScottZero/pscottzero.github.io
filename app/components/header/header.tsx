import Image from "next/image";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.outerHeader}>
      <div className={styles.innerHeader}>
        <Image src="/images/logo.svg" alt="Logo" width={48} height={48} />
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
          <a href="mailto:pauljscott8@gmail.com" target="_blank" title="Email">
            <Image
              src="/icons/org.xfce.mailreader.png"
              alt="Email"
              width={48}
              height={48}
            />
          </a>
          <a
            href="https://drive.google.com/file/d/181m4g11n53sekOgt40T1ZhLruRoqN56X/view?usp=sharing"
            target="_blank"
            title="Resume"
          >
            <Image
              src="/icons/org.xfce.about.png"
              alt="Resume"
              width={128}
              height={128}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/paul-scott-047858140/"
            target="_blank"
            title="LinkedIn"
          >
            <Image
              src="/icons/org.xfce.webbrowser.png"
              alt="Linkedin"
              width={128}
              height={128}
            />
          </a>
          <a
            href="https://github.com/PScottZero"
            target="_blank"
            title="GitHub"
          >
            <Image
              src="/icons/org.xfce.terminal.png"
              alt="GitHub"
              width={128}
              height={128}
            />
          </a>
        </nav>
      </div>
    </header>
  );
}
