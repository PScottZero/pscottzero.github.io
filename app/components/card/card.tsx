"use client";

import styles from "./card.module.css";

export type CardProps = {
  title: string,
  description?: string | string[],
  image: string,
  link?: string,
  flex?: number
};

export default function Card({ title, description, image, link, flex }: CardProps) {
  let descriptionLines = [];
  if (description !== undefined) {
    if (Array.isArray(description)) {
      for (let i = 0; i < description.length; i++) {
        descriptionLines.push(<p key={i}>{description[i]}</p>);
      }
    } else {
      descriptionLines.push(<p>{description}</p>);
    }
  }
  
  const cardStyles = styles.card + (link !== undefined ? " " + styles.link : "");
  const flexWidth = (100 / (flex ?? 3)) + "%";
  const flexRule = "calc(" + flexWidth + " - var(--spacing))";
  const maxWidth = "calc(" + flexWidth + " - var(--spacing) / 2)";

  const linkFn = link !== undefined ? () => window.open(link) : undefined;

  return (
    <div style={{flex: flexRule, maxWidth: maxWidth}} className={cardStyles} onClick={linkFn}>
      <div className={styles.label}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.description}>
          {descriptionLines}
        </div>
      </div>
      <img className={styles.image} src={image}/>
    </div>
  );
}
