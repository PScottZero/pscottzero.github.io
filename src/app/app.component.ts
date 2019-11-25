import { Component } from '@angular/core';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pjs4';

  constructor(private pageService: ContentService) {}

  aboutPageIsVisible() {
    return this.pageService.aboutDataVisible;
  }

  projectsPageIsVisible() {
    return this.pageService.projectDataVisible;
  }
}
