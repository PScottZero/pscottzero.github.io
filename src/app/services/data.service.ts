import { Injectable } from '@angular/core';
import {Info} from '../classes/Info';
import {InfoGroup} from '../classes/InfoGroup';

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

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private education = [
    new Info('Penn State', EDU_IMG_DIR, 'psu.jpg', 'B.S. Computer Science, Minor in Math 3.98/4.00'),
    new Info('Schreyer Honors College', EDU_IMG_DIR, 'shc.jpg', 'Schreyer Scholar'),
    new Info('Wissahickon High School', EDU_IMG_DIR, 'whs.jpg', 'Magna Cumme Laude'),
  ];

  private experience = [
    new Info('Undergraduate Research', EXP_IMG_DIR, 'research.jpg',
      'With Professor Danfeng Zhang and Peixuan Li, Fall 2020'),
    new Info('Lockheed Martin', EXP_IMG_DIR, 'orion.jpg', 'Software Engineer Intern, Summer 2019/2020'),
    new Info('Easton Coach Company', EXP_IMG_DIR, 'easton.jpg', 'Software Engineer Intern, Summer 2018'),
  ];

  projects = [
    new Info('Charcoal', PROJ_IMG_DIR, 'charcoal.jpg', 'April 2020', GIT_HUB, 'Charcoal'),
    new Info('The Coffee App', PROJ_IMG_DIR, 'the_coffee_app.jpg', 'July 2020 - Present', GIT_HUB, 'The-Coffee-App'),
    new Info('MNIST Playground', PROJ_IMG_DIR, 'mnist.jpg', 'September 2020 - Present', PJS4, 'MNISTPlayground'),
    new Info('Dot Matrix', PROJ_IMG_DIR, 'dotmatrix.jpg', 'February 2020 - May 2020', GIT_HUB, 'DotMatrix'),
    new Info('Qubit Playground', PROJ_IMG_DIR, 'qubit_playground.jpg', 'July 2020 - Present', PJS4, 'QubitPlayground'),
    new Info('Toxicity', PROJ_IMG_DIR, 'toxicity.jpg', 'October 2019 - December 2019', PJS4, 'Toxicity'),
  ];

  private languages = [
    new Info('Angular', PRG_IMG_DIR, 'angular.svg', 'Proficient'),
    new Info('C', PRG_IMG_DIR, 'clang.svg', 'Proficient'),
    new Info('C++', PRG_IMG_DIR, 'cpp.svg', 'Proficient'),
    new Info('C#', PRG_IMG_DIR, 'csharp.svg', 'Familiar'),
    new Info('Flutter', PRG_IMG_DIR, 'flutter.svg', 'Familiar'),
    new Info('HTML', PRG_IMG_DIR, 'html.svg', 'Proficient'),
    new Info('Java', PRG_IMG_DIR, 'java.svg', 'Proficient' ),
    new Info('JavaScript', PRG_IMG_DIR, 'javascript.svg', 'Proficient'),
    new Info('Kotlin', PRG_IMG_DIR, 'kotlin.svg', 'Proficient'),
    new Info('MATLAB', PRG_IMG_DIR, 'matlab.svg', 'Familiar'),
    new Info('PHP', PRG_IMG_DIR, 'php.svg', 'Learning'),
    new Info('Python', PRG_IMG_DIR, 'python.svg', 'Proficient'),
    new Info('Rust', PRG_IMG_DIR, 'rust.svg', 'Learning'),
    new Info('Swift', PRG_IMG_DIR, 'swift.png', 'Learning'),
    new Info('SQL', PRG_IMG_DIR, 'sql.svg', 'Familiar'),
    new Info('TensorFlow', PRG_IMG_DIR, 'tensorflow.svg', 'Familiar'),
    new Info('TypeScript', PRG_IMG_DIR, 'typescript.svg', 'Proficient')
  ];

  private courses = [
    new Info('Applications Programming', PRG_IMG_DIR, 'swift.png', 'CMPSC 475, Fall 2020'),
    new Info('Computer Design', CRS_IMG_DIR, 'computer_design.png', 'CMPEN 331, Fall 2019'),
    new Info('Computer Vision', CRS_IMG_DIR, 'computer_vision.jpg', 'CMPEN 454, Spring 2020'),
    new Info('Data Structures & Algorithms', CRS_IMG_DIR, 'data_structures.png', 'CMPSC 465, Spring 2019'),
    new Info('Database Management Systems', CRS_IMG_DIR, 'database.png', 'CMPSC 431W, Spring 2020'),
    new Info('Machine Learning & AI', CRS_IMG_DIR, 'robot.jpg', 'CMPSC 448, Spring 2020'),
    new Info('Mathematical Statistics', CRS_IMG_DIR, 'stat.png', 'STAT 415, Fall 2019'),
    new Info('Matrix Algebra', CRS_IMG_DIR, 'matrix.png', 'MATH 441, Fall 2019'),
    new Info('Multi-variable Calculus', CRS_IMG_DIR, 'calculus.jpg', 'MATH 230, Fall 2017'),
    new Info('Numerical Computations', CRS_IMG_DIR, 'trapezoid.png', 'MATH 451, Spring 2020'),
    new Info('Object Oriented Programming', CRS_IMG_DIR, 'oop.jpg', 'CMPSC 221, Spring 2018'),
    new Info('Operating Systems', CRS_IMG_DIR, 'os.png', 'CMPSC 473, Fall 2019'),
    new Info('Probability Theory', CRS_IMG_DIR, 'probability.png', 'STAT 414, Spring 2019'),
    new Info('Programming Language Concepts', CRS_IMG_DIR, 'lambda.png', 'CMPSC 461, Fall 2019'),
    new Info('Quantum Mechanics and Quantum Computation', CRS_IMG_DIR, 'quantum_computer.jpg',
      'CS-191x (BerkeleyX), Summer 2020',
      'https://courses.edx.org/', 'certificates/a7a842fb46834ea4b9459b44583f3e23'),
    new Info('Systems Programming', PRG_IMG_DIR, 'clang.svg', 'CMPSC 311, Fall 2018'),
    new Info('Technical Writing', CRS_IMG_DIR, 'writing.jpg', 'ENGL 202C, Spring 2019'),
    new Info('Theory of Computation', CRS_IMG_DIR, 'turing_machine.jpg', 'CMPSC 464, Spring 2020'),
  ];

  private clubs = [
    new Info('HackPSU', CLUB_IMG_DIR, 'hackpsu.png', 'Frontend Developer, Spring 2020 - Present'),
    new Info('Lunar Lion', CLUB_IMG_DIR, 'lunar.png', 'Avionics Lead, Fall 2018 - Present'),
    new Info('ACM', CLUB_IMG_DIR, 'acm.jpg', 'Competitive Programming, Fall 2018'),
  ];

  private hackathons = [
    new Info('CodePSU', HACK_IMG_DIR, 'codepsu.png', 'Spring 2019'),
    new Info('HackPSU', CLUB_IMG_DIR, 'hackpsu.png', 'Spring/Fall 2018'),
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
    new Info('Retro Tech', HOB_IMG_DIR, 'commodore_pet.jpg'),
    new Info('Roller Coasters', HOB_IMG_DIR, 'skyrush.jpg'),
    new Info('Space Flight', HOB_IMG_DIR, 'falcon.jpg'),
    new Info('Trains', HOB_IMG_DIR, 'acela.jpg'),
    new Info('Ukulele', HOB_IMG_DIR, 'ukulele.jpg'),
  ];

  infoGroups = [
    new InfoGroup('Education', this.education),
    new InfoGroup('Experience', this.experience),
    new InfoGroup('Projects', this.projects),
    new InfoGroup('Programming Languages', this.languages),
    new InfoGroup('Courses', this.courses),
    new InfoGroup('Clubs', this.clubs),
    new InfoGroup('Hackathons', this.hackathons),
    new InfoGroup('Hobbies & Interests', this.hobbies),
  ];
}