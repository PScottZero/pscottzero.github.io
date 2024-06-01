"use client";

import styles from "./card.module.css";

export type CardData = {
  title: string,
  description?: string | string[],
  image: string,
  link?: string,
}

export type CardProps = {
  data: CardData,
  imageFolder: string,
  flex: number,
  flexShrink: number,
};

function adjustFlex(flex: number, flexShrink: number): number {
  let flexAdjusted = flex - flexShrink;
  if (flexAdjusted < 2 && flexShrink === 1) flexAdjusted = 2;
  if (flexAdjusted === 0) flexAdjusted = 1;
  return flexAdjusted;
}

function getCardMaxWidth(flexAdjusted: number): string {
  const flexWidth = (100 / flexAdjusted) + "%";
  const widthCorrection = (flexAdjusted - 1) + " * var(--spacing) / " + flexAdjusted;
  return "calc(" + flexWidth + " - " + widthCorrection + ")";
}

function getCardHeight(flexAdjusted: number, flexShrink: number): string {
  if (flexAdjusted === 4) {
    return "var(--small-card-height)";
  } else if (flexAdjusted === 2 && flexShrink === 2) {
    return "var(--mobile-small-card-height)";
  } else if (flexAdjusted < 2 && flexShrink === 2) {
    return "var(--mobile-card-height)";
  } else if (flexShrink === 1) {
    return "var(--medium-card-height)";
  } else {
    return "var(--card-height)";
  }
}

function getCardFontSizes(flexAdjusted: number, flexShrink: number): string[] {
  return flexAdjusted == 2 && flexShrink === 2 ?
    ["var(--regular-font-size)", "var(--small-font-size)", "calc(var(--spacing) / 2)"] :
    ["var(--medium-font-size)", "var(--regular-font-size)", "var(--spacing)"];
}

export default function Card({ data, imageFolder, flex, flexShrink }: CardProps) {
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
  
  const flexAdjusted = adjustFlex(flex, flexShrink);
  const maxCardWidth = getCardMaxWidth(flexAdjusted);
  const height = getCardHeight(flexAdjusted, flexShrink);
  const [titleSize, descriptionSize, labelPadding] = getCardFontSizes(flexAdjusted, flexShrink);
  
  const cardStyles = styles.card + (data.link !== undefined ? " " + styles.link : "");

  const linkFn = data.link !== undefined ? () => window.open(data.link) : undefined;
  const linkIcon = data.link !== undefined ? <img className={styles.linkIcon} src="icons/link.svg"/> : undefined;

  return (
    <div style={{flex: maxCardWidth, maxWidth: maxCardWidth, height: height}} className={cardStyles} onClick={linkFn}>
      <div className={styles.label} style={{padding: labelPadding}}>
        <div className={styles.title} style={{fontSize: titleSize}}>
          {data.title}
        </div>
        <div className={styles.description}  style={{fontSize: descriptionSize}}>
          {descriptionLines}
          {linkIcon}
        </div>
      </div>
      <img className={styles.image} src={"images/" + imageFolder + "/" + data.image}/>
    </div>
  );
}
