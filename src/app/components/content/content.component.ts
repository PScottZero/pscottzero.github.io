import { Component } from '@angular/core';
import { Info } from './Info';
import { InfoGroup } from './InfoGroup';

const EDU_IMG_DIR = '../../assets/images/education/';
const EXP_IMG_DIR = '../../assets/images/experience/';
const CRS_IMG_DIR = '../../assets/images/courses/';
const CLUB_IMG_DIR = '../../assets/images/clubs/';
const HACK_IMG_DIR = '../../assets/images/hackathons/';
const HOB_IMG_DIR = '../../assets/images/hobbies/';
const PRG_IMG_DIR = '../../assets/images/languages/';
const PROJ_IMG_DIR = '../../assets/images/projects/';
const GIT_HUB = 'https://github.com/PScottZero/';
const PJS4 = 'https://pjs4.com/';
const YOUTUBE = 'https://www.youtube.com/embed/';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  private education = [
    new Info(
      'University of Pennsylvania',
      EDU_IMG_DIR,
      'upenn.jpg',
      'MSE Computer and Information Science <br> Starting Fall 2021'
    ),
    new Info(
      'Penn State',
      EDU_IMG_DIR,
      'psu.jpg',
      'BS Computer Science, Minor in Math <br> GPA 3.98/4.00, Summa Cumme Laude <br> Schreyer Honors Scholar <br> Fall 2017 - Spring 2021'
    ),
    new Info(
      'Wissahickon High School',
      EDU_IMG_DIR,
      'whs.jpg',
      'Magna Cumme Laude <br> Fall 2013 - Spring 2017'
    ),
  ];

  private experience = [
    new Info(
      'ShopRunner',
      EXP_IMG_DIR,
      'shoprunner.jpg',
      'Software Engineer Intern, MBX Team <br> Summer 2021'
    ),
    new Info(
      'Undergraduate Research',
      EXP_IMG_DIR,
      'research.png',
      '<i>Automated Analysis of Information Flow Enforcement in PHP Program</i> <br> With Professor Danfeng Zhang and Peixuan Li <br> Fall 2020 - Spring 2021',
      '',
      'https://drive.google.com/file/d/1LutOnj9kyM6MvTPjfy1Qtdzqdu-7NE4-/view?usp=sharing'
    ),
    new Info(
      'Lockheed Martin',
      EXP_IMG_DIR,
      'orion.jpg',
      'Software Engineer Intern (Space) <br> Summer 2019/2020'
    ),
  ];

  private projects = [
    new Info(
      'PDP-1 Emulator',
      PROJ_IMG_DIR,
      'pdp1.jpg',
      'February - March 2021',
      PJS4,
      'pdp1'
    ),
    new Info(
      'En Passant',
      PROJ_IMG_DIR,
      'en_passant.jpg',
      'November 2020 - Present',
      GIT_HUB,
      'EnPassant'
    ),
    new Info(
      'MNIST Playground',
      PROJ_IMG_DIR,
      'mnist.jpg',
      'September - October 2020',
      PJS4,
      'MNISTPlayground'
    ),
    new Info(
      'Gossamer',
      PROJ_IMG_DIR,
      'gossamer.jpg',
      'September 2020',
      GIT_HUB,
      'Gossamer'
    ),
    new Info(
      'Qubit Playground',
      PROJ_IMG_DIR,
      'qubit_playground.jpg',
      'July - August 2020',
      PJS4,
      'QubitPlayground'
    ),
    new Info(
      'Charcoal',
      PROJ_IMG_DIR,
      'charcoal.jpg',
      'April 2020',
      GIT_HUB,
      'Charcoal'
    ),
    new Info(
      'Dot Matrix',
      PROJ_IMG_DIR,
      'dotmatrix.jpg',
      'February - May 2020',
      GIT_HUB,
      'DotMatrix'
    ),
    new Info(
      'Toxicity',
      PROJ_IMG_DIR,
      'toxicity.jpg',
      'October - December 2019',
      PJS4,
      'Toxicity'
    ),
  ];

  private videos = [
    new Info(
      'Quantum Computing Workshop (HackPSU Fall 2020)',
      YOUTUBE,
      '64P6tOwtl-0'
    ),
    new Info('Angular Workshop (HackPSU Fall 2020)', YOUTUBE, '2tUOiTtocoA'),
  ];

  private languages = [
    new Info('Angular', PRG_IMG_DIR, 'angular.svg', 'Proficient'),
    new Info('C', PRG_IMG_DIR, 'clang.svg', 'Proficient'),
    new Info('C++', PRG_IMG_DIR, 'cpp.svg', 'Proficient'),
    new Info('C#', PRG_IMG_DIR, 'csharp.svg', 'Familiar'),
    new Info('Dart', PRG_IMG_DIR, 'dart.svg', 'Proficient'),
    new Info('Flutter', PRG_IMG_DIR, 'flutter.svg', 'Proficient'),
    new Info('HTML', PRG_IMG_DIR, 'html.svg', 'Proficient'),
    new Info('Java', PRG_IMG_DIR, 'java.svg', 'Proficient'),
    new Info('JavaScript', PRG_IMG_DIR, 'javascript.svg', 'Proficient'),
    new Info('Kotlin', PRG_IMG_DIR, 'kotlin.svg', 'Proficient'),
    new Info('MATLAB', PRG_IMG_DIR, 'matlab.svg', 'Familiar'),
    new Info('PHP', PRG_IMG_DIR, 'php.svg', 'Familiar'),
    new Info('Python', PRG_IMG_DIR, 'python.svg', 'Proficient'),
    new Info('Rust', PRG_IMG_DIR, 'rust.svg', 'Familiar'),
    new Info('Swift', PRG_IMG_DIR, 'swift.png', 'Proficient'),
    new Info('SQL', PRG_IMG_DIR, 'sql.svg', 'Familiar'),
    new Info('TensorFlow', PRG_IMG_DIR, 'tensorflow.svg', 'Familiar'),
    new Info('TypeScript', PRG_IMG_DIR, 'typescript.svg', 'Proficient'),
  ];

  private courses = [
    new Info(
      'Applications Programming',
      PRG_IMG_DIR,
      'swift.png',
      'CMPSC 475, Fall 2020'
    ),
    new Info(
      'Computer Design',
      CRS_IMG_DIR,
      'computer_design.png',
      'CMPEN 331, Fall 2019'
    ),
    new Info(
      'Computer Vision',
      CRS_IMG_DIR,
      'computer_vision.jpg',
      'CMPEN 454, Spring 2020'
    ),
    new Info(
      'Data Structures & Algorithms',
      CRS_IMG_DIR,
      'data_structures.png',
      'CMPSC 465, Spring 2019'
    ),
    new Info(
      'Database Management Systems',
      CRS_IMG_DIR,
      'database.png',
      'CMPSC 431W, Spring 2020'
    ),
    new Info(
      'Machine Learning & AI',
      CRS_IMG_DIR,
      'robot.jpg',
      'CMPSC 448, Spring 2020'
    ),
    new Info(
      'Mathematical Logic',
      CRS_IMG_DIR,
      'lnt.svg',
      'MATH 457, Spring 2021'
    ),
    new Info(
      'Mathematical Statistics',
      CRS_IMG_DIR,
      'stat.png',
      'STAT 415, Fall 2019'
    ),
    new Info(
      'Matrix Algebra',
      CRS_IMG_DIR,
      'matrix.png',
      'MATH 441, Fall 2019'
    ),
    new Info(
      'Multi-variable Calculus',
      CRS_IMG_DIR,
      'calculus.jpg',
      'MATH 230, Fall 2017'
    ),
    new Info(
      'Numerical Computations',
      CRS_IMG_DIR,
      'trapezoid.png',
      'MATH 451, Spring 2020'
    ),
    new Info(
      'Object Oriented Programming',
      CRS_IMG_DIR,
      'oop.jpg',
      'CMPSC 221, Spring 2018'
    ),
    new Info(
      'Operating Systems',
      CRS_IMG_DIR,
      'os.png',
      'CMPSC 473, Fall 2019'
    ),
    new Info(
      'Probability Theory',
      CRS_IMG_DIR,
      'probability.png',
      'STAT 414, Spring 2019'
    ),
    new Info(
      'Programming Language Concepts',
      CRS_IMG_DIR,
      'lambda.png',
      'CMPSC 461, Fall 2019'
    ),
    new Info(
      'Quantum Mechanics and Quantum Computation',
      CRS_IMG_DIR,
      'quantum_computer.jpg',
      'CS-191x (BerkeleyX), Summer 2020',
      'https://courses.edx.org/',
      'certificates/a7a842fb46834ea4b9459b44583f3e23'
    ),
    new Info(
      'Systems Programming',
      PRG_IMG_DIR,
      'clang.svg',
      'CMPSC 311, Fall 2018'
    ),
    new Info(
      'Technical Writing',
      CRS_IMG_DIR,
      'writing.jpg',
      'ENGL 202C, Spring 2019'
    ),
    new Info(
      'Theory of Computation',
      CRS_IMG_DIR,
      'turing_machine.jpg',
      'CMPSC 464, Spring 2020'
    ),
  ];

  private clubs = [
    new Info(
      'HackPSU',
      CLUB_IMG_DIR,
      'hackpsu.png',
      'Tech Team - Frontend, Spring 2020 - Spring 2021'
    ),
    new Info(
      'Lunar Lion',
      CLUB_IMG_DIR,
      'lunar.png',
      'Avionics Lead, Fall 2018 - Spring 2021'
    ),
    new Info(
      'ACM',
      CLUB_IMG_DIR,
      'acm.jpg',
      'Competitive Programming, Fall 2018'
    ),
  ];

  private hackathons = [
    new Info('CodePSU', HACK_IMG_DIR, 'codepsu.png', 'Spring 2019'),
    new Info('HackPSU', CLUB_IMG_DIR, 'hackpsu.png', 'Spring and Fall 2018'),
    new Info('ICPC', HACK_IMG_DIR, 'icpc.png', 'Fall 2018'),
  ];

  private hobbies = [
    new Info('Aviation', HOB_IMG_DIR, 'a350.jpg'),
    new Info('Bass', HOB_IMG_DIR, 'bass.jpg'),
    new Info('Coin Collecting', HOB_IMG_DIR, 'coins.jpg'),
    new Info('Electric Cars', HOB_IMG_DIR, 'tesla.jpg'),
    new Info('Guitar', HOB_IMG_DIR, 'lespaul.jpg'),
    new Info('Piano', HOB_IMG_DIR, 'piano.jpg'),
    new Info('Records', HOB_IMG_DIR, 'remaininlight.jpg'),
    new Info('Retro Tech', HOB_IMG_DIR, 'pdp1.jpg'),
    new Info('Roller Coasters', HOB_IMG_DIR, 'skyrush.jpg'),
    new Info('Space Flight', HOB_IMG_DIR, 'starship.jpg'),
    new Info('Trains', HOB_IMG_DIR, 'shinkansen.jpg'),
    new Info('Ukulele', HOB_IMG_DIR, 'ukulele.jpg'),
  ];

  pageData = [
    new InfoGroup('Education', this.education),
    new InfoGroup('Experience', this.experience),
    new InfoGroup('Projects', this.projects),
    new InfoGroup('Videos', this.videos),
    new InfoGroup('Programming Languages', this.languages),
    new InfoGroup('Courses', this.courses),
    new InfoGroup('Clubs', this.clubs),
    new InfoGroup('Hackathons', this.hackathons),
    new InfoGroup('Hobbies & Other Interests', this.hobbies),
  ];
}
