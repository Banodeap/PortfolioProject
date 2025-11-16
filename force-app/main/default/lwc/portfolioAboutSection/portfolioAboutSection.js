import { LightningElement } from 'lwc';
import ProfilePhoto from "@salesforce/resourceUrl/profilePhoto";
import Linkedin from "@salesforce/resourceUrl/LinkedinWhite";
import Leetcode from "@salesforce/resourceUrl/leetcodecolor";
import Github from "@salesforce/resourceUrl/githubwhite";
import Instagram from "@salesforce/resourceUrl/instagram";
import Trailhead from "@salesforce/resourceUrl/trailheawhite";
import HackerRank from "@salesforce/resourceUrl/Hackerrankwhite";


export default class PortfolioAboutSection extends LightningElement {
     profilePhoto = ProfilePhoto;

      linkedInIcon = Linkedin;
         githubIcon = Github;
         instagramIcon = Instagram;
         trailheadIcon = Trailhead;
         leetcodeIcon = Leetcode;
         hackerrankIcon = HackerRank;
     
         
         linkedinUrl = 'https://www.linkedin.com/in/ashutosh-banode-90a791191/';
         githubUrl = 'https://github.com/Banodeap';
         instagramUrl = 'https://www.instagram.com/ashutosh_banode/';
         trailheadUrl = 'https://www.salesforce.com/trailblazer/ashutoshbanode';
         leetcodeUrl = 'https://leetcode.com/u/ashutoshb777/';
         hackerrankUrl = 'https://www.hackerrank.com/profile/ayushbanode777';
}