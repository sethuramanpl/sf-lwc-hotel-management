import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import SavePaymentDetailsNow from '@salesforce/apex/SavePaymentDetails.SavePaymentDetailsNow';

export default class PaymentDetails extends NavigationMixin(LightningElement) {

    @api cost;
    @api guestrecordid;

    @api cardNumber='';
    @api cardExpiryMonth = '';
    @api cardExpiryYear = '';
    @api  cardCvv = '';

    cardNumHandler(event){
        this.cardNumber = event.target.value
    }

    cardExpMonthHandler(event){
        this.cardExpiryMonth = event.target.value
    }

    cardExpYearHandler(event){
        this.cardExpiryYear = event.target.value
    }

    cvvHandler(event){
        this.cardCvv = event.target.value
    }
    handlePayment() {

       console.log(this.cardNumber,this.cardExpiryMonth,this.cardExpiryYear,this.cardCvv)

       SavePaymentDetailsNow({recordId:this.guestrecordid,
                                cardNumber:this.cardNumber,
                                cardExpiryMonth:this.cardExpiryMonth,
                                cardExpiryYear:this.cardExpiryYear,cardCvv:this.cardCvv})
		.then(result=>{
			//this.recordId = result.Id;

			console.log(result)
            console.log('success payment processed and the record id is:')
            console.log(result.Id)
			//console.log(this.recordId)
			//this.guestrecordid = this.recordId
			//this.listHotelsComponent = true
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                // attributes: {
                //     recordId: this.guestrecordid, // Replace with the record Id you want to navigate to
                //     objectApiName: 'Guest_Master__c',
                //     actionName: 'view' // Replace with the appropriate object API name
                // }
                attributes: {
                    recordId: result.Id, // Replace with the record Id you want to navigate to
                    objectApiName: 'Payment_Master__c',
                    actionName: 'view' // Replace with the appropriate object API name
                }
            });
		})
		.catch(error=>{
			console.log('failed process payment')
			console.log(error)
            //console.log()
		})

    }
}