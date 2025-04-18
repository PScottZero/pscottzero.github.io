import Card, { CardData, CardDims } from "../card/card";
import Window from "../window/window";
import styles from "./section.module.scss";
import variables from "../../constants.module.scss";

export type SectionData = {
  sectionId: string;
  imageFolder?: string;
  title: string;
  columns: number;
  content: CardData[];
};

export type SectionProps = {
  data: SectionData;
  fewerColumns: number;
};

function getCardWidth(columns: number): string {
  const width = 100 / columns + "%";
  const lessWidth =
    columns - 1 + " * " + variables.cardSpacing + " / " + columns;
  return "calc(" + width + " - " + lessWidth + ")";
}

function getCardDims(columns: number, fewerColumns: number): CardDims {
  const dims = new CardDims();
  const columnsAdjusted = Math.max(columns - fewerColumns, 1);
  dims.width = getCardWidth(columnsAdjusted);

  if (columnsAdjusted == 2 && fewerColumns == 2) {
    dims.titleSize = variables.mediumFontSize;
    dims.descriptionSize = variables.smallFontSize;
    dims.labelPadding = `calc(${variables.cardSpacing} / 2)`;
  } else {
    dims.titleSize = variables.largeFontSize;
    dims.descriptionSize = variables.mediumFontSize;
    dims.labelPadding = variables.cardSpacing;
  }

  return dims;
}

export default function Section({ data, fewerColumns }: SectionProps) {
  let cards: JSX.Element[] = [];
  for (let cardData of data.content) {
    cards.push(
      <Card
        key={cards.length}
        data={cardData}
        dims={getCardDims(data.columns, fewerColumns)}
        imageFolder={data.imageFolder ?? data.sectionId}
      />
    );
  }

  return (
    <div id={data.sectionId} className={styles.section}>
      <Window title={data.title} itemCount={cards.length}>
        <div className={styles.cards}>{cards}</div>
      </Window>
    </div>
  );
}
