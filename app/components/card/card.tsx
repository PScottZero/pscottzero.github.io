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
      descriptionLines.push(<p key={0}>{description}</p>);
    }
  }
  
  const flex_ = flex ?? 3;
  const cardStyles = styles.card + (link !== undefined ? " " + styles.link : "");
  const flexWidth = (100 / flex_) + "%";
  const widthCorrection = (flex_ - 1) + " * var(--spacing) / " + flex_;
  const maxWidth = "calc(" + flexWidth + " - " + widthCorrection + ")";
  const height = flex_ ===  4 ? "var(--small-card-height)" : "var(--card-height)";

  const linkFn = link !== undefined ? () => window.open(link) : undefined;
  const linkIcon = link !== undefined ? <img className={styles.linkIcon} src="imgs/link.svg"/> : undefined;

  return (
    <div style={{flex: maxWidth, maxWidth: maxWidth, height: height}} className={cardStyles} onClick={linkFn}>
      <div className={styles.label}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.description}>
          {descriptionLines}
          {linkIcon}
        </div>
      </div>
      <img className={styles.image} src={image}/>
    </div>
  );
}
