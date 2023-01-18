import { Component } from '@angular/core';
import { IconButton } from '../icon-button/IconButton';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  buttons = [
    new IconButton('email.svg', 'mailto: pauljscott8@gmail.com'),
    new IconButton(
      'resume.svg',
      'https://drive.google.com/file/d/1Bh8Dhi3kXh_P13SzMrtdO51R9Dnx76oW/view?usp=sharing'
    ),
    new IconButton(
      'linkedin.svg',
      'https://www.linkedin.com/in/paul-scott-047858140/'
    ),
    new IconButton('github.svg', 'https://github.com/PScottZero'),
  ];
  menuIsVisible: boolean;

  constructor() {
    this.menuIsVisible = false;
    window.addEventListener('scroll', this.toggleHeaderBackground, true);
  }

  toggleMenu(): void {
    this.menuIsVisible = !this.menuIsVisible;
    const header = document.getElementById('header');
    if (header !== null) {
      header.classList.add('header-scroll');
      if (window.pageYOffset <= 0 && !this.menuIsVisible) {
        header.classList.remove('header-scroll');
      }
    }
  }

  toggleHeaderBackground(): void {
    const header = document.getElementById('header');
    if (header !== null) {
      if (window.pageYOffset <= 0) {
        console.log('true');
        header.classList.remove('header-scroll');
      } else {
        console.log('false');
        header.classList.add('header-scroll');
      }
    }
  }
}
