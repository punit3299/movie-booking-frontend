import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/services/customer/customer.service';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService:CustomerService,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem("userId")==null){
      this.router.navigateByUrl('/home/login');
    }
    else if(localStorage.getItem("role")=="ROLE_ADMIN"){
      this.router.navigateByUrl('/admin');
    }
  }


}
