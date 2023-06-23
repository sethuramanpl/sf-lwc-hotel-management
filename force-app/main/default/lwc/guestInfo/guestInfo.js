import { LightningElement , api, track} from "lwc";
import SaveGuest from "@salesforce/apex/SaveGuestInformation.SaveGuest";

export default class GuestInfo extends LightningElement {

    hotelOptions = [
        { label: '3 Star', value: '3 Star' },
        { label: '4 Star', value: '4 Star' },
        { label: '5 Star', value: '5 Star' }
    ];

    @api showlisthotelcomponent = false;

    firstName='';
	lastName='';
	phone='';
	email='';

	handleCityChange(event){
		this.city = event.target.value
        console.log('this.city' + this.city)
	}
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
		console.log(this.firstName,this.lastName,this.phone,this.email,this.city)

		SaveGuest({firstName:this.firstName,lastName:this.lastName,phone:this.phone,email:this.email})
		.then(result=>{
			//this.recordId = result.Id;
            console.log(this.showlisthotelcomponent)
			console.log('successfully inserted')
			console.log(result)
            console.log(result.Id)
			//console.log(this.recordId)
			//this.guestrecordid = this.recordId
			this.showlisthotelcomponent = true
            console.log(this.showlisthotelcomponent)
			this.dispatchEvent(new CustomEvent('valuechange', { detail: this.showlisthotelcomponent }));
		})
		.catch(error=>{
			console.log('failed')
			console.log(error.message)
		})
	}

}