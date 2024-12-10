import Image from "next/image";
import styles from "./header.module.scss";

type IconLinkProps = {
  title: string;
  url: string;
  icon: string;
};

function IconLink({ title, url, icon }: IconLinkProps) {
  return (
    <a
      className={styles.iconLink}
      href={url}
      target={url === "/" ? "" : "_blank"}
      title={title}
    >
      <Image src={`/icons/${icon}`} alt={title} width={192} height={192} />
    </a>
  );
}

export default function Header() {
  return (
    <header className={styles.outerHeader}>
      <div className={styles.innerHeader}>
        <div className={styles.logo}>
          <IconLink title="Logo" url="/" icon="logo.png" />
        </div>
        <div className={styles.pageLinks}>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#languages">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#grad-courses">Courses</a>
          <a href="#hobbies">Hobbies</a>
        </div>
        <div className={styles.externalLinks}>
          <IconLink
            title="Email"
            url="mailto:pauljscott8@gmail.com"
            icon="org.xfce.mailreader.png"
          />
          <IconLink
            title="Resume"
            url="https://drive.google.com/file/d/181m4g11n53sekOgt40T1ZhLruRoqN56X/view?usp=sharing"
            icon="org.xfce.about.png"
          />
          <IconLink
            title="LinkedIn"
            url="https://www.linkedin.com/in/paul-scott-047858140/"
            icon="org.xfce.webbrowser.png"
          />
          <IconLink
            title="GitHub"
            url="https://github.com/PScottZero"
            icon="org.xfce.terminal.png"
          />
        </div>
      </div>
    </header>
  );
}
