import {Component} from '@angular/core';
import {ViewService} from '../../services/view.service';
import {DataService} from '../../services/data.service';
import {InfoGroup} from '../../objects/InfoGroup';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  about = 'Created by Paul Scott using Angular';
  contact = 'Call at (215) 880-9592 or email at pauljscott8@gmail.com';
  lastUpdated = 'Last updated 25 May 2020';

  constructor(private contentService: ViewService,
              private dataService: DataService) { }

  getPageInfo(): InfoGroup[] {
    return this.contentService.aboutDataVisible ? this.dataService.infoGroups : this.dataService.projectGroups;
  }
}
