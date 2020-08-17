import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer/customer.service';
import { Transaction } from '../../models/transaction.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  constructor(private customerService: CustomerService,private fb: FormBuilder) { }

  customerId: number = 1160;
  transactions: Array<Transaction>;
  customer:Customer=new Customer(0,"",0,"",0);


  ngOnInit() {

    this.customerService.getAllTransactions(this.customerId).subscribe(data => {
      console.log(data);
      this.transactions = data;

    })
  }

  cardForm = this.fb.group({
    CardNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{16}$")]],
    Pin: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{4}$")]],
    HolderName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    Cvv: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{3}$")]],
    Month: ['', Validators.required],
    Year: ['', Validators.required]
  });

  addMoney(){

  }

}
