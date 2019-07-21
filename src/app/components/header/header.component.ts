import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.title = 'Paul Joseph Scott IV';
  }

  openResume() {
    window.open('https://drive.google.com/open?id=1Z79TNs30ttAftoWwJbqm93X77OljiM3L', '_blank');
  }

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/paul-scott-047858140/', '_blank');
  }

  showAboutPage() {
    this.pageService.showAboutPage();
  }

  showProjectsPage() {
    this.pageService.showProjectsPage();
  }
}
