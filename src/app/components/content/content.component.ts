import { Component } from '@angular/core';
import {ContentService} from '../../services/content.service';
import {AboutService} from '../../services/about.service';
import {ProjectService} from '../../services/project.service';
import {InfoBlockGroup} from '../../objects/InfoBlockGroup';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  about = 'Created by Paul Scott using Angular';
  contact = 'Call at (215) 880-9592 or email at pauljscott8@gmail.com';
  lastUpdated = 'Last updated 2 March 2020';

  constructor(private contentService: ContentService,
              private aboutService: AboutService,
              private projectService: ProjectService) { }

  // gets info block depending on page being shown
  getInfoBlockGroups(): InfoBlockGroup[] {
    if (this.contentService.aboutDataVisible) {
      return this.aboutService.infoGroups;
    } else {
      return this.projectService.projectGroups;
    }
  }

  // opens given link in new tab
  open(link: string) {
    if (link) {
      window.open(link, '_blank');
    }
  }
}
