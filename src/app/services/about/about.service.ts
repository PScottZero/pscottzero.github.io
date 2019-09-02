/**
 * this service contains information for the about page
 */
import { Injectable } from '@angular/core';

const IMG_DIR = '../../assets/img/'; // image directory
const EDU_IMG_DIR = IMG_DIR + 'edu_icons/'; // education icons directory
const EXP_IMG_DIR = IMG_DIR + 'exp_icons/'; // experience icons directory
const HACK_IMG_DIR = IMG_DIR + 'hack_icons/'; // hackathon icons directory
const HOB_IMG_DIR = IMG_DIR + 'hob_icons/'; // hobby icons directory
const PRG_IMG_DIR = IMG_DIR + 'prg_icons/'; // programming language icons directory

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private education = [
    new Info(EDU_IMG_DIR + 'psu.png', 'Penn State Logo', 'Penn State',
      ['Sophomore', 'Computer Science', 'w/ Math Minor', 'GPA 3.97/4.00']),
    new Info(EDU_IMG_DIR + 'shc.png', 'Schreyer Logo', 'Schreyer Scholar',
      ['Gateway Program', 'Fall 2018']),
    new Info(EDU_IMG_DIR + 'whs.png', 'Wissahickon Logo', 'Wissahickon High School',
      ['Graduated 2017', 'Magna Cum Laude', 'GPA 3.8/4.0']),
  ];

  private experience = [
    new Info(EXP_IMG_DIR + 'lockheed.png', 'Lockheed Logo', 'Lockheed Martin',
      ['Software Engineer Intern', 'May-Aug 2019'], 3),
    new Info(EXP_IMG_DIR + 'lunar.png', 'Lunar Lion Logo', 'Lunar Lion',
      ['Avionics Lead', '(Previously GCS Lead)', 'Aug 2018-Present']),
    new Info(EXP_IMG_DIR + 'easton.png', 'Easton Coach Logo', 'Easton Coach Company',
      ['Software Engineer', 'Summer 2018']),
    new Info(EXP_IMG_DIR + 'wvpl.png', 'WVPL Logo', 'Wissahickon Valley Public Library',
      ['IT Volunteer', 'Summer 2016']),
  ];

  private languages = [
    new Info(PRG_IMG_DIR + 'java.svg', 'Java Logo', 'Java'),
    new Info(PRG_IMG_DIR + 'c.svg', 'C Logo', 'C'),
    new Info(PRG_IMG_DIR + 'cpp.svg', 'C++ Logo', 'C++'),
    new Info(PRG_IMG_DIR + 'angular.png', 'Angular Logo', 'Angular'),
    new Info(PRG_IMG_DIR + 'javascript.svg', 'Javascript Logo', 'Javascript'),
    new Info(PRG_IMG_DIR + 'python.svg', 'Python Logo', 'Python'),
    new Info(PRG_IMG_DIR + 'kotlin.svg', 'Kotlin Logo', 'Kotlin'),
    new Info(PRG_IMG_DIR + 'html.svg', 'HTML Logo', 'HTML'),
    new Info(PRG_IMG_DIR + 'mips.svg', 'MIPS Logo', 'MIPS'),
    new Info(PRG_IMG_DIR + 'verilog.svg', 'Verilog Logo', 'Verilog'),
  ];

  private coursework = [
    new Info(undefined, undefined, 'CMPSC 465', ['Data Structures & Algorithms']),
    new Info(undefined, undefined, 'CMPSC 311', ['Systems Programming']),
    new Info(undefined, undefined, 'CMPSC 221', ['Object Oriented Programming']),
    new Info(undefined, undefined, 'CMPEN 331', ['Computer Design']),
    new Info(undefined, undefined, 'PHYS 212', ['Physics: Electricity & Magnetism']),
    new Info(undefined, undefined, 'MATH 230', ['Multi-variable Calculus']),
  ];

  private clubs = [
    new Info(EXP_IMG_DIR + 'lunar.png', 'Lunar Lion Logo', 'Lunar Lion',
      ['Sep 2017-Present']),
    new Info(EXP_IMG_DIR + 'acm.png', 'ACM Logo', 'ACM', ['Sep 2018 - Present']),
  ];

  private hackathons = [
    new Info(HACK_IMG_DIR + 'codepsu.png', 'CodePSU Logo', 'CodePSU', ['Spring 2019']),
    new Info(HACK_IMG_DIR + 'icpc.png', 'ICPC Logo', 'ICPC', ['Fall 2018']),
    new Info(HACK_IMG_DIR + 'hackpsu.png', 'HackPSU Logo', 'HackPSU', ['Spring/Fall 2018']),
  ];

  private hobbies = [
    new Info(HOB_IMG_DIR + 'guitar.svg', 'Guitar', 'Guitar'),
    new Info(HOB_IMG_DIR + 'bass.svg', 'Bass', 'Bass'),
    new Info(HOB_IMG_DIR + 'piano.svg', 'Piano', 'Piano'),
    new Info(HOB_IMG_DIR + 'ukulele.svg', 'Ukulele', 'Ukulele'),
    new Info(HOB_IMG_DIR + 'vinyl.svg', 'Vinyl', 'Vinyl'),
    new Info(HOB_IMG_DIR + 'mac.svg', 'Macintosh', 'Old Tech'),
    new Info(HOB_IMG_DIR + 'plane.svg', 'Plane', 'Aviation'),
    new Info(HOB_IMG_DIR + 'train.svg', 'Train', 'Trains'),
    new Info(HOB_IMG_DIR + 'coaster.svg', 'Coaster', 'Coasters'),
    new Info(HOB_IMG_DIR + 'coin.svg', 'Coin', 'Coins'),
  ];

  infoGroups = [
    new InfoGroup('Education', this.education, 33),
    new InfoGroup('Work Experience', this.experience, 50),
    new InfoGroup('Programming Languages', this.languages, 50),
    new InfoGroup('Coursework', this.coursework, 33),
    new InfoGroup('Clubs', this.clubs, 50),
    new InfoGroup('Hackathons', this.hackathons, 33),
    new InfoGroup('Hobbies & Interests', this.hobbies, 50),
  ];
}

export class Info {
  img: string;
  imgAlt: string;
  header: string;
  info: Array<string>;
  flex: number;

  constructor(img: string, imgAlt: string, header: string, info?: Array<string>, flex?: number) {
    this.img = img;
    this.imgAlt = imgAlt;
    this.header = header;
    this.info = info;
    this.flex = flex;
  }
}

export class InfoGroup {
  title: string;
  infoArray: Array<Info>;
  flex: number;

  constructor(title: string, infoArray: Array<Info>, flex: number) {
    this.title = title;
    this.infoArray = infoArray;
    this.flex = flex;
  }
}
