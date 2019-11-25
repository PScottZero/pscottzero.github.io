import { Injectable } from '@angular/core';
import {InfoBlock} from '../objects/InfoBlock';
import {InfoBlockGroup} from '../objects/InfoBlockGroup';

const EDU_IMG_DIR = '../../assets/img/about/education/';
const EXP_IMG_DIR = '../../assets/img/about/experience/';
const CRS_IMG_DIR = '../../assets/img/about/coursework/';
const CLUB_IMG_DIR = '../../assets/img/about/clubs/';
const HACK_IMG_DIR = '../../assets/img/about/hackathons/';
const HOB_IMG_DIR = '../../assets/img/about/hobbies/';
const PRG_IMG_DIR = '../../assets/img/about/languages/';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private education = [
    new InfoBlock('Penn State', EDU_IMG_DIR + 'psu.jpg', 'CS Major, Math Minor. 3.97/4.00'),
    new InfoBlock('Schreyer Honors College', EDU_IMG_DIR + 'shc.jpg', 'Schreyer Scholar'),
    new InfoBlock('Wissahickon High School', EDU_IMG_DIR + 'whs.jpg', 'Magna Cum Laude'),
  ];

  private experience = [
    new InfoBlock('Lockheed Martin', EXP_IMG_DIR + 'f35.jpg', 'Software Engineer Intern'),
    new InfoBlock('Lunar Lion', EXP_IMG_DIR + 'lunar.png', 'Avionics Lead'),
    new InfoBlock('Easton Coach Company', EXP_IMG_DIR + 'easton.jpg', 'Software Engineer Intern'),
  ];

  private languages = [
    new InfoBlock('Angular', PRG_IMG_DIR + 'angular.svg', '6 months'),
    new InfoBlock('C', PRG_IMG_DIR + 'c.svg', '1 year'),
    new InfoBlock('C++', PRG_IMG_DIR + 'cpp.svg', '2 years'),
    new InfoBlock('C#', PRG_IMG_DIR + 'csharp.svg', '1 month'),
    new InfoBlock('HTML', PRG_IMG_DIR + 'html.svg', '4 years'),
    new InfoBlock('Java', PRG_IMG_DIR + 'java.svg', '4 years' ),
    new InfoBlock('JavaScript', PRG_IMG_DIR + 'javascript.svg', '1 year'),
    new InfoBlock('Kotlin', PRG_IMG_DIR + 'kotlin.svg', '1 year'),
    new InfoBlock('MIPS', PRG_IMG_DIR + 'mips.svg', '6 months'),
    new InfoBlock('Python', PRG_IMG_DIR + 'python.svg', '3 years'),
    new InfoBlock('Verilog', PRG_IMG_DIR + 'verilog.svg', '6 months'),
  ];

  private coursework = [
    new InfoBlock('Data Structures & Algorithms', CRS_IMG_DIR + 'data_structures.png', 'CMPSC 465'),
    new InfoBlock('Operating Systems', CRS_IMG_DIR + 'os.png', 'CMPSC 473'),
    new InfoBlock('Computer Design', CRS_IMG_DIR + 'computer_design.png', 'CMPEN 331'),
    new InfoBlock('Programming Language Concepts', CRS_IMG_DIR + 'lambda.png', 'CMPSC 461'),
    new InfoBlock('Systems Programming', CRS_IMG_DIR + 'systems_programming.png', 'CMPSC 311'),
    new InfoBlock('Object Oriented Programming', CRS_IMG_DIR + 'oop.jpg', 'CMPSC 221'),
    new InfoBlock('Technical Writing', CRS_IMG_DIR + 'writing.jpg', 'ENGL 202C'),
    new InfoBlock('Matrix Algebra', CRS_IMG_DIR + 'matrix.png', 'MATH 441'),
    new InfoBlock('Multi-variable Calculus', CRS_IMG_DIR + 'mvc.jpg', 'MATH 230'),
    new InfoBlock('Intro to Mathematical Statistics', CRS_IMG_DIR + 'stat.png', 'STAT 415'),
    new InfoBlock('Intro to Probability Theory', CRS_IMG_DIR + 'probability.png', 'STAT 414'),
  ];

  private clubs = [
    new InfoBlock('HackPSU', CLUB_IMG_DIR + 'hackpsu.jpg', 'Starting Spring 2020'),
    new InfoBlock('Lunar Lion', CLUB_IMG_DIR + 'lunar.png', 'Fall 2017 - Present'),
    new InfoBlock('ACM', CLUB_IMG_DIR + 'acm.jpg', 'Fall 2018'),
  ];

  private hackathons = [
    new InfoBlock('CodePSU', HACK_IMG_DIR + 'codepsu.png', 'Spring 2019'),
    new InfoBlock('ICPC', HACK_IMG_DIR + 'icpc.png', 'Fall 2018'),
    new InfoBlock('HackPSU', HACK_IMG_DIR + 'hackpsu.jpg', 'Fall 2018 - Present'),
  ];

  private hobbies = [
    new InfoBlock('Guitar', HOB_IMG_DIR + 'guitar.svg'),
    new InfoBlock('Bass', HOB_IMG_DIR + 'bass.svg'),
    new InfoBlock('Piano', HOB_IMG_DIR + 'piano.svg'),
    new InfoBlock('Ukulele', HOB_IMG_DIR + 'ukulele.svg'),
    new InfoBlock('Records', HOB_IMG_DIR + 'vinyl.svg'),
    new InfoBlock('Retro Tech', HOB_IMG_DIR + 'mac.svg'),
    new InfoBlock('Electric Cars', HOB_IMG_DIR + 'cybertruck.jpg'),
    new InfoBlock('Aviation', HOB_IMG_DIR + 'plane.svg'),
    new InfoBlock('Trains', HOB_IMG_DIR + 'train.jpg'),
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
