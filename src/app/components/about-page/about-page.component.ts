import { Component, OnInit } from '@angular/core';
import {AboutService, Info} from '../../services/about.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  educationHeader: string;
  experienceHeader: string;
  programmingHeader: string;
  courseworkHeader: string;
  clubHeader: string;
  hackHeader: string;
  hobbyHeader: string;

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.educationHeader = 'Education';
    this.experienceHeader = 'Experience';
    this.programmingHeader = 'Programming Languages';
    this.courseworkHeader = 'Coursework';
    this.clubHeader = 'Clubs';
    this.hackHeader = 'Hackathons';
    this.hobbyHeader = 'Hobbies & Interests';
  }

  getInfoGroups() {
    return this.aboutService.infoGroups;
  }
}
