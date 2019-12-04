import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private contentService: ContentService) { }

  // shows about info blocks
  showAboutData() {
    this.closeMenu();
    this.contentService.showAboutData();
  }

  // shows project info blocks
  showProjectData() {
    this.closeMenu();
    this.contentService.showProjectData();
  }

  // toggles navigation menu (only on mobile)
  toggleMenu() {
    this.contentService.toggleMenu();
  }

  // close navigation menu (only on mobile)
  closeMenu() {
    if (this.menuVisible()) {
      this.contentService.toggleMenu();
    }
  }

  // returns menu visibility
  menuVisible(): boolean {
    return this.contentService.menuVisible;
  }
}
