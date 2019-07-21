import { Component } from '@angular/core';
import { PageService } from './services/page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pjs4';

  constructor(private pageService: PageService) {}

  aboutPageIsVisible() {
    return this.pageService.aboutPageIsVisible;
  }

  projectsPageIsVisible() {
    return this.pageService.projectsPageIsVisible;
  }
}
