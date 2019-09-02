/**
 * service that holds information for prj_img page
 */
import { Injectable } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

const PROJ_IMG_DIR = '../../assets/img/prj_img/'; // project image directory
const GIT_HUB = 'https://github.com/PScottZero/'; // git hub link
const PJS4 = 'https://pjs4.com/'; // website link

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private sanitizer: DomSanitizer) {}

  recentProjects = [
    new Project('GBEmu', 'gameboy.jpg', GIT_HUB + 'GBEmu', this.sanitizer),
    new Project('Graham Scan Visualizer', 'convex.jpg', PJS4 + 'Graham-Scan', this.sanitizer),
    new Project('SiliconEight' , 'silicon_javascript.jpg', PJS4 + 'SiliconEight-Javascript', this.sanitizer),
    new Project('Tetromino' , 'tetromino.jpg', PJS4 + 'Tetromino', this.sanitizer)
  ];

  olderProjects = [
    new Project('Apogee Artist', 'apogee.jpg', GIT_HUB + 'Apogee-Artist', this.sanitizer),
    new Project('Bitwise Game Maker', 'bitwise.jpg', GIT_HUB + 'Bitwise-Game-Maker', this.sanitizer),
    new Project('Conway\'s Game of Life', 'conway.jpg', GIT_HUB + 'Conways-Game-of-Life', this.sanitizer),
    new Project('Easton Coach Driver Report', 'easton.jpg', GIT_HUB + 'Easton-Coach-Driver-Report', this.sanitizer),
    new Project('ExGraph', 'exgraph.jpg', GIT_HUB + 'ExGraph', this.sanitizer),
    new Project('The Hypothetical Computer', 'hypo.jpg', GIT_HUB + 'The-Hypothetical-Computer', this.sanitizer),
    new Project('Java Paint', 'javapaint.jpg', GIT_HUB + 'JavaPaint', this.sanitizer),
    new Project('Lucas Lehmer Test Kotlin', 'lucas.jpg', GIT_HUB + 'Lucas-Lehmer-Test-Kotlin', this.sanitizer),
    new Project('METAR Decoder', 'metar.jpg', GIT_HUB + 'METAR-Decoder', this.sanitizer),
    new Project('Paul\'s Horrible Drawings' , 'phd.jpg', PJS4 + 'Pauls-Horrible-Drawings', this.sanitizer),
    new Project('Python Punchcard', 'punchcard.jpg', GIT_HUB + 'PythonPunchcard', this.sanitizer),
    new Project('Recama\u0301n Sequence Visualizer', 'recaman.jpg', GIT_HUB + 'Recaman-Sequence-Visualizer', this.sanitizer),
    new Project('Silicon Eight', 'silicon.jpg', GIT_HUB + 'SiliconEight', this.sanitizer),
    new Project('STP Ground', 'stp.jpg', GIT_HUB + 'STP-Ground', this.sanitizer),
    new Project('Terminal Enigma', 'enigma.jpg', GIT_HUB + 'TerminalEnigma', this.sanitizer),
    new Project('TetriK', 'tetrik.jpg', GIT_HUB + 'TetriK', this.sanitizer),
    new Project('Toxicity', 'toxicity.jpg', GIT_HUB + 'Toxicity-HackPSU-Fall2018', this.sanitizer),
  ];
}

export class Project {
  title: string;
  style: object;
  url: string;

  constructor(title: string, img: string, url: string, private sanitizer: DomSanitizer) {
    this.title = title;
    this.style = {
      background: 'url(' + PROJ_IMG_DIR + img + ') center top',
      backgroundSize: 'cover'
    };
    this.url = url;
  }
}
