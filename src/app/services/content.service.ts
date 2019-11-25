import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  aboutDataVisible = true;
  projectDataVisible = false;

  constructor() { }

  showAboutData() {
    this.aboutDataVisible = true;
    this.projectDataVisible = false;
  }

  showProjectData() {
    this.aboutDataVisible = false;
    this.projectDataVisible = true;
  }
}
