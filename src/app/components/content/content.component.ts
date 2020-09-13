import {Component} from '@angular/core';
import {ViewService} from '../../services/view.service';
import {DataService} from '../../services/data.service';
import {InfoGroup} from '../../classes/InfoGroup';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  constructor(private contentService: ViewService,
              private dataService: DataService) { }

  getPageInfo(): InfoGroup[] {
    return this.contentService.aboutDataVisible ? this.dataService.infoGroups : this.dataService.projectGroups;
  }
}
