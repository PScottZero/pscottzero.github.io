import Card, { CardProps } from "../card/card";
import styles from "./section.module.css";

export type SectionProps = {
  sectionTitle: string,
  imageFolder: string,
  navId?: string,
  columns: number,
  content: CardProps[]
}

export default function Section({ navId, sectionTitle, imageFolder, columns, content }: SectionProps) {
  let cards: JSX.Element[] = [];
  for (const card of content) {
    cards.push(
      <Card
        key={cards.length}
        title={card.title}
        description={card.description}
        image={"imgs/content/" + imageFolder + "/" + card.image}
        link={card.link}
        flex={columns}
      />
    );
  }

  return (
    <div id={navId !== undefined ? navId : undefined} className={styles.section}>
      <div className={styles.title}>
        {sectionTitle}
      </div>
      <div className={styles.cards}>
        {cards}
      </div>
    </div>
  );
}