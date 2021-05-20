import { Info } from './Info';

export class InfoGroup {
  title: string;
  infoArray: Info[];
  columnCountLarge: number;
  columnCountSmall: number;

  constructor(
    title: string,
    infoArray: Info[],
    columnCountLarge = 3,
    columnCountSmall = 2
  ) {
    this.title = title;
    this.infoArray = infoArray;
    this.columnCountLarge = columnCountLarge;
    this.columnCountSmall = columnCountSmall;
  }
}
