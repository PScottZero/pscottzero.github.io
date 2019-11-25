import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent {
  @Input() title;
  @Input() description;
}
