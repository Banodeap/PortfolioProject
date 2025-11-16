import { LightningElement, wire, track } from 'lwc';
import PortfolioEducation from '@salesforce/apex/PortfolioController.getEducation';
import PortfolioAchivements from '@salesforce/apex/PortfolioController.getAchievments';
import PortfolioSalesforceCertificate from '@salesforce/apex/PortfolioController.getSalesforceCertifications';
import PortfolioCertifications from '@salesforce/apex/PortfolioController.getCertifications';

export default class PortfolioEducationAchievmentsSection extends LightningElement {
    @track educationList = [];
    @track groupedEducation = [];
    @track achivementList=[];
    @track newachivementList=[];
    @track salesforceCertificationsList = [];
    @track certificationList=[]

    @wire(PortfolioEducation)
    getEducation({ data, error }) {
        if (data) {
            this.educationList = data;
            console.log('educationList', this.educationList);

            this.groupedEducation = this.educationList.map(item => ({
                id: item.Id,
                collegeName: item.Heading__c,
                degree: item.Sub_Heading__c,
                // marks: item.Marks__c,
                year: item.Date__c,
                comment: item.Additinal_Info__c	
            }));
        } else if (error) {
            console.error('Error fetching education:', error);
        }
    }

    @wire(PortfolioAchivements)
    getAchievments({ data ,error}){
        if(data){
            this.achivementList = data;
            this.newachivementList = this.achivementList.map(item => ({
            
                title: item.Title__c,
                subtitle: item.Subtitle__c,
                // marks: item.Marks__c,
                description: item.Description__c
               
            }));

            console.log('achivementList'+this.newachivementList)
        }else if(error){

        }
    }

    @wire(PortfolioSalesforceCertificate)
    getSFcertificate({ data ,error}){
        if(data){
            this.salesforceCertificationsList = data;
            
        }else if(error){

        }
    }

    @wire(PortfolioCertifications)
    getCertificate({ data ,error}){
        if(data){
            this.certificationList = data;
            
        }else if(error){

        }
    }
}