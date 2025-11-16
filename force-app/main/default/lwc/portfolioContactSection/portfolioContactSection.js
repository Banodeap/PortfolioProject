import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import sendEmail from '@salesforce/apex/PortfolioEmailHelper.sendEmail';

export default class PortfolioContactSection extends LightningElement {

    name=''
    email=''
    subject=''
    description=''

    handlesubmit(event){
        this.name=event.detail.name;
        console.log('name'+this.name);
        console.log(event.detail)
        console.log(event.target.name)
        event.preventDefault(); // stop default form submission / page reload

        // Get field values using querySelector
        const name = this.template.querySelector('[name="name"]').value;
        const email = this.template.querySelector('[name="email"]').value;
        const subject = this.template.querySelector('[name="subject"]').value;
        const description = this.template.querySelector('[name="description"]').value;

        console.log('Form Values:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Description:', description);

        if (name && email && subject && description) {
            // TODO: Call Apex or show success toast
            sendEmail({ toAddress: email, subject: subject, body: description }).then(() => {
                this.showToast('Success', 'Email sent successfully.', 'success');
                this.name='';
                this.email='';
                this.subject='';
                this.description='';
            }).catch(error => {
                console.error('Error sending email:', error);   
                this.showToast('Error', 'Failed to send email.', 'error');
            })
            console.log('✅ All fields filled. Ready to send data to Apex.');
        } else {
            console.log('⚠️ Please fill in all required fields.');
            this.showToast('Error', '⚠️ Please fill in all fields before submitting.', 'error');
            
        }
    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
}