import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../services/content.service";
import {InfoBlock} from "../../objects/InfoBlock";
import {AboutService} from "../../services/about.service";
import {ProjectService} from "../../services/project.service";
import {InfoBlockGroup} from "../../objects/InfoBlockGroup";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private pageStateService: ContentService,
              private aboutService: AboutService,
              private projectService: ProjectService) { }

  ngOnInit() {
  }

  getInfoBlockGroups(): InfoBlockGroup[] {
    if (this.pageStateService.aboutDataVisible) {
      return this.aboutService.infoGroups;
    } else {
      return this.projectService.projectGroups;
    }
  }
}
