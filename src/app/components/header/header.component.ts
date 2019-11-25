import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;

  constructor(private pageService: ContentService) { }

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
    this.pageService.showAboutData();
  }

  /**
   * display prj_img page
   */
  showProjectsPage() {
    this.pageService.showProjectData();
  }
}
