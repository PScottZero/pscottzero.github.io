import { Component, HostListener, OnInit } from '@angular/core';
import { IconButton } from '../../classes/IconButton';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  buttons = [
    new IconButton('email.svg', 'mailto: pauljscott8@gmail.com'),
    new IconButton(
      'resume.svg',
      'https://drive.google.com/file/d/1Z79TNs30ttAftoWwJbqm93X77OljiM3L/'
    ),
    new IconButton(
      'linkedin.svg',
      'https://www.linkedin.com/in/paul-scott-047858140/'
    ),
    new IconButton('github.svg', 'https://github.com/PScottZero'),
  ];
  menuIsVisible: boolean;

  ngOnInit(): void {
    this.menuIsVisible = false;
  }

  toggleMenu() {
    this.menuIsVisible = !this.menuIsVisible;
    const header = document.getElementById('header');
    header.classList.add('header-scroll');
    if (window.pageYOffset <= 0 && !this.menuIsVisible) {
      header.classList.remove('header-scroll');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    const header = document.getElementById('header');
    if (window.pageYOffset > 0 || this.menuIsVisible) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  }
}
