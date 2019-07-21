import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  aboutPageIsVisible = true;
  projectsPageIsVisible = false;

  constructor() { }

  showAboutPage() {
    this.aboutPageIsVisible = true;
    this.projectsPageIsVisible = false;
  }

  showProjectsPage() {
    this.aboutPageIsVisible = false;
    this.projectsPageIsVisible = true;
  }
}
