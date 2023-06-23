import { LightningElement, track } from "lwc";
export default class ParentInfo extends LightningElement {

@track showlisthotelcomponent = false
@track showpaymentcomponent = false

handleValueChange(event) {
    this.showlisthotelcomponent = event.detail;
}

}