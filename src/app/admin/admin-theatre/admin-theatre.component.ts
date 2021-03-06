import { Component, OnInit } from '@angular/core';
import { Theatre } from 'src/app/shared/models/theatre.model';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from 'src/app/shared/models/city.model';
import { ToastrService } from 'ngx-toastr';

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
  updateSubmitted: boolean=false;
  searchText:string;


  constructor(private adminService: AdminService, private router: Router, private formBuilder: FormBuilder, private toaster: ToastrService) { }

  ngOnInit() {
    this.getAllTheatres();
    this.getAllCities();
    this.addTheatre=this.formBuilder.group({
      theatreName: ['',  [Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      managerName: ['',  [Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      managerContact: ['', [Validators.required, Validators.pattern("^[6-9][0-9]{9}$")]],
      city: this.formBuilder.group({
        cityId: ['', Validators.required],
        cityName: ['']
      })

    });

    this.updateTheatre= this.formBuilder.group({
      theatreId: [''],
      theatreName: [''],
      theatreRating:[''],
      managerName: ['', [Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      managerContact: ['', [Validators.required, Validators.pattern("[6-9][0-9]{9}")]],
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
        data=>{
          this.adminService.getAllTheatres().subscribe(
            data=>{this.theatres=data; console.log(this.theatres)},
            err=>{console.log(err.error.message);}
            );
          console.log(data);}, 
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
        this.addTheatre.reset;
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
    this.updateSubmitted=true;
    if(this.updateTheatre.invalid)
    {
      return;
    }
    console.log(this.updateTheatre.value);
    this.adminService.updateTheatre(this.updateTheatre.value).subscribe(
      data=>{this.toaster.success("Theatre updated Successfully"); this.getAllTheatres(); console.log(data);},
      err=>{console.log(err.error.message);}
    );

  }

  setTheatre(theatre: Theatre)
  {
    this.updateTheatre.setValue(theatre);
    console.log(this.updateTheatre.value);
  }

}
