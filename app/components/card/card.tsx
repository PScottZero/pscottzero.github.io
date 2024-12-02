"use client";

import Image from "next/image";
import styles from "./card.module.scss";
import variables from "../../constants.module.scss";

export type CardData = {
  title: string;
  description?: string | string[];
  image: string;
  link?: string;
};

export type CardProps = {
  data: CardData;
  imageFolder: string;
  flex: number;
  flexShrink: number;
};

const mediumFontSize = "$medium-font-size";
const regularFontSize = "$regular-font-size";
const smallFontSize = "$small-font-size";
const regularSpacing = "$spacing";
const smallSpacing = "calc($spacing / 2)";

function getCardWidth(flexAdjusted: number): string {
  const flexWidth = 100 / flexAdjusted + "%";
  const widthCorrection =
    flexAdjusted - 1 + " * " + variables.spacing + " / " + flexAdjusted;
  return "calc(" + flexWidth + " - " + widthCorrection + ")";
}

export default function Card({
  data,
  imageFolder,
  flex,
  flexShrink,
}: CardProps) {
  let descriptionLines = [];
  if (data.description !== undefined) {
    if (Array.isArray(data.description)) {
      for (let i = 0; i < data.description.length; i++) {
        descriptionLines.push(<p key={i}>{data.description[i]}</p>);
      }
    } else {
      descriptionLines.push(<p key={0}>{data.description}</p>);
    }
  }

  const flexAdjusted = Math.max(flex - flexShrink, 1);
  const cardWidth = getCardWidth(flexAdjusted);

  const useSmallCardSpecs = flexAdjusted == 2 && flexShrink == 2;
  const titleSize = useSmallCardSpecs ? regularFontSize : mediumFontSize;
  const descriptionSize = useSmallCardSpecs ? smallFontSize : regularFontSize;
  const labelPadding = useSmallCardSpecs ? smallSpacing : regularSpacing;

  const hasLink = data.link !== undefined;
  const linkStyles = hasLink ? styles.link : "";
  const linkFn = hasLink ? () => window.open(data.link) : undefined;
  const linkIcon = hasLink ? (
    <Image
      className={styles.linkIcon}
      src="icons/link.svg"
      alt="link"
      width={64}
      height={64}
    />
  ) : undefined;

  const cardStyles = `${styles.card} ${linkStyles}`;
  return (
    <div
      style={{ flex: cardWidth, maxWidth: cardWidth }}
      className={cardStyles}
      onClick={linkFn}
    >
      <div className={styles.label} style={{ padding: labelPadding }}>
        <div className={styles.title} style={{ fontSize: titleSize }}>
          {data.title}
        </div>
        <div
          className={styles.description}
          style={{ fontSize: descriptionSize }}
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
