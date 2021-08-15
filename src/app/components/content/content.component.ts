import { Component } from '@angular/core';
import pageDataJSON from '../../../assets/data.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  pageData = pageDataJSON;

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
