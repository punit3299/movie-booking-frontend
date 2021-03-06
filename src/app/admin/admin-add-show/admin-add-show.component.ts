import { Component, OnInit, ViewChild } from '@angular/core';
import { Show } from 'src/app/shared/models/show.model';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-add-show',
  templateUrl: './admin-add-show.component.html',
  styleUrls: ['./admin-add-show.component.css']
})
export class AdminAddShowComponent implements OnInit {

  screenId:number;
  theatreId:number;
  
  constructor(private adminService:AdminService,private route:ActivatedRoute, private toastr:ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.theatreId = params['theatreId']
     this.screenId = params['screenId']
    });
  }

  @ViewChild('userForm',{static:false}) public addShowForm:NgForm;

  showErrorInfo:String;

  show:Show=new Show();

  onSubmit(show)
  {
    show.theatreId=this.theatreId;
    show.screenId=this.screenId;
    let temp_showStartTime = show.showStartTime;
    let temp_showEndTime = show.showEndTime;
    let showStartTime_timestamp=new Date(show.showStartTime).getTime().toString();
    show.showStartTime=showStartTime_timestamp;

    let showEndTime_timestamp=new Date(show.showEndTime).getTime().toString();
    show.showEndTime=showEndTime_timestamp;
    this.adminService.addShow(show) .subscribe(data=>{
      this.showErrorInfo=undefined;
      this.toastr.success("Show added successfully");
    },(err: HttpErrorResponse)=>{
      this.toastr.error(err.error.message);
    });
    show.showStartTime=temp_showStartTime;
    show.showEndTime=temp_showEndTime;
  }
}
