export class Customer {
    customerId:number;
	customerName:string;
    customerContact:number;
    customerGender:string;
    customerBalance:number;
    
    constructor(customerId:number,
        customerName:string,
        customerContact:number,
        customerGender:string,
        customerBalance:number){
            this.customerId=customerId;
            this.customerName=customerName;
            this.customerContact=customerContact;
            this.customerGender=customerGender;
            this.customerBalance=customerBalance;
        }
}
