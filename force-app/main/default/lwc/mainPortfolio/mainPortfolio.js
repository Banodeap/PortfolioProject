import { LightningElement ,api ,wire ,track} from 'lwc';
import PortfolioEducation from '@salesforce/apex/PortfolioController.getEducation';
import PortfolioAchivements from '@salesforce/apex/PortfolioController.getAchievments';
import PortfolioSalesforceCertificate from '@salesforce/apex/PortfolioController.getSalesforceCertifications';
import PortfolioCertifications from '@salesforce/apex/PortfolioController.getCertifications';
import PortfolioExperience from '@salesforce/apex/PortfolioController.getExperience';
import PortfolioSkills from '@salesforce/apex/PortfolioController.getSkills';
import PortfolioProjects from '@salesforce/apex/PortfolioController.getProjects';

export default class MainPortfolio extends LightningElement {
    showHome = true;
    showExperience = false;
    showProject = false;
    showSkills = false;
    showContact = false;
    showEducationAchivements = false;

    handleSectionChange(event){
        var data = event.detail;
        console.log('data received'+data);
        this.resetValues();
        console.log('code running');
        switch(data){
            case 'home':
                this.showHome = true;
                break;
            case 'experience':
                this.showExperience = true;
                break;
            case 'projects':
                this.showProject = true;
                break;
            case 'skills':
                this.showSkills = true;
                break;
            case 'contact':
                this.showContact = true;
                break;
            case 'educationAchivements':
                this.showEducationAchivements = true;
                break;
        }
        console.log('code running2');
    }

    resetValues(){
        this.showHome = false;
        this.showExperience = false;
        this.showProject = false;
        this.showSkills = false;
        this.showContact = false;
        this.showEducationAchivements = false;
    }


    @wire(PortfolioEducation)
        getEducation({ data, error }) {
            if (data) {
                // this.educationList = data;
                // console.log('educationList', this.educationList);
    
                // this.groupedEducation = this.educationList.map(item => ({
                //     id: item.Id,
                //     collegeName: item.Heading__c,
                //     degree: item.Sub_Heading__c,
                //     // marks: item.Marks__c,
                //     year: item.Date__c,
                //     comment: item.Additinal_Info__c	
                // }));
            } else if (error) {
                console.error('Error fetching education:', error);
            }
        }
    
        @wire(PortfolioAchivements)
        getAchievments({ data ,error}){
            if(data){
                // this.achivementList = data;
                // this.newachivementList = this.achivementList.map(item => ({
                
                //     title: item.Title__c,
                //     subtitle: item.Subtitle__c,
                //     // marks: item.Marks__c,
                //     description: item.Description__c
                   
                // }));
    
                console.log('achivementList'+this.newachivementList)
            }else if(error){
    
            }
        }
    
        @wire(PortfolioSalesforceCertificate)
        getSFcertificate({ data ,error}){
            if(data){
                // this.salesforceCertificationsList = data;
                
            }else if(error){
    
            }
        }
    
        @wire(PortfolioCertifications)
        getCertificate({ data ,error}){
            if(data){
                // this.certificationList = data;
                
            }else if(error){
    
            }
        }

        @wire(PortfolioExperience)
         getExeprience({data,error}){
        if(data){
            // this.experienceList = data;
            // // console.log('experienceList'+this.experienceList)

            // this.groupedExp = this.experienceList.map(item => ({
            //     Id:item.Id,
            //     companyName: item.Company_Name__c,
            //     companyurl: item.Company_URL__c,
            //     title: item.Title__c,
            //     duration: item.Duration__c,
            //     subheading: item.Sub_Title__c,
            //     skills: this.cleanSkills(item.Skills__c),
            //     description: this.cleanDesc(item.Description__c)
            // }));
            console.log('experienceList'+this.groupedProjects)
        }
        if(error){
            console.log(error);
        }
    }

    @wire(PortfolioSkills)
        getSkills({data,error}){
            if(data){
                // this.skillsList = data;
                // console.log('skillsList'+this.skillsList);
    
                // this.groupedSkills = this.skillsList.map(item => ({
                //     title: item.Heading__c,
                //     subtitles: this.cleanSkills(item.Sub_Heading__c)
                // }));
                // console.log('skillsList'+JSON.stringify(this.groupedSkills))
            }else{
                console.log(error);
            }
        }

     @wire(PortfolioProjects)
        getProjects({data,error}){
            if(data){
                // this.projectList = data;
                // console.log('projectList'+this.projectList);
                // this.groupedProjects = this.projectList.map(item => ({
                //     title: item.Project_Name__c,
                //     skills: this.cleanSkills(item.Skills__c),
                //     link:item.Github_Link__c,
                //     description: item.Description__c
                // }));
            }else{
                console.log(error);
            }
        }
}