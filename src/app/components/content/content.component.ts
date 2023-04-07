import { Component } from '@angular/core';
import contentJson from '../../../assets/content.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  content: any;

  constructor() {
    this.content = contentJson;
  }
}
