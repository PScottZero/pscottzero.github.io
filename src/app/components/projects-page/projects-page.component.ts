import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  recentTitle: string;
  olderTitle: string;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.recentTitle = 'Recent Projects';
    this.olderTitle = 'Older Projects';
  }

  /**
   * returns list of recent prj_img from prj_img service
   */
  getRecentProjects(): Array<Project> {
    return this.projectService.recentProjects;
  }

  /**
   * returns list of older prj_img from prj_img service
   */
  getOlderProjects(): Array<Project> {
    return this.projectService.olderProjects;
  }
}
