import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { Movie } from 'src/app/shared/models/movie.model';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-add-movie',
  templateUrl: './admin-add-movie.component.html',
  styleUrls: ['./admin-add-movie.component.css']
})
export class AdminAddMovieComponent implements OnInit {
  
  @ViewChild('userForm',{static:false}) public addMovieForm:NgForm;

  constructor(private adminService:AdminService,private toastService:ToastrService) { }

  movie:Movie=new Movie();
  movieErrorInfo:String;

  max=new  Date().getFullYear();

  form:FormGroup;

  selectedLanguage:any=[];

  ngOnInit(): void {
  }
  Language=[
    {
    "key":"English",
    "value":"English"
    },
    {
    "key":"Hindi",
    "value":"Hindi"
    },
    {
    "key":"Punjabi",
    "value":"Punjabi"
    },
    {
    "key":"Bhojpuri",
    "value":"Bhojpuri"
    },
    {
      "key":"Marathi",
      "value":"Marathi"
      },
    {
        "key":"Kannada",
        "value":"Kannada"
    }  

  ];



  languageChange(event)
  {
    let index=this.selectedLanguage.indexOf(event.target.value);
    if(index==-1)
    {
    this.selectedLanguage.push(event.target.value);
    }
    else{
      this.selectedLanguage.splice(index,1);
    }
  }



  onSubmit(movie)
  {
    let temp_movieReleaseDate=movie.movieReleaseDate;
    let date=new Date(movie.movieReleaseDate).getTime().toString();
    movie.movieReleaseDate=date;
    this.movie.languageList=this.selectedLanguage;
    this.adminService.addMovie(movie)
      .subscribe(data=>{
        this.movieErrorInfo=undefined;
        this.toastService.success("Movie added successfully");
      },(err: HttpErrorResponse)=>{
       // this.movieErrorInfo=err.error.message;
        this.toastService.error(err.error.message);
      });
      movie.movieReleaseDate=temp_movieReleaseDate;

   }
}
