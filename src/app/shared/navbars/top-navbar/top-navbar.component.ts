import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer/customer.service';
import { Transaction } from '../../models/transaction.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  constructor(private customerService: CustomerService,private fb: FormBuilder,private toastService:ToastrService,
    private router: Router) { }

  transactions: Array<Transaction>;
  customer=this.customerService.customer;


  ngOnInit() {

    this.customerService.getCustomer(localStorage.getItem("userId")).subscribe(data=>{
      this.customer=data;
    })
  }

  amountForm = this.fb.group({
    amount: ['', [Validators.required, Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")]]
  });

  cardForm = this.fb.group({
    CardNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{16}$")]],
    Pin: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{4}$")]],
    HolderName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    Cvv: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{3}$")]],
    Month: ['', Validators.required],
    Year: ['', Validators.required]
  });

  transaction(){
    this.customerService.getAllTransactions(this.customer.customerId).subscribe(data => {
      console.log(data);
      this.transactions = data;

    })
  }

  addMoney(){
    if(parseInt(this.cardForm.controls.Year.value)<20 || (parseInt(this.cardForm.controls.Month.value)>12 || parseInt(this.cardForm.controls.Month.value)<1)){
      this.toastService.warning("Please Check Your Expiry Date");
    }
   else{
    this.customerService.addMoneyToWallet(parseInt(this.amountForm.controls.amount.value),this.customer).subscribe(data=>{
      this.toastService.success(parseInt(this.amountForm.controls.amount.value)+" added to your wallet");
      this.customer=data;
      
    },err=>{
      console.log(err.error.message);
    })
   }
  }
  logOut(){
    localStorage.removeItem("userId");
    this.toastService.warning("See You Soon !");
    this.router.navigateByUrl('/home/login');
  }

}
