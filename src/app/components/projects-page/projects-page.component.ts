import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '../../services/project.service';

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

  getRecentProjects(): Array<Project> {
    return this.projectService.recentProjects;
  }

  getOlderProjects(): Array<Project> {
    return this.projectService.olderProjects;
  }
}
