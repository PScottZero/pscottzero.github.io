import { Injectable } from '@angular/core';
import {InfoBlock} from '../objects/InfoBlock';
import {InfoBlockGroup} from '../objects/InfoBlockGroup';

const EDU_IMG_DIR = '../../assets/images/about/education/';
const EXP_IMG_DIR = '../../assets/images/about/experience/';
const CRS_IMG_DIR = '../../assets/images/about/courses/';
const CLUB_IMG_DIR = '../../assets/images/about/clubs/';
const HACK_IMG_DIR = '../../assets/images/about/hackathons/';
const HOB_IMG_DIR = '../../assets/images/about/hobbies/';
const PRG_IMG_DIR = '../../assets/images/about/languages/';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private education = [
    new InfoBlock('Penn State', EDU_IMG_DIR + 'psu.jpg', 'CS Major, Math Minor. 3.98/4.00'),
    new InfoBlock('Schreyer Honors College', EDU_IMG_DIR + 'shc.jpg', 'Schreyer Scholar'),
    new InfoBlock('Wissahickon High School', EDU_IMG_DIR + 'whs.jpg', 'Magna Cum Laude'),
  ];

  private experience = [
    new InfoBlock('Lockheed Martin', EXP_IMG_DIR + 'orion.jpg', 'Software Engineer Intern, Summer 2019/2020'),
    new InfoBlock('Easton Coach Company', EXP_IMG_DIR + 'easton.jpg', 'Software Engineer Intern, Summer 2018'),
  ];

  private languages = [
    new InfoBlock('Angular', PRG_IMG_DIR + 'angular.svg', 'Proficient'),
    new InfoBlock('C', PRG_IMG_DIR + 'clang.svg', 'Proficient'),
    new InfoBlock('C++', PRG_IMG_DIR + 'cpp.svg', 'Proficient'),
    new InfoBlock('C#', PRG_IMG_DIR + 'csharp.svg', 'Familiar'),
    new InfoBlock('HTML', PRG_IMG_DIR + 'html.svg', 'Proficient'),
    new InfoBlock('Java', PRG_IMG_DIR + 'java.svg', 'Proficient' ),
    new InfoBlock('JavaScript', PRG_IMG_DIR + 'javascript.svg', 'Proficient'),
    new InfoBlock('Kotlin', PRG_IMG_DIR + 'kotlin.svg', 'Proficient'),
    new InfoBlock('MATLAB', PRG_IMG_DIR + 'matlab.png', 'Familiar'),
    new InfoBlock('Python', PRG_IMG_DIR + 'python.svg', 'Proficient'),
    new InfoBlock('SQL', PRG_IMG_DIR + 'sql.svg', 'Familiar'),
    new InfoBlock('TensorFlow', PRG_IMG_DIR + 'tensorflow.svg', 'Currently Learning'),
  ];

  private currentCourses = [
    new InfoBlock('Computer Vision', CRS_IMG_DIR + 'computer_vision.jpg', 'CMPEN 454'),
    new InfoBlock('Database Management Systems', CRS_IMG_DIR + 'database.png', 'CMPSC 431W'),
    new InfoBlock('Machine Learning & AI', CRS_IMG_DIR + 'robot.jpg', 'CMPSC 448'),
    new InfoBlock('Theory of Computation', CRS_IMG_DIR + 'turing_machine.jpg', 'CMPSC 464'),
    new InfoBlock('Numerical Computations', CRS_IMG_DIR + 'trapezoid.png', 'MATH 451'),
  ];

  private pastCourses = [
    new InfoBlock('Computer Design', CRS_IMG_DIR + 'computer_design.png', 'CMPEN 331'),
    new InfoBlock('Object Oriented Programming', CRS_IMG_DIR + 'oop.jpg', 'CMPSC 221'),
    new InfoBlock('Systems Programming', PRG_IMG_DIR + 'clang.svg', 'CMPSC 311'),
    new InfoBlock('Programming Language Concepts', CRS_IMG_DIR + 'lambda.png', 'CMPSC 461'),
    new InfoBlock('Data Structures & Algorithms', CRS_IMG_DIR + 'data_structures.png', 'CMPSC 465'),
    new InfoBlock('Operating Systems', CRS_IMG_DIR + 'os.png', 'CMPSC 473'),
    new InfoBlock('Technical Writing', CRS_IMG_DIR + 'writing.jpg', 'ENGL 202C'),
    new InfoBlock('Multi-variable Calculus', CRS_IMG_DIR + 'calculus.jpg', 'MATH 230'),
    new InfoBlock('Matrix Algebra', CRS_IMG_DIR + 'matrix.png', 'MATH 441'),
    new InfoBlock('Probability Theory', CRS_IMG_DIR + 'probability.png', 'STAT 414'),
    new InfoBlock('Mathematical Statistics', CRS_IMG_DIR + 'stat.png', 'STAT 415'),
  ];

  private clubs = [
    new InfoBlock('HackPSU', CLUB_IMG_DIR + 'hackpsu.svg', 'Frontend Developer, Spring 2020 - Present'),
    new InfoBlock('Lunar Lion', CLUB_IMG_DIR + 'lunar.png', 'Avionics Lead, Fall 2018 - Present'),
    new InfoBlock('ACM', CLUB_IMG_DIR + 'acm.jpg', 'Competitive Programming, Fall 2018'),
  ];

  private hackathons = [
    new InfoBlock('CodePSU', HACK_IMG_DIR + 'codepsu.png', 'Spring 2019'),
    new InfoBlock('ICPC', HACK_IMG_DIR + 'icpc.png', 'Fall 2018'),
    new InfoBlock('HackPSU', CLUB_IMG_DIR + 'hackpsu.svg', 'Spring/Fall 2018'),
  ];

  private hobbies = [
    new InfoBlock('Guitar', HOB_IMG_DIR + 'lespaul.jpg'),
    new InfoBlock('Bass', HOB_IMG_DIR + 'bass.jpg'),
    new InfoBlock('Piano', HOB_IMG_DIR + 'piano.jpg'),
    new InfoBlock('Ukulele', HOB_IMG_DIR + 'ukulele.jpg'),
    new InfoBlock('Violin', HOB_IMG_DIR + 'violin.jpg'),
    new InfoBlock('Records', HOB_IMG_DIR + 'remaininlight.jpg'),
    new InfoBlock('Retro Tech', HOB_IMG_DIR + 'commodore_pet.jpg'),
    new InfoBlock('Electric Cars', HOB_IMG_DIR + 'tesla.jpg'),
    new InfoBlock('Aviation', HOB_IMG_DIR + 'airplane.jpg'),
    new InfoBlock('Trains', HOB_IMG_DIR + 'shinkansen.jpg'),
    new InfoBlock('Roller Coasters', HOB_IMG_DIR + 'roller_coaster.jpg'),
    new InfoBlock('Coin Collecting', HOB_IMG_DIR + 'morgan_silver_dollar.jpg'),
  ];

  infoGroups = [
    new InfoBlockGroup('Education', this.education),
    new InfoBlockGroup('Work Experience', this.experience),
    new InfoBlockGroup('Programming Languages', this.languages),
    new InfoBlockGroup('Current Courses', this.currentCourses),
    new InfoBlockGroup('Past Courses', this.pastCourses),
    new InfoBlockGroup('Clubs', this.clubs),
    new InfoBlockGroup('Hackathons', this.hackathons),
    new InfoBlockGroup('Hobbies & Interests', this.hobbies),
  ];
}
