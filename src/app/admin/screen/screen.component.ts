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
  theatreId: number;
  theatreName: string;
  currNoOfSeats: any;
  screenId: number;
  theatreManager: string;
  theatreDetails: any
  screens: any;
  updateNoOfSeatsForm: FormGroup
  addScreenForm: FormGroup
  submitted: boolean = false;
  submitted2: boolean = false;
  constructor(private route1: ActivatedRoute, private service: AdminService, private formBuilder: FormBuilder) {
    this.updateNoOfSeatsForm = this.formBuilder.group({
      updatedNoOfSeats: ['', Validators.required]
    })
    this.addScreenForm = this.formBuilder.group({
      screenName: ['', Validators.required],
      noOfSeats: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.route1.params.subscribe(params => {
      this.theatreId = params['theatreId']
      console.log(params['theatreId'])
      this.service.getDetailsOfTheatre(this.theatreId).subscribe(data => {
        this.theatreDetails = data
        this.service.getScreenList(this.theatreId).subscribe(data => {
          this.screens = data
        })
      })
    })
    

  }
  ChangeNoOfSeat(screenId, noOfSeats) {
    this.screenId = screenId
    this.currNoOfSeats = noOfSeats
    console.log(screenId + " " + this.currNoOfSeats)
  }
  updateNoOfSeats() {
    this.submitted2 = true
    if (this.updateNoOfSeatsForm.invalid)
      return;
    this.service.updateNoOfSeats(this.screenId, this.updateNoOfSeatsForm.controls.updatedNoOfSeats.value).subscribe(data => {
      this.currNoOfSeats=data
      this.service.getScreenList(this.theatreId).subscribe(data => {
        this.screens = data
        this.ngOnInit
      })
    })
    
    this.updateNoOfSeatsForm.reset();
    this.submitted2=false;
  }
  addScreen() {
    this.submitted=true
    if(this.addScreenForm.invalid)
    return;
    this.service.addScreen(this.addScreenForm.value,this.theatreId).subscribe(data=>
      {
        this.service.getScreenList(this.theatreId).subscribe(data => {

          this.screens = data
          this.ngOnInit
        })
      })
      
  }
  deleteScreen(screenId:number)
  {
    this.service.deleteScreen(screenId,this.theatreId).subscribe(data=>
      {
        this.screens = data;
        this.ngOnInit
      })
  }
}
