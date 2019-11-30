import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private pageService: ContentService) { }

  // shows about info blocks
  showAboutData() {
    this.pageService.showAboutData();
  }

  // shows project info blocks
  showProjectData() {
    this.pageService.showProjectData();
  }
}
