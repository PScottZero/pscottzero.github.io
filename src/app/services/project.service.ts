import { Injectable } from '@angular/core';

const PROJ_IMG_DIR = '../../assets/img/projects/';
const GIT_HUB = 'https://github.com/PScottZero/';
const PJS4 = 'https://pjs4.com/';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  recentProjects = [
    new Project('Graham Scan Visualizer', 'convex.jpg', PJS4 + 'Graham-Scan'),
    new Project('Paul\'s Horrible Drawings' , 'phd.jpg', PJS4 + 'Pauls-Horrible-Drawings'),
    new Project('SiliconEight' , 'silicon_javascript.jpg', PJS4 + 'SiliconEight-Javascript'),
    new Project('Tetromino' , 'tetromino.jpg', PJS4 + 'Tetromino')
  ];

  olderProjects = [
    new Project('Apogee Artist', 'apogee.jpg', GIT_HUB + 'Apogee-Artist'),
    new Project('Bitwise Game Maker', 'bitwise.jpg', GIT_HUB + 'Bitwise-Game-Maker'),
    new Project('Conway\'s Game of Life', 'conway.jpg', GIT_HUB + 'Conways-Game-of-Life'),
    new Project('Easton Coach Driver Report', 'easton.jpg', GIT_HUB + 'Easton-Coach-Driver-Report'),
    new Project('ExGraph', 'exgraph.jpg', GIT_HUB + 'ExGraph'),
    new Project('The Hypothetical Computer', 'hypo.jpg', GIT_HUB + 'The-Hypothetical-Computer'),
    new Project('Java Paint', 'javapaint.jpg', GIT_HUB + 'JavaPaint'),
    new Project('Lucas Lehmer Test Kotlin', 'lucas.jpg', GIT_HUB + 'Lucas-Lehmer-Test-Kotlin'),
    new Project('METAR Decoder', 'metar.jpg', GIT_HUB + 'METAR-Decoder'),
    new Project('Python Punchcard', 'punchcard.jpg', GIT_HUB + 'PythonPunchcard'),
    new Project('Recama\u0301n Sequence Visualizer', 'recaman.jpg', GIT_HUB + 'Recaman-Sequence-Visualizer'),
    new Project('Silicon Eight', 'silicon.jpg', GIT_HUB + 'SiliconEight'),
    new Project('STP Ground', 'stp.jpg', GIT_HUB + 'STP-Ground'),
    new Project('Terminal Enigma', 'enigma.jpg', GIT_HUB + 'TerminalEnigma'),
    new Project('TetriK', 'tetrik.jpg', GIT_HUB + 'TetriK'),
    new Project('Toxicity', 'toxicity.jpg', GIT_HUB + 'Toxicity-HackPSU-Fall2018'),
  ];
}

export class Project {
  title: string;
  style: object;
  url: string;

  constructor(title: string, img: string, url: string) {
    this.title = title;
    this.style = {
      background : 'url(' + PROJ_IMG_DIR + img + ') center top',
      backgroundSize: 'cover'
    };
    this.url = url;
  }
}
