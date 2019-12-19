import { Injectable } from '@angular/core';
import {InfoBlock} from '../objects/InfoBlock';
import {InfoBlockGroup} from '../objects/InfoBlockGroup';

const PROJ_IMG_DIR = '../../assets/img/projects/';
const GIT_HUB = 'https://github.com/PScottZero/';
const PJS4 = 'https://pjs4.com/';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() {}

  recentProjects = [
    new InfoBlock('Dot Matrix (Game Boy Emulator)', PROJ_IMG_DIR + 'gameboy.jpg', 'March 2019 - Present', GIT_HUB + 'DotMatrix'),
    new InfoBlock('Graham Scan Visualizer', PROJ_IMG_DIR + 'convex.jpg', 'January - March 2019', PJS4 + 'Graham-Scan'),
    new InfoBlock('Paul\'s Horrible Drawings', PROJ_IMG_DIR + 'phd.jpg', 'January - Present', PJS4 + 'Pauls-Horrible-Drawings'),
    new InfoBlock('SiliconEight (Chip-8 Emulator)', PROJ_IMG_DIR + 'silicon_eight.png', 'January 2019 - Present', PJS4 + 'SiliconEight'),
    new InfoBlock('Tetromino', PROJ_IMG_DIR + 'tetromino.jpg', 'March 2019 - Present', PJS4 + 'Tetromino'),
    new InfoBlock('Toxicity', PROJ_IMG_DIR + 'toxicity.png', 'October 2019 - Present', PJS4 + 'Toxicity'),
  ];

  olderProjects = [
    new InfoBlock('Apogee Artist', PROJ_IMG_DIR + 'apogee.jpg', 'May 2018 - February 2019', GIT_HUB + 'Apogee-Artist'),
    new InfoBlock('Bitwise Game Maker', PROJ_IMG_DIR + 'bitwise.jpg', 'April - May 2018', GIT_HUB + 'Bitwise-Game-Maker'),
    new InfoBlock('Conway\'s Game of Life', PROJ_IMG_DIR + 'conway.jpg', 'February - May 2018', GIT_HUB + 'Conways-Game-of-Life'),
    new InfoBlock('Easton Coach Driver Report', PROJ_IMG_DIR + 'easton.jpg', 'June - August 2018', GIT_HUB + 'Easton-Coach-Driver-Report'),
    new InfoBlock('ExGraph', PROJ_IMG_DIR + 'exgraph.jpg', 'February - April 2017', GIT_HUB + 'ExGraph'),
    new InfoBlock('The Hypothetical Computer', PROJ_IMG_DIR + 'hypo.jpg', 'May 2017', GIT_HUB + 'The-Hypothetical-Computer'),
    new InfoBlock('Java Paint', PROJ_IMG_DIR + 'javapaint.jpg', 'May 2017', GIT_HUB + 'JavaPaint'),
    new InfoBlock('Lucas Lehmer Test', PROJ_IMG_DIR + 'lucas.jpg', 'March 2017', GIT_HUB + 'Lucas-Lehmer-Test-Kotlin'),
    new InfoBlock('Recama\u0301n Sequence Visualizer', PROJ_IMG_DIR + 'recaman.jpg', 'June 2018', GIT_HUB + 'Recaman-Sequence-Visualizer'),
    new InfoBlock('Silicon Eight (Kotlin)', PROJ_IMG_DIR + 'silicon_eight_kotlin.jpg', 'October - November 2018', GIT_HUB + 'SiliconEight-Kotlin'),
    new InfoBlock('STP Ground', PROJ_IMG_DIR + 'stp.jpg', 'Fall 2017', GIT_HUB + 'STP-Ground'),
    new InfoBlock('Terminal Enigma', PROJ_IMG_DIR + 'enigma.jpg', 'December 2017', GIT_HUB + 'TerminalEnigma'),
    new InfoBlock('TetriK', PROJ_IMG_DIR + 'tetrik.jpg', 'February 2019', GIT_HUB + 'TetriK'),
    new InfoBlock('Toxicity (HackPSU Fall 2018)', PROJ_IMG_DIR + 'toxicity_hackpsu.jpg', 'October 2018', GIT_HUB + 'Toxicity-HackPSU-Fall2018'),
  ];

  projectGroups = [
    new InfoBlockGroup('Recent Projects', this.recentProjects),
    new InfoBlockGroup('Older Projects', this.olderProjects),
  ];
}
