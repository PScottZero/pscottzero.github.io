import {InfoBlock} from "./InfoBlock";

export class InfoBlockGroup {
  title: string;
  infoBlockArr: Array<InfoBlock>;

  constructor(title: string, infoArray: Array<InfoBlock>) {
    this.title = title;
    this.infoBlockArr = infoArray;
  }
}
