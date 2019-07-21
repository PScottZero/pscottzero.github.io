import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerText: string;
  lastUpdated: string;

  constructor() { }

  ngOnInit() {
    this.footerText = 'Created by Paul Scott using Angular';
    this.lastUpdated = 'Last Updated 20 July 2019';
  }

}
