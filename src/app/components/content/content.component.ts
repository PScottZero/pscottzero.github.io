import {Component} from '@angular/core';
import {DataService} from '../../services/data.service';
import {InfoGroup} from '../../classes/InfoGroup';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  constructor(private dataService: DataService) { }

  getPageInfo(): InfoGroup[] {
    return this.dataService.infoGroups;
  }
}
