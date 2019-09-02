/**
 * service that keeps track of which page to show
 * (either about page or prj_img page)
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageStateService {
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
