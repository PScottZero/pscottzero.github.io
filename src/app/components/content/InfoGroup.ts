import { Info } from './Info';

export class InfoGroup {
  title: string;
  infoArray: Info[];

  constructor(title: string, infoArray: Info[]) {
    this.title = title;
    this.infoArray = infoArray;
  }
}
