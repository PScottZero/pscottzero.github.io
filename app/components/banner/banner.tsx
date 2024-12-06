import Image from "next/image";
import styles from "./banner.module.scss";
import Window from "../window/window";

export default function Banner() {
  return (
    <Window title="Bio">
      <div className={styles.banner}>
        <div className={styles.profile}>
          <Image
            src="/images/profile.jpg"
            alt="Picture of me"
            width={512}
            height={512}
            priority={true}
          />
        </div>
        <div className={styles.description}>
          Hello! My name is Paul Scott. I am a software engineer at Vistar
          Media. I obtained my master&apos;s in computer and information science
          from the University of Pennsylvania, and I obtained my bachelor&apos;s
          degree in computer science from Penn State. My areas of interest are
          computer graphics, distributed systems, emulation, machine learning,
          software engineering, and web development.
        </div>
      </div>
    </Window>
  );
}
