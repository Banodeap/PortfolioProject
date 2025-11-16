import { LightningElement,api,track,wire } from 'lwc';
import PortfolioExperience from '@salesforce/apex/PortfolioController.getExperience';

export default class PortfolioExperienceSection extends LightningElement {

   @track experienceList = [];
    @track groupedExp=[];
    @wire(PortfolioExperience)
    getExeprience({data,error}){
        if(data){
            this.experienceList = data;
            console.log('experienceList'+this.experienceList)

            this.groupedExp = this.experienceList.map(item => ({
                Id:item.Id,
                companyName: item.Company_Name__c,
                companyurl: item.Company_URL__c,
                title: item.Title__c,
                duration: item.Duration__c,
                subheading: item.Sub_Title__c,
                skills: this.cleanSkills(item.Skills__c),
                description: this.cleanDesc(item.Description__c)
            }));
            console.log('experienceList'+this.groupedProjects)
        }
        if(error){
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


     cleanDesc(subHeading) {
        if (!subHeading) return [];
        return subHeading
            .replace(/\r?\n/g, ' ')           // remove newlines
            .split(';')                       // split by commas
            .map(s => s.replace(/[\.\r\n]/g, '').trim()) // remove dots and trim spaces
            .filter(s => s.length > 0);       // remove empty entries
    }
}