import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { Theatre } from 'src/app/shared/models/theatre.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  theatreId:number;
  theatreName:string;
  currNoOfSeats:number;
  screenId:number;
  theatreManager:string;
  theatreDetails:any
  screens:Screen[];
  updateNoOfSeatsForm:FormGroup
  constructor(private route1:ActivatedRoute,private service:AdminService,private formBuilder:FormBuilder) { 
this.updateNoOfSeatsForm=this.formBuilder.group({
  updatedNoOfSeats:['',Validators.required]
})
  }
  
  ngOnInit() {
    this.route1.params.subscribe(params=>
      {
        this.theatreId=params['theatreId']
        console.log(params['theatreId'])
       this.service.getDetailsOfTheatre(this.theatreId).subscribe(data=>
          {
            this.theatreDetails=data
          })
      })
      this.service.getScreenList(this.theatreId).subscribe(data=>
        {
          
          this.screens=data
          
        })
    
  }
  ChangeNoOfSeat(screenId,noOfSeats)
  {
    this.screenId=screenId
    this.currNoOfSeats=noOfSeats
    console.log(screenId+" "+this.currNoOfSeats)
  }
  updateNoOfSeats()
  {
    this.service.updateNoOfSeats(this.screenId,this.updateNoOfSeatsForm.controls.updatedNoOfSeats.value).subscribe(data=>
      {
        console.log("done changes")
      })
      this.service.getScreenList(this.theatreId).subscribe(data=>
        {
          
          this.screens=data
          
        })
    this.updateNoOfSeatsForm.reset();
  }
}
