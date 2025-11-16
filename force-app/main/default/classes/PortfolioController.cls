public with sharing class PortfolioController {
    
    @AuraEnabled(cacheable=true)
    public static List<Portfolio_Experience__mdt> getExperience(){

        return [select Id,Company_Name__c,Description__c,Company_URL__c,Title__c,Duration__c,Skills__c,Sub_Title__c from Portfolio_Experience__mdt];
    }

    @AuraEnabled(cacheable=true)
    public static List<Portfolio_Skills__mdt> getSkills(){

        return [select Id,Sub_Heading__c,Heading__c,order__c from Portfolio_Skills__mdt order by order__c];
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Portfolio_Projects__mdt> getProjects(){
        return [select Id,Project_Name__c,Description__c,Github_Link__c,Skills__c,order__c from Portfolio_Projects__mdt order by order__c];
    }

    @AuraEnabled(cacheable=true)
    public static List<Portfolio_Education__mdt> getEducation(){
        return [select Id,Additinal_Info__c	,Date__c,Heading__c,Sub_Heading__c,order__c from Portfolio_Education__mdt order by order__c];
    }

    @AuraEnabled(cacheable=true)
    public static List<Achivements__mdt> getAchievments(){
        return [select Description__c ,Subtitle__c,Title__c from Achivements__mdt ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Salesforce_Certifications__mdt> getSalesforceCertifications(){
        return [select Certification_Name__c from Salesforce_Certifications__mdt ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Certifications__mdt> getCertifications(){
        return [select Title__c,Subtitle__c from Certifications__mdt ];
    }
}