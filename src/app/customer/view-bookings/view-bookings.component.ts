import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { Booking } from 'src/app/shared/models/booking.model';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {
  public bookings:Booking[]=[{
    bookingId:1121,
    bookingDate:null,
    totalCost:0,
    movie:null,
      status:null,
      transaction:null,
      ticekt:null,
      show:null}]

customerId:number=1160;
  constructor(private customerService:CustomerService) {
    this.customerService.getPreviousBookings(this.customerId).subscribe(data=>{this.bookings=data, console.log(this.bookings)},error=>{console.log(error)});
   }
 

  ngOnInit() {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue != '') {
      this.bookings = this.bookings.filter(booking => booking.movie.movieName.toLowerCase().startsWith(filterValue.toLowerCase()) );
    }
    else {
      
      this.customerService.getPreviousBookings(this.customerId).subscribe(data=>{this.bookings=data,console.log(this.bookings)},error=>{alert("No shows available");this.bookings=[];});
  }

}
}
