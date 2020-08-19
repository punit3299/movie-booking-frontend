import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../shared/services/customer/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../shared/models/customer.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  role:String;
  customer:Customer;

  constructor(private fb: FormBuilder,private router: Router,private customerService:CustomerService,
    private toastrService:ToastrService) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.minLength(4)]],
  });

  ngOnInit() {
  }

  onSubmit(){
    this.customerService.validateCredential(this.loginForm.value).subscribe(data=>{
      this.role=data;
      if(this.role=="admin"){
        this.router.navigateByUrl('/admin');
      }
      else if(this.role=="customer"){
        this.router.navigateByUrl('/customer');
        this.customerService.getCustomer(this.loginForm.controls.email.value).subscribe(data=>{
          this.customer=data;
          localStorage.setItem("customerID",this.customer.customerId.toString());
        })
      }
      else{
        this.toastrService.error("UserName or Password Invalid !");
      }
    })
  }

}
