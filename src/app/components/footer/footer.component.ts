import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  about = 'Created by Paul Scott using Angular';
  contact = 'Call at (215) 880-9592 or email at 8pscott@gmail.com';
  lastUpdated = 'Last updated 5 January 2020';
}
