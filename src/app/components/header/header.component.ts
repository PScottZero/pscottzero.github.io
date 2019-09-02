import { Component, OnInit } from '@angular/core';
import { PageStateService } from '../../services/pageState/pageState.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;

  constructor(private pageService: PageStateService) { }

  ngOnInit() {
    this.title = 'Paul Joseph Scott IV';
  }

  /**
   * open google drive link to resume
   */
  openResume() {
    window.open('https://drive.google.com/open?id=1Z79TNs30ttAftoWwJbqm93X77OljiM3L', '_blank');
  }

  /**
   * open linkedIn page
   */
  openLinkedIn() {
    window.open('https://www.linkedin.com/in/paul-scott-047858140/', '_blank');
  }

  /**
   * display about page
   */
  showAboutPage() {
    this.pageService.showAboutPage();
  }

  /**
   * display prj_img page
   */
  showProjectsPage() {
    this.pageService.showProjectsPage();
  }
}
