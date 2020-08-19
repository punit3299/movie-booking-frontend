import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { Bookings } from 'src/app/shared/models/bookings.model';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {
  public bookings:Bookings[]=[{
    bookingId:1121,
    bookingDate:null,
    totalCost:0,
    movie:null,
      status:null,
      transaction:null,
      ticket:null,
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
      this.bookings = this.bookings.filter(booking => booking.movie.toLowerCase().startsWith(filterValue.toLowerCase()) || booking.show.theatre.theatreName.startsWith(filterValue.toLowerCase()));
    }
    else {
      
      this.customerService.getPreviousBookings(this.customerId).subscribe(data=>{this.bookings=data,console.log(this.bookings)},error=>{alert("No shows available");this.bookings=[];});
  }

}
}
