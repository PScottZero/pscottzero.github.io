import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private pageService: ContentService) { }

  showAboutData() {
    this.pageService.showAboutData();
  }

  showProjectData() {
    this.pageService.showProjectData();
  }
}
