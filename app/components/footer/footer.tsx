import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Email at <a href="mailto:pauljscott8@gmail.com">pauljscott8@gmail.com</a>{" "}
      or call at (215) 880-9592
      <br />
      Updated April 15<sup>th</sup>, 2025
    </footer>
  );
}
