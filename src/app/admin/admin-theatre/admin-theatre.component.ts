import { Component, OnInit } from '@angular/core';
import { Theatre } from 'src/app/shared/models/theatre.model';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from 'src/app/shared/models/city.model';

@Component({
  selector: 'app-admin-theatre',
  templateUrl: './admin-theatre.component.html',
  styleUrls: ['./admin-theatre.component.css']
})
export class AdminTheatreComponent implements OnInit {

  theatres: Theatre[]=[];
  addTheatre: FormGroup;
  updateTheatre: FormGroup;
  cities: City[]=[];
  cityId: number;
  submitted: boolean=false;


  constructor(private adminService: AdminService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAllTheatres();
    this.getAllCities();
    this.addTheatre=this.formBuilder.group({
      theatreName: ['', Validators.required],
      managerName: ['', Validators.required],
      managerContact: ['', Validators.required],
      city: this.formBuilder.group({
        cityId: ['', Validators.required],
        cityName: ['']
      })

    });

    this.updateTheatre= this.formBuilder.group({
      theatreId: [''],
      theatreName: [''],
      theatreRating:[''],
      managerName: ['', Validators.required],
      managerContact: ['', Validators.required],
      status:[''],
      city: this.formBuilder.group({
        cityId: [''],
        cityName: ['']
      })

    });

  }

  getAllTheatres()
  {
    this.adminService.getAllTheatres().subscribe(
      data=>{this.theatres=data; console.log(this.theatres)},
      err=>{console.log(err.error.message);}
      )
  }

  getAllCities()
  {
    this.adminService.getAllCities().subscribe(
      data=>{this.cities=data;},
      err=>{console.log(err.error.message);}
    );
  }

  deleteTheatre(theatre:Theatre)
  {
    let response=confirm("Are you really wanted to delete "+theatre.theatreName);
    if(response)
    {
      this.adminService.deleteTheatreById(theatre.theatreId).subscribe(
        data=>{this.getAllTheatres(); console.log(data);}, 
        err=>{console.log(err.error.message);});
    }
  }

  viewTheatre(theatre: Theatre)
  {
    this.router.navigate(['/admin/screen', theatre.theatreId]);
  }

  addNewTheatre()
  {
    let city: City;
    this.submitted=true;
    if(this.addTheatre.invalid)
    {
      return;
    }

    //this.searchForm.controls.source.setValue(this.searchForm.controls.destination.value);
    this.adminService.getCityById(this.addTheatre['controls'].city['controls'].cityId.value).subscribe(
      data=>{city=data;
        this.addTheatre['controls'].city['controls'].cityName.setValue(city.cityName);
        console.log(this.addTheatre.value);
      },
      err=>{console.log(err.error.message);}
    );
    //this.addTheatre['controls'].city['controls'].cityName.setValue(city.cityName.value);

    this.adminService.addTheatre(this.addTheatre.value).subscribe(
      data=>{console.log(data); this.getAllTheatres();},
      err=>{console.log(err.error.message);}
    );
  
  }

  updateTheatreMethod()
  {
    console.log(this.updateTheatre.value);
    this.adminService.updateTheatre(this.updateTheatre.value).subscribe(
      data=>{alert("Theatre updated Successfully"); this.getAllTheatres();},
      err=>{console.log(err.error.message);}
    );

  }

  setTheatre(theatre: Theatre)
  {
    this.updateTheatre.setValue(theatre);
    console.log(this.updateTheatre.value);
  }

}
