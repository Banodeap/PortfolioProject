import { LightningElement } from 'lwc';
import PortfolioLogos from "@salesforce/resourceUrl/PortfolioLogos";
import Linkedin from "@salesforce/resourceUrl/linkedin";
import Leetcode from "@salesforce/resourceUrl/leetcode";
import Github from "@salesforce/resourceUrl/github";
import Instagram from "@salesforce/resourceUrl/instagram";
import Trailhead from "@salesforce/resourceUrl/salesforce";
import HackerRank from "@salesforce/resourceUrl/Hackerrankwhite";

export default class PortfolioFooter extends LightningElement {
     
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