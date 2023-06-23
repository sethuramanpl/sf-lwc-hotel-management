import { LightningElement, wire,api, track } from 'lwc';
import { getObjectInfo  } from 'lightning/uiObjectInfoApi';
import HOTEL_OBJECT from '@salesforce/schema/Hotel_Master__c';
import getHotels from '@salesforce/apex/GetHotelsList.getHotels';

export default class ListHotels extends LightningElement {

    @api guestrecordid;
    @api city;

     hotels;
     @track hotel_cost;
     hotel_cost_for_payment;
     paymentDetailsVisible = false



    @wire(getHotels,{city:'$city'})
    hotelsList({ error, data }) {
        if (data) {
            this.hotels = data;
            console.log(data)
           // console.log(Object.keys(data.hotels))

        } else if (error) {
            console.error('Error retrieving accounts:', error);
        }
    }

    handleCheckboxChange(event){
        console.log('just city' + this.city)
        console.log('just guest record id' + this.guestrecordid);

        const selectedRoomId = event.target.value;
        const isChecked = event.target.checked;
        console.log(selectedRoomId)
        console.log(isChecked)
        this.hotel_cost = this.hotels.find(item => item.Id === selectedRoomId);
            //return hotel_cost ? item.Per_Day_Cost__c : null;
        console.log('hotel cost only' + this.hotel_cost.Per_Day_Cost__c)
        guestrecordid = this.guestrecordid
        console.log('guest info s' + this.guestRecordId)

        // let mapArray = this.hotels.filter(function(item){
        //     console.log('insdie filter')
        //     console.log(item.Id)
        //     console.log(selectedRoomId)

            // if(item.Id === selectedRoomId){
            //      console.log('found the price')
            //     console.log( item.Per_Day_Cost__c)
            //     return item.Per_Day_Cost__c
            //     //return true
            // }else{
            //     return false
            // }

        // })
    }

    payHandler(event){
        console.log('ready to pay'+ this.hotel_cost.Per_Day_Cost__c)
        this.hotel_cost_for_payment = this.hotel_cost.Per_Day_Cost__c
        this.paymentDetailsVisible = true


    }

}