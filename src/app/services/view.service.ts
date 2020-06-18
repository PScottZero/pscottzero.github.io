import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  aboutDataVisible = true;
  projectDataVisible = false;
  menuVisible = false;

  constructor() { }

  showAboutData() {
    this.aboutDataVisible = true;
    this.projectDataVisible = false;
  }

  showProjectData() {
    this.aboutDataVisible = false;
    this.projectDataVisible = true;
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
