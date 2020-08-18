import { Component, OnInit } from '@angular/core';
import { Theatre } from 'src/app/shared/models/theatre.model';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-theatre',
  templateUrl: './admin-theatre.component.html',
  styleUrls: ['./admin-theatre.component.css']
})
export class AdminTheatreComponent implements OnInit {

  theatres: Theatre[]=[];


  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.getAllTheatres();

  }

  getAllTheatres()
  {
    this.adminService.getAllTheatres().subscribe(
      data=>{this.theatres=data; console.log(this.theatres)},
      err=>{console.log(err.error.message);}
      )
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

}
