import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  constructor(private customerService:CustomerService) { }
  
  ticket:any

  cancelTicket(customerId:number,ticket:any){
    ticket = this.customerService.cancelTicket(customerId,ticket);
  }

  ngOnInit() {
  }

}
