export class InfoBlock {
  title: string;
  description: string;
  backgroundImg: string;
  link: string;

  constructor(title: string, backgroundImg: string, description?: string, link?: string) {
    this.title = title;
    this.description = description;
    this.backgroundImg = backgroundImg;
    this.link = link;
  }
}
