import {Component, HostListener} from '@angular/core';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private viewService: ViewService) { }

  showAboutPage() {
    this.closeMenu();
    this.viewService.showAboutData();
  }

  showProjectPage() {
    this.closeMenu();
    this.viewService.showProjectData();
  }

  toggleMenu() {
    const header = document.getElementById('header');
    this.viewService.toggleMenu();
    header.classList.add('header_scroll');
    if (window.pageYOffset <= 0 && !this.viewService.menuVisible) {
      header.classList.remove('header_scroll');
    }
  }

  closeMenu() {
    if (this.menuIsVisible()) {
      this.viewService.toggleMenu();
    }
  }

  menuIsVisible(): boolean {
    return this.viewService.menuVisible;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    const header = document.getElementById('header');
    if (window.pageYOffset > 0 || this.viewService.menuVisible) {
      header.classList.add('header_scroll');
    } else {
      header.classList.remove('header_scroll');
    }
  }
}
