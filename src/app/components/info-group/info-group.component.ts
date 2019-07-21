import {Component, Input} from '@angular/core';
import {Info} from '../../services/about.service';

@Component({
  selector: 'app-info-group',
  templateUrl: './info-group.component.html',
  styleUrls: ['./info-group.component.scss']
})
export class InfoGroupComponent {
  @Input() title: string;
  @Input() infoArray: Array<Info>;
  @Input() flex: number;
}
