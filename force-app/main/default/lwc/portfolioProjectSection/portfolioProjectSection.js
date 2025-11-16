import { LightningElement,api, wire ,track } from 'lwc';
import PortfolioProjects from '@salesforce/apex/PortfolioController.getProjects';
import Github from "@salesforce/resourceUrl/github";

export default class PortfolioProjectSection extends LightningElement {
    @track projectList = [];
    @track groupedProjects=[];
    githubIcon = Github;
    
    @wire(PortfolioProjects)
    getProjects({data,error}){
        if(data){
            this.projectList = data;
            console.log('projectList'+this.projectList);
            this.groupedProjects = this.projectList.map(item => ({
                title: item.Project_Name__c,
                skills: this.cleanSkills(item.Skills__c),
                link:item.Github_Link__c,
                description: item.Description__c
            }));
        }else{
            console.log(error);
        }
    }

    cleanSkills(subHeading) {
        if (!subHeading) return [];
        return subHeading
            .replace(/\r?\n/g, ' ')           // remove newlines
            .split(',')                       // split by commas
            .map(s => s.replace(/[\.\r\n]/g, '').trim()) // remove dots and trim spaces
            .filter(s => s.length > 0);       // remove empty entries
    }
}