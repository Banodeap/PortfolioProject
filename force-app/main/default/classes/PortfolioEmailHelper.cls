public with sharing class PortfolioEmailHelper {
     @AuraEnabled
    public static void sendEmail(String toAddress, String subject, String body) {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new List<String>{ 'ashutoshbanodejob@gmail.com' });
        mail.setSubject(subject + ' ' + toAddress);
        mail.setHtmlBody(body);
        Messaging.sendEmail(new List<Messaging.Email> { mail });

    }

}