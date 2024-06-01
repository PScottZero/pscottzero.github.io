import Card, { CardData } from "../card/card";
import styles from "./section.module.css";

export type SectionData = {
  sectionId: string,
  title: string,
  columns: number,
  content: CardData[]
}

export type SectionProps = {
  data: SectionData,
  flexShrink: number
}

export default function Section({ data, flexShrink }: SectionProps) {
  let cards: JSX.Element[] = [];
  for (let cardData of data.content) {
    cards.push(
      <Card
        key={cards.length}
        data={cardData}
        imageFolder={data.sectionId}
        flex={data.columns}
        flexShrink={flexShrink}
      />
    );
  }

  return (
    <div id={data.sectionId} className={styles.section}>
      <div className={styles.title}>
        {data.title}
      </div>
      <div className={styles.cards}>
        {cards}
      </div>
    </div>
  );
}