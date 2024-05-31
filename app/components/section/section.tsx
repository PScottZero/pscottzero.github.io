import Card, { CardProps } from "../card/card";
import styles from "./section.module.css";

export type SectionProps = {
  sectionId: string,
  title: string,
  columns: number,
  content: CardProps[]
}

export default function Section({ sectionId, title, columns, content }: SectionProps) {
  let cards: JSX.Element[] = [];
  for (const card of content) {
    cards.push(
      <Card
        title={card.title}
        description={card.description}
        image={"imgs/content/" + sectionId + "/" + card.image}
        link={card.link}
        flex={columns}
      />
    );
  }

  return (
    <div id={sectionId} className={styles.section}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.cards}>
        {cards}
      </div>
    </div>
  );
}