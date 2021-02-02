import { Info } from './Info';

export class InfoGroup {
  title: string;
  infoArray: Array<Info>;

  constructor(title: string, infoArray: Array<Info>) {
    this.title = title;
    this.infoArray = infoArray;
  }
}
