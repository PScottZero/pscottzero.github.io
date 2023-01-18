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

  getLargeFlex(columnCount: number): number {
    if (columnCount !== undefined) {
      return 100 / columnCount;
    }
    return 100 / 3;
  }

  getSmallFlex(columnCount: number): number {
    if (columnCount !== undefined) {
      return this.getLargeFlex(columnCount - 1);
    }
    return 100 / 2;
  }
}
