import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/services/customer/customer.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  }
  customerId:number
  ticket:any

  cancelTicket(){
    this.customerService.cancelTicket(this.customerId,this.ticket).subscribe(data=>{
      console.log(data);
      this.ticket=data;
    })
  }

}
