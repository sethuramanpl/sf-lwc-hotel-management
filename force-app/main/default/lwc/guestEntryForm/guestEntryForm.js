import { LightningElement, api, wire, track } from "lwc";
import { createRecord } from "lightning/uiRecordApi";
import GUEST_OBJECT from '@salesforce/schema/Guest_Master__C';

import FIRST_NAME_FIELD from '@salesforce/schema/Guest_Master__C.Guest_First_Name__c';
import LAST_NAME_FIELD from '@salesforce/schema/Guest_Master__C.Guest_Last_Name__c';
import PHONE_FIELD from '@salesforce/schema/Guest_Master__C.Guest_Phone__c';
import EMAIL_FIELD from '@salesforce/schema/Guest_Master__C.Guest_Email__c';

import {showToastEvent} from 'lightning/platformShowToastEvent';

import SaveGuest from "@salesforce/apex/SaveGuestInformation.SaveGuest";
export default class GuestEntryForm extends LightningElement {

	@api recordId;
	@api objectApiName;


	@api firstName='';
	@api lastName='';
	@api phone='';
	@api email='';

	@track cityValue;
	@track guestrecordid;
	listHotelsComponent = false

	handleCityChange(event){
		this.city = event.target.value
		this.cityValue = this.city
		console.log(this.city)
	}
	hotelOptions = [
        { label: '3 Star', value: '3 Star' },
        { label: '4 Star', value: '4 Star' },
        { label: '5 Star', value: '5 Star' }
    ];

	firstchangeHandler(event){
		this.firstName = event.target.value
		console.log(this.firstName)
	}

	lastchangeHandler(event){
		this.lastName = event.target.value
		console.log(this.lastName)
	}

	phonechangeHandler(event){
		this.phone = event.target.value
	}
	emailchangeHandler(event){
		this.email = event.target.value
	}

	handleSearch(){
		console.log(this.firstName,this.lastName,this.phone,this.email)

		SaveGuest({firstName:this.firstName,lastName:this.lastName,phone:this.phone,email:this.email})
		.then(result=>{
			this.recordId = result.Id;
			console.log('success')
			console.log(result)
			console.log(this.recordId)
			this.guestrecordid = this.recordId
			console.log('guest record id from guest entry' + this.guestrecordid )

			this.listHotelsComponent = true
		})
		.catch(error=>{
			console.log('failed')
			console.log(error.message)
		})
		// const fields = {}
		// fields[FIRST_NAME_FIELD.fieldApiName] = this.firstName
		// fields[LAST_NAME_FIELD.fieldApiName] = this.lastName
		// fields[PHONE_FIELD.fieldApiName] = this.phone
		// fields[EMAIL_FIELD.fieldApiName] = this.email

		// const recordInput = {apiName:GUEST_OBJECT.objectApiName, fields}
		// createRecord(recordInput).then(result=>{
		// 	this.showToast('Success',`contact created ${result.id}`)
		// }).catch(error=>{
		// 	this.showToast('error',error.body.message,'error')
		// })
	}

	// showToast(title, message, variant){
	// 	this.dispatchEvent(new showToastEvent({
	// 		title,
	// 		message,
	// 		variant:variant || 'success'
	// 	}))
	// }
}