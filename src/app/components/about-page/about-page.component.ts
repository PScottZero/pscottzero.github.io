import {Component} from '@angular/core';
import {AboutService} from '../../services/about/about.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

  constructor(private aboutService: AboutService) {}

  /**
   * returns info group list from about pageState service
   */
  getInfoGroups() {
    return this.aboutService.infoGroups;
  }
}
