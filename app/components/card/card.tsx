"use client";

import Image from "next/image";
import styles from "./card.module.scss";

export type CardData = {
  title: string;
  description?: string | string[];
  image: string;
  link?: string;
};

export class CardDims {
  width: string = "";
  titleSize: string = "";
  descriptionSize: string = "";
  labelPadding: string = "";
}

export type CardProps = {
  data: CardData;
  dims: CardDims;
  imageFolder: string;
};

export default function Card({ data, dims, imageFolder }: CardProps) {
  const descriptionLines: JSX.Element[] = [];
  if (data.description !== undefined) {
    if (Array.isArray(data.description)) {
      for (let i = 0; i < data.description.length; i++) {
        descriptionLines.push(<p key={i}>{data.description[i]}</p>);
      }
    } else {
      descriptionLines.push(<p key={0}>{data.description}</p>);
    }
  }

  const hasLink = data.link !== undefined;
  const linkStyles = hasLink ? styles.link : "";
  const linkFn = hasLink ? () => window.open(data.link) : undefined;
  const linkIcon = hasLink ? (
    <Image
      className={styles.linkIcon}
      src="images/link.svg"
      alt="link"
      width={64}
      height={64}
    />
  ) : undefined;

  const cardStyles = `${styles.card} ${linkStyles}`;
  return (
    <div
      style={{ flex: dims.width, maxWidth: dims.width }}
      className={cardStyles}
      onClick={linkFn}
    >
      <div className={styles.label} style={{ padding: dims.labelPadding }}>
        <div className={styles.title} style={{ fontSize: dims.titleSize }}>
          {data.title}
        </div>
        <div
          className={styles.description}
          style={{ fontSize: dims.descriptionSize }}
        >
          {descriptionLines}
          {linkIcon}
        </div>
      </div>
      <Image
        className={styles.image}
        src={"/images/" + imageFolder + "/" + data.image}
        alt={data.title}
        width={512}
        height={512}
      />
    </div>
  );
}
