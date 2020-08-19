import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { City } from 'src/app/shared/models/city.model';

@Component({
  selector: 'app-admin-city',
  templateUrl: './admin-city.component.html',
  styleUrls: ['./admin-city.component.css']
})
export class AdminCityComponent implements OnInit {

  constructor(private adminService: AdminService, private formBuilder: FormBuilder) { }

  cities:City[]=[];
  city: FormGroup;
  submitted: boolean=false;

  ngOnInit() {
    this.getAllCities();
    this.city= this.formBuilder.group({
      cityName:['', [Validators.required,Validators.pattern("^[a-zA-Z]*$")]]
    });

  }

  getAllCities()
  {
    this.adminService.getAllCities().subscribe(
      data=>{this.cities=data; console.log(this.cities);},
      err=>{console.log(err.error.message);}

    );
  }

  addCity()
  {
    this.submitted=true;
    if(this.city.invalid)
    {
      return;
    }
    this.adminService.addCity(this.city.value).subscribe(
      data=>{console.log(data); this.getAllCities()},
      err=>{console.log(err.error.message); alert(err.error.message)}
    );
  }

}
