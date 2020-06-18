import { Injectable } from '@angular/core';
import {Info} from '../objects/Info';
import {InfoGroup} from '../objects/InfoGroup';

const EDU_IMG_DIR = '../../assets/images/about/education/';
const EXP_IMG_DIR = '../../assets/images/about/experience/';
const CRS_IMG_DIR = '../../assets/images/about/courses/';
const CLUB_IMG_DIR = '../../assets/images/about/clubs/';
const HACK_IMG_DIR = '../../assets/images/about/hackathons/';
const HOB_IMG_DIR = '../../assets/images/about/hobbies/';
const PRG_IMG_DIR = '../../assets/images/about/languages/';
const PROJ_IMG_DIR = '../../assets/images/projects/';
const GIT_HUB = 'https://github.com/PScottZero/';
const PJS4 = 'https://pjs4.com/';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private education = [
    new Info('Penn State', EDU_IMG_DIR, 'psu.jpg', 'CS Major, Math Minor. 3.98/4.00'),
    new Info('Schreyer Honors College', EDU_IMG_DIR, 'shc.jpg', 'Schreyer Scholar'),
    new Info('Wissahickon High School', EDU_IMG_DIR, 'whs.jpg', 'Magna Cumme Laude'),
  ];

  private experience = [
    new Info('Lockheed Martin', EXP_IMG_DIR, 'orion.jpg', 'Software Engineer Intern, Summer 2019/2020'),
    new Info('Easton Coach Company', EXP_IMG_DIR, 'easton.jpg', 'Software Engineer Intern, Summer 2018'),
  ];

  private languages = [
    new Info('Angular', PRG_IMG_DIR, 'angular.svg', 'Proficient'),
    new Info('C', PRG_IMG_DIR, 'clang.svg', 'Proficient'),
    new Info('C++', PRG_IMG_DIR, 'cpp.svg', 'Proficient'),
    new Info('C#', PRG_IMG_DIR, 'csharp.svg', 'Familiar'),
    new Info('HTML', PRG_IMG_DIR, 'html.svg', 'Proficient'),
    new Info('Java', PRG_IMG_DIR, 'java.svg', 'Proficient' ),
    new Info('JavaScript', PRG_IMG_DIR, 'javascript.svg', 'Proficient'),
    new Info('Kotlin', PRG_IMG_DIR, 'kotlin.svg', 'Proficient'),
    new Info('MATLAB', PRG_IMG_DIR, 'matlab.svg', 'Familiar'),
    new Info('Python', PRG_IMG_DIR, 'python.svg', 'Proficient'),
    new Info('React Native', PRG_IMG_DIR, 'react.svg', 'Currently Learning'),
    new Info('Rust', PRG_IMG_DIR, 'rust.svg', 'Currently Learning'),
    new Info('SQL', PRG_IMG_DIR, 'sql.svg', 'Familiar'),
    new Info('TensorFlow', PRG_IMG_DIR, 'tensorflow.svg', 'Familiar'),
  ];

  private currentCourses = [
    new Info('Quantum Mechanics and Quantum Computation', CRS_IMG_DIR, 'quantum_computer.jpg', 'CS-191X (BerkeleyX)'),
  ];

  private pastCourses = [
    new Info('Computer Design', CRS_IMG_DIR, 'computer_design.png', 'CMPEN 331'),
    new Info('Computer Vision', CRS_IMG_DIR, 'computer_vision.jpg', 'CMPEN 454'),
    new Info('Object Oriented Programming', CRS_IMG_DIR, 'oop.jpg', 'CMPSC 221'),
    new Info('Systems Programming', PRG_IMG_DIR, 'clang.svg', 'CMPSC 311'),
    new Info('Database Management Systems', CRS_IMG_DIR, 'database.png', 'CMPSC 431W'),
    new Info('Machine Learning & AI', CRS_IMG_DIR, 'robot.jpg', 'CMPSC 448'),
    new Info('Programming Language Concepts', CRS_IMG_DIR, 'lambda.png', 'CMPSC 461'),
    new Info('Theory of Computation', CRS_IMG_DIR, 'turing_machine.jpg', 'CMPSC 464'),
    new Info('Data Structures & Algorithms', CRS_IMG_DIR, 'data_structures.png', 'CMPSC 465'),
    new Info('Operating Systems', CRS_IMG_DIR, 'os.png', 'CMPSC 473'),
    new Info('Technical Writing', CRS_IMG_DIR, 'writing.jpg', 'ENGL 202C'),
    new Info('Multi-variable Calculus', CRS_IMG_DIR, 'calculus.jpg', 'MATH 230'),
    new Info('Matrix Algebra', CRS_IMG_DIR, 'matrix.png', 'MATH 441'),
    new Info('Numerical Computations', CRS_IMG_DIR, 'trapezoid.png', 'MATH 451'),
    new Info('Probability Theory', CRS_IMG_DIR, 'probability.png', 'STAT 414'),
    new Info('Mathematical Statistics', CRS_IMG_DIR, 'stat.png', 'STAT 415'),
  ];

  private clubs = [
    new Info('HackPSU', CLUB_IMG_DIR, 'hackpsu.svg', 'Frontend Developer, Spring 2020 - Present'),
    new Info('Lunar Lion', CLUB_IMG_DIR, 'lunar.png', 'Avionics Lead, Fall 2018 - Present'),
    new Info('ACM', CLUB_IMG_DIR, 'acm.jpg', 'Competitive Programming, Fall 2018'),
  ];

  private hackathons = [
    new Info('CodePSU', HACK_IMG_DIR, 'codepsu.png', 'Spring 2019'),
    new Info('ICPC', HACK_IMG_DIR, 'icpc.png', 'Fall 2018'),
    new Info('HackPSU', CLUB_IMG_DIR, 'hackpsu.svg', 'Spring/Fall 2018'),
  ];

  private hobbies = [
    new Info('Guitar', HOB_IMG_DIR, 'lespaul.jpg'),
    new Info('Bass', HOB_IMG_DIR, 'bass.jpg'),
    new Info('Piano', HOB_IMG_DIR, 'piano.jpg'),
    new Info('Ukulele', HOB_IMG_DIR, 'ukulele.jpg'),
    new Info('Violin', HOB_IMG_DIR, 'violin.jpg'),
    new Info('Records', HOB_IMG_DIR, 'remaininlight.jpg'),
    new Info('Retro Tech', HOB_IMG_DIR, 'commodore_pet.jpg'),
    new Info('Electric Cars', HOB_IMG_DIR, 'tesla.jpg'),
    new Info('Aviation', HOB_IMG_DIR, 'a350.jpg'),
    new Info('Trains', HOB_IMG_DIR, 'acela.jpg'),
    new Info('Roller Coasters', HOB_IMG_DIR, 'skyrush.jpg'),
    new Info('Coin Collecting', HOB_IMG_DIR, 'coins.jpg'),
  ];

  infoGroups = [
    new InfoGroup('Education', this.education),
    new InfoGroup('Work Experience', this.experience),
    new InfoGroup('Programming Languages', this.languages),
    new InfoGroup('Current Courses', this.currentCourses),
    new InfoGroup('Past Courses', this.pastCourses),
    new InfoGroup('Clubs', this.clubs),
    new InfoGroup('Hackathons', this.hackathons),
    new InfoGroup('Hobbies & Interests', this.hobbies),
  ];

  recentProjects = [
    new Info('Altair 8800 Emulator', PROJ_IMG_DIR, 'altair.jpg', 'February 2020 - Present', GIT_HUB, 'Altair8800'),
    new Info('Dot Matrix (Game Boy Emulator)', PROJ_IMG_DIR, 'dotmatrix.jpg', 'March 2019 - Present', GIT_HUB, 'DotMatrix'),
    new Info('SiliconEight (Chip-8 Emulator)', PROJ_IMG_DIR, 'silicon_eight.jpg', 'January 2019 - Present', PJS4, 'SiliconEight'),
    new Info('Toxicity', PROJ_IMG_DIR, 'toxicity.png', 'October 2019 - Present', PJS4, 'Toxicity'),
  ];

  olderProjects = [
    new Info('Apogee Artist', PROJ_IMG_DIR, 'apogee.jpg', 'May 2018 - February 2019', GIT_HUB, 'Apogee-Artist'),
    new Info('Bitwise Game Maker', PROJ_IMG_DIR, 'bitwise.jpg', 'April - May 2018', GIT_HUB, 'Bitwise-Game-Maker'),
    new Info('Conway\'s Game of Life', PROJ_IMG_DIR, 'conway.jpg', 'February - May 2018', GIT_HUB, 'Conways-Game-of-Life'),
    new Info('Easton Coach Driver Report', PROJ_IMG_DIR, 'easton.jpg', 'June - August 2018', GIT_HUB, 'Easton-Coach-Driver-Report'),
    new Info('Graham Scan Visualizer', PROJ_IMG_DIR, 'convex.jpg', 'January - March 2019', PJS4, 'Graham-Scan'),
    new Info('Lucas Lehmer Test', PROJ_IMG_DIR, 'lucas.jpg', 'March 2017', GIT_HUB, 'Lucas-Lehmer-Test-Kotlin'),
    new Info('Paul\'s Horrible Drawings', PROJ_IMG_DIR, 'phd.jpg', 'January - Present', PJS4, 'Pauls-Horrible-Drawings'),
    new Info('Recama\u0301n Sequence Visualizer', PROJ_IMG_DIR, 'recaman.jpg', 'June 2018', GIT_HUB, 'Recaman-Sequence-Visualizer'),
    new Info('Terminal Enigma', PROJ_IMG_DIR, 'enigma.jpg', 'December 2017', GIT_HUB, 'TerminalEnigma'),
    new Info('Tetromino', PROJ_IMG_DIR, 'tetromino.jpg', 'March 2019 - Present', PJS4, 'Tetromino'),
  ];

  projectGroups = [
    new InfoGroup('Recent Projects', this.recentProjects),
    new InfoGroup('Older Projects', this.olderProjects),
  ];
}
