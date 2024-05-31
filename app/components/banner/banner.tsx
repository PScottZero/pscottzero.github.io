import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.profile}>
        <img src="imgs/banner/profile.jpg"></img>
      </div>
      <div className={styles.description}>
        Hello! My name is Paul Scott. I am a full-stack software engineer at Merly.
        I obtained my master&apos;s in computer and information science from the University of Pennsylvania,
        and I obtained my bachelor&apos;s degree in computer science from Penn State.
        My areas of interest are computer graphics, distributed systems, emulation,
        machine learning, software engineering, and web development. 
      </div>
    </div>
  );
}
