import { LightningElement, wire,api, track } from 'lwc';
import getHotels from '@salesforce/apex/GetHotelsList.getHotels';

export default class HotelInfo extends LightningElement {

    @api city;


    hotels;
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
}