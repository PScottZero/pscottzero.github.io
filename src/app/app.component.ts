import { Component } from '@angular/core';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pjs4';

  constructor(private contentService: ContentService) {}

  menuVisible(): boolean {
    return this.contentService.menuVisible;
  }
}
