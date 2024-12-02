import Card, { CardData } from "../card/card";
import Window from "../window/window";
import styles from "./section.module.scss";

export type SectionData = {
  sectionId: string;
  imageFolder?: string;
  title: string;
  columns: number;
  content: CardData[];
};

export type SectionProps = {
  data: SectionData;
  flexShrink: number;
};

export default function Section({ data, flexShrink }: SectionProps) {
  let cards: JSX.Element[] = [];
  for (let cardData of data.content) {
    cards.push(
      <Card
        key={cards.length}
        data={cardData}
        imageFolder={data.imageFolder ?? data.sectionId}
        flex={data.columns}
        flexShrink={flexShrink}
      />
    );
  }

  return (
    <div id={data.sectionId} className={styles.section}>
      <Window title={data.title}>
        <div className={styles.cards}>{cards}</div>
      </Window>
    </div>
  );
}
