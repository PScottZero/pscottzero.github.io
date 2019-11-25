import { Injectable } from '@angular/core';
import {InfoBlock} from "../objects/InfoBlock";
import {InfoBlockGroup} from "../objects/InfoBlockGroup";

const PROJ_IMG_DIR = '../../assets/img/projects/'; // project image directory
const GIT_HUB = 'https://github.com/PScottZero/'; // git hub link
const PJS4 = 'https://pjs4.com/'; // website link

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() {}

  recentProjects = [
    new InfoBlock('Dot Matrix (Game Boy Emulator)', PROJ_IMG_DIR + 'gameboy.jpg', undefined, GIT_HUB + 'DotMatrix'),
    new InfoBlock('Graham Scan Visualizer', PROJ_IMG_DIR + 'convex.jpg', undefined, PJS4 + 'Graham-Scan'),
    new InfoBlock('SiliconEight (Chip-8 Emulator)', PROJ_IMG_DIR + 'silicon_javascript.jpg', undefined, PJS4 + 'SiliconEight-Javascript'),
    new InfoBlock('Tetromino', PROJ_IMG_DIR + 'tetromino.jpg', undefined, PJS4 + 'Tetromino'),
    new InfoBlock('Toxicity', PROJ_IMG_DIR + 'toxicity.jpg', undefined, GIT_HUB + 'Toxicity-HackPSU-Fall2018'),
  ];

  olderProjects = [
    new InfoBlock('Apogee Artist', PROJ_IMG_DIR + 'apogee.jpg', undefined, GIT_HUB + 'Apogee-Artist'),
    new InfoBlock('Bitwise Game Maker', PROJ_IMG_DIR + 'bitwise.jpg', undefined, GIT_HUB + 'Bitwise-Game-Maker'),
    new InfoBlock('Conway\'s Game of Life', PROJ_IMG_DIR + 'conway.jpg', undefined, GIT_HUB + 'Conways-Game-of-Life'),
    new InfoBlock('Easton Coach Driver Report', PROJ_IMG_DIR + 'easton.jpg', undefined, GIT_HUB + 'Easton-Coach-Driver-Report'),
    new InfoBlock('ExGraph', PROJ_IMG_DIR + 'exgraph.jpg', undefined, GIT_HUB + 'ExGraph'),
    new InfoBlock('The Hypothetical Computer', PROJ_IMG_DIR + 'hypo.jpg', undefined, GIT_HUB + 'The-Hypothetical-Computer'),
    new InfoBlock('Java Paint', PROJ_IMG_DIR + 'javapaint.jpg', undefined, GIT_HUB + 'JavaPaint'),
    new InfoBlock('Lucas Lehmer Test', PROJ_IMG_DIR + 'lucas.jpg', undefined, GIT_HUB + 'Lucas-Lehmer-Test-Kotlin'),
    new InfoBlock('METAR Decoder', PROJ_IMG_DIR + 'metar.jpg', undefined, GIT_HUB + 'METAR-Decoder'),
    new InfoBlock('Paul\'s Horrible Drawings', PROJ_IMG_DIR + 'phd.jpg', undefined, GIT_HUB + 'Pauls-Horrible-Drawings'),
    new InfoBlock('Python Punchcard', PROJ_IMG_DIR + 'punchcard.jpg', undefined, GIT_HUB + 'PythonPunchcard'),
    new InfoBlock('Recama\u0301n Sequence Visualizer', PROJ_IMG_DIR + 'recaman.jpg', undefined, GIT_HUB + 'Recaman-Sequence-Visualizer'),
    new InfoBlock('Silicon Eight (Kotlin)', PROJ_IMG_DIR + 'silicon.jpg', undefined, GIT_HUB + 'SiliconEight'),
    new InfoBlock('STP Ground', PROJ_IMG_DIR + 'stp.jpg', undefined, GIT_HUB + 'STP-Ground'),
    new InfoBlock('Terminal Enigma', PROJ_IMG_DIR + 'enigma.jpg', undefined, GIT_HUB + 'TerminalEnigma'),
    new InfoBlock('TetriK', PROJ_IMG_DIR + 'tetrik.jpg', undefined, GIT_HUB + 'TetriK'),
    new InfoBlock('Toxicity', PROJ_IMG_DIR + 'toxicity.jpg', undefined, GIT_HUB + 'Toxicity-HackPSU-Fall2018'),
  ];

  projectGroups = [
    new InfoBlockGroup('Recent Projects', this.recentProjects),
    new InfoBlockGroup('Older Projects', this.olderProjects),
  ];
}
