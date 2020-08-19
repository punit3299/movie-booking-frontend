import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { Show } from 'src/app/shared/models/show.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-view-show',
  templateUrl: './admin-view-show.component.html',
  styleUrls: ['./admin-view-show.component.css']
})
export class AdminViewShowComponent implements OnInit {

 
  theatreId:number;
  screenId:number;
  
  shows:Show[]=[];
  
  constructor(private adminService:AdminService,private toaster:ToastrService ,private route:ActivatedRoute) 
  {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.theatreId = params['theatreId']
      this.screenId=params['screenId']
      this.viewShows(this.theatreId,this.screenId);
    });

  }

  viewShows(theatreId,screenId)
  {
    this.adminService.findAllShows(theatreId,screenId)
   .subscribe(data=>this.shows=data);
  }

  deleteShow(showId:number)
  { 
    console.log("Show"+showId);
    {
      this.adminService.deleteShow(showId).subscribe();
      this.toaster.success("Deleted Successfully");
    }
  }
}
