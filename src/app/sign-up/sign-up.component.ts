import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../shared/services/customer/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../shared/models/customer.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  customer:Customer;
  show: boolean;
  checkEmail:boolean;
  checkNumber:boolean;
  constructor(private fb: FormBuilder, private router: Router, private customerService: CustomerService
    , private toastrService: ToastrService) { 
    this.show = false;
  }
  

  password() {
    this.show = !this.show;
  }

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    gender: ['', Validators.required],
    mobileNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  ngOnInit() {
  }

  onSubmit(){
    this.customerService.validateEmail(this.registerForm.controls.email.value).subscribe(data=>{
      this.checkEmail=data;
      if(this.checkEmail){
        console.log(this.checkEmail);
        this.toastrService.error("Email Already Registered");
      }
      else{
        this.customerService.validateContactNumber(this.registerForm.controls.mobileNo.value).subscribe(data=>{
          this.checkNumber=data;
          if(this.checkNumber){
            console.log(this.checkNumber);
            this.toastrService.error("Mobile Number Already Registered");
          }
          else{
            this.customerService.addCustomer(this.registerForm.value).subscribe(data=>{
          
              this.toastrService.success("We Welcomes you !");
              this.customer=data;
              console.log(data);
            })
          }
        })
      }
    })
   
  }

}
