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
          Howdy! My name is Paul Scott, and I am a software engineer at Vistar
          Media. I received my MSE in Computer & Information Science from the
          University of Pennsylvania, and my BS in Computer Science from Penn
          State. My areas of interest are computer graphics, distributed
          systems, emulation, machine learning, and web development.
        </div>
      </div>
    </Window>
  );
}
