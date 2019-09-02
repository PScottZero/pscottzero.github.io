import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() title: string;
  @Input() style: any;
  @Input() url: string;
}
