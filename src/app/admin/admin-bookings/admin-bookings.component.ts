import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin/admin.service';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css']
})
export class AdminBookingsComponent implements OnInit {

  searchText:string;
  bookingsList;

  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.getAllBookings().subscribe(data=>{
      console.log(data);
      this.bookingsList=data;
    })
  }

  deleteBooking(bookingId){
    this.adminService.deleteBookingById(bookingId).subscribe(data=>{
      console.log(data);
    })
  }

}
