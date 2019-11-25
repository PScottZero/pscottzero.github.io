import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerText: string;
  lastUpdated: string;

  ngOnInit() {
    this.footerText = 'Created by Paul Scott using Angular';
    this.lastUpdated = 'Last Updated 24 November 2019';
  }
}
