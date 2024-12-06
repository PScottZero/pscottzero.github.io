import styles from "./window.module.scss";

type WindowProps = {
  title: string;
  itemCount?: number;
  children?: React.ReactNode;
};

export default function Window({ title, itemCount, children }: WindowProps) {
  return (
    <div className={styles.outerWindow}>
      <div className={styles.innerWindow}>
        <div className={styles.titleBar}>
          <div className={styles.button + " " + styles.close}>
            <div />
          </div>
          <span className={styles.title}>{title}</span>
          <div className={styles.button + " " + styles.minimize}>
            <div />
          </div>
          <div className={styles.button + " " + styles.maximize}>
            <div />
          </div>
        </div>
        <div className={styles.menu}>
          <span>
            <u>F</u>ile
          </span>
          <span>
            <u>E</u>dit
          </span>
          <span>
            <u>V</u>iew
          </span>
        </div>
        <div className={styles.content}>{children}</div>
        {itemCount && <div className={styles.itemCount}>{itemCount} Items</div>}
      </div>
      <div className={styles.corners}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
