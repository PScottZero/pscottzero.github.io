/**
 * this service contains information for the about page
 */
import { Injectable } from '@angular/core';

const EDU_IMG_DIR = '../../assets/img/about_img/education/';
const EXP_IMG_DIR = '../../assets/img/about_img/experience/';
const CLUB_IMG_DIR = '../../assets/img/about_img/experience/clubs/';
const HACK_IMG_DIR = '../../assets/img/about_img/hackathons/';
const HOB_IMG_DIR = '../../assets/img/about_img/hobbies/';
const PRG_IMG_DIR = '../../assets/img/about_img/languages/';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private education = [
    new InfoBlock('Penn State', EDU_IMG_DIR + 'old_main.jpg', 'CS Major, Math Minor. 3.97/4.00'),
    new InfoBlock('Schreyer Honors College', EDU_IMG_DIR + 'sch.png', 'Schreyer Scholar'),
    new InfoBlock('Wissahickon High School', EDU_IMG_DIR + 'whs.png', 'Magna Cum Laude'),
  ];

  private experience = [
    new InfoBlock('Lockheed Martin', EXP_IMG_DIR + 'lockheed.png', 'Software Engineer Intern'),
    new InfoBlock('Lunar Lion', EXP_IMG_DIR + 'lunar.png', 'Avionics Lead'),
    new InfoBlock('Easton Coach Company', EXP_IMG_DIR + 'easton.png', 'Software Engineer Intern'),
  ];

  private languages = [
    new InfoBlock('Angular', PRG_IMG_DIR + 'angular.png', '6 months'),
    new InfoBlock('C', PRG_IMG_DIR + 'c.svg', '1 year'),
    new InfoBlock('C++ Logo', PRG_IMG_DIR + 'cpp.svg', '2 years'),
    new InfoBlock('HTML', PRG_IMG_DIR + 'html.svg', '4 years'),
    new InfoBlock('Java', PRG_IMG_DIR + 'java.svg', '4 years' ),
    new InfoBlock('JavaScript', PRG_IMG_DIR + 'javascript.svg', '1 year'),
    new InfoBlock('Kotlin', PRG_IMG_DIR + 'kotlin.svg', '1 year'),
    new InfoBlock('MIPS', PRG_IMG_DIR + 'mips.svg', '6 months'),
    new InfoBlock('Python', PRG_IMG_DIR + 'python.svg', '3 years'),
    new InfoBlock('Verilog', PRG_IMG_DIR + 'verilog.svg', '6 months'),
  ];

  private coursework = [
    new InfoBlock('Computer Design', undefined, 'CMPEN 331'),
    new InfoBlock('Operating Systems', undefined, 'CMPSC 473'),
    new InfoBlock('Data Structures & Algorithms', undefined, 'CMPSC 465'),
    new InfoBlock('Programming Language Concepts', undefined, 'CMPSC 461'),
    new InfoBlock('Systems Programming', undefined, 'CMPSC 311'),
    new InfoBlock('Object Oriented Programming', undefined, 'CMPSC 221'),
    new InfoBlock('Technical Writing', undefined, 'ENGL 202C'),
    new InfoBlock('Matrix Algebra', undefined, 'MATH 441'),
    new InfoBlock('Multi-variable Calculus', undefined, 'MATH 230'),
    new InfoBlock('Physics: Electricity & Magnetism', undefined, 'PHYS 212'),
    new InfoBlock('Intro to Mathematical Statistics', undefined, 'STAT 415'),
    new InfoBlock('Intro to Probability Theory', undefined, 'STAT 414'),
  ];

  private clubs = [
    new InfoBlock('HackPSU', CLUB_IMG_DIR + 'hackpsu.png', 'Starting Spring 2020'),
    new InfoBlock('Lunar Lion', CLUB_IMG_DIR + 'lunar.png', 'Fall 2017 - Present'),
    new InfoBlock('ACM', CLUB_IMG_DIR + 'acm.png', 'Fall 2018'),
  ];

  private hackathons = [
    new InfoBlock('CodePSU', HACK_IMG_DIR + 'codepsu.png', 'Spring 2019'),
    new InfoBlock('ICPC', HACK_IMG_DIR + 'icpc.png', 'Fall 2018'),
    new InfoBlock('HackPSU', HACK_IMG_DIR + 'Fall 2018 - Present'),
  ];

  private hobbies = [
    new InfoBlock('Guitar', HOB_IMG_DIR + 'guitar.svg'),
    new InfoBlock('Bass', HOB_IMG_DIR + 'bass.svg'),
    new InfoBlock('Piano', HOB_IMG_DIR + 'piano.svg'),
    new InfoBlock('Ukulele', HOB_IMG_DIR + 'ukulele.svg'),
    new InfoBlock('Records', HOB_IMG_DIR + 'vinyl.svg'),
    new InfoBlock('Retro Tech', HOB_IMG_DIR + 'mac.svg'),
    new InfoBlock('Aviation', HOB_IMG_DIR + 'plane.svg'),
    new InfoBlock('Trains', HOB_IMG_DIR + 'train.svg'),
    new InfoBlock('Roller Coasters', HOB_IMG_DIR + 'coaster.svg'),
    new InfoBlock('Coin Collecting', HOB_IMG_DIR + 'coin.svg'),
  ];

  infoGroups = [
    new InfoBlockGroup('Education', this.education),
    new InfoBlockGroup('Work Experience', this.experience),
    new InfoBlockGroup('Programming Languages', this.languages),
    new InfoBlockGroup('Coursework', this.coursework),
    new InfoBlockGroup('Clubs', this.clubs),
    new InfoBlockGroup('Hackathons', this.hackathons),
    new InfoBlockGroup('Hobbies & Interests', this.hobbies),
  ];
}

export class InfoBlock {
  title: string;
  description: string;
  backgroundImg: string;

  constructor(title: string, backgroundImg: string, description?: string) {
    this.title = title;
    this.description = description;
    this.backgroundImg = backgroundImg;
  }
}

export class InfoBlockGroup {
  title: string;
  infoBlockArr: Array<InfoBlock>;
  flex: number;

  constructor(title: string, infoArray: Array<InfoBlock>) {
    this.title = title;
    this.infoBlockArr = infoArray;
  }
}
