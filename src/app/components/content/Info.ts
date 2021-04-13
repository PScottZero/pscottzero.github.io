export class Info {
  title: string;
  description: string;
  backgroundImage: string;
  projectLink: string;

  constructor(
    title: string,
    baseImgDir: string,
    backgroundImg: string,
    description?: string,
    baseLink?: string,
    projectLink?: string
  ) {
    this.title = title;
    this.description = description;
    if (backgroundImg) {
      this.backgroundImage = baseImgDir.concat(backgroundImg);
    }
    if (projectLink) {
      this.projectLink = baseLink.concat(projectLink);
    }
  }
}
