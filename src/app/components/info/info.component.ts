import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() link: string;

  open(link: string) {
    if (link) {
      window.open(link, '_blank');
    }
  }
}
