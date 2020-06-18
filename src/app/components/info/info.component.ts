import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() backgroundImage: string;
  @Input() projectLink: string;

  open(link: string) {
    window.open(link, '_blank');
  }
}
