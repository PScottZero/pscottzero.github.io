import { Component } from '@angular/core';
import { PageStateService } from './services/pageState/pageState.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pjs4';

  constructor(private pageService: PageStateService) {}

  aboutPageIsVisible() {
    return this.pageService.aboutPageIsVisible;
  }

  projectsPageIsVisible() {
    return this.pageService.projectsPageIsVisible;
  }
}
