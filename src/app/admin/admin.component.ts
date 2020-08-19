import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  todaysDate = new Date();

  constructor(private router:Router,private toastrService:ToastrService) {

    // clock
    setInterval(() => {
      this.todaysDate = new Date();
    }, 1000);
    
  } 

  ngOnInit() {
    if(localStorage.getItem("userId")==null){
      this.router.navigateByUrl('/home/login');
    }
    else if(localStorage.getItem("role")=="ROLE_CUSTOMER"){
      this.router.navigateByUrl("/customer");
    }
  }

  logOut(){
    localStorage.removeItem("userId");
    this.toastrService.warning("See You Soon !");
    this.router.navigateByUrl('/home/login');
  }

}
