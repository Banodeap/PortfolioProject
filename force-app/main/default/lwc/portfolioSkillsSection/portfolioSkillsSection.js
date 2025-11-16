import { LightningElement ,track,wire} from 'lwc';
import PortfolioSkills from '@salesforce/apex/PortfolioController.getSkills';

export default class PortfolioSkillsSection extends LightningElement {

    @track skillsList = [];
    @track groupedSkills=[];
    @wire(PortfolioSkills)
    getSkills({data,error}){
        if(data){
            this.skillsList = data;
            console.log('skillsList'+this.skillsList);

            this.groupedSkills = this.skillsList.map(item => ({
                title: item.Heading__c,
                subtitles: this.cleanSkills(item.Sub_Heading__c)
            }));
            console.log('skillsList'+JSON.stringify(this.groupedSkills))
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