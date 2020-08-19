import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

  constructor(private adminService:AdminService ,private toastr:ToastrService) { }

  movies:Movie[]=[];

  searchMovie:string;

  ngOnInit(): void {
    this.adminService.getAllMovies().subscribe(data=>this.movies=data);
  }

  deleteMovie(movieId:number)
  {
    this.adminService.deleteMovie(movieId).
    subscribe(data=>this.movies=data);
    this.toastr.success("Deleted Successfully");
    this.ngOnInit();
  }

}
