import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  show: boolean;
  constructor(private fb: FormBuilder, private router: Router) { 
    this.show = false;
  }
  

  password() {
    this.show = !this.show;
  }

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    gender: ['', Validators.required],
    mobileNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  ngOnInit() {
  }

}
