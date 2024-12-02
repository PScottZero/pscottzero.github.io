import Window from "../window/window";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <Window title="Footer">
      <footer className={styles.footer}>
        Email at{" "}
        <a href="mailto:pauljscott8@gmail.com">pauljscott8@gmail.com</a> or call
        at (215) 880-9592
        <br />
        Updated December 2<sup>nd</sup>, 2024
      </footer>
    </Window>
  );
}
