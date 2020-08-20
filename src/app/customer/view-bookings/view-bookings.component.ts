import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { Bookings } from 'src/app/shared/models/bookings.model';
<<<<<<< HEAD
import { ToastrService } from 'ngx-toastr';
import { Ticket } from 'src/app/shared/models/ticket.model';
import { Booking } from 'src/app/shared/models/booking.model';
=======
>>>>>>> 4b03b4bcab83643bffd4100bcc71a6f9c998c910

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {
<<<<<<< HEAD
  public bookings:Bookings[];

customerId:number=1160;
  constructor(private customerService:CustomerService,private toastrService:ToastrService) {
    this.customerService.getPreviousBookings(this.customerId).subscribe(data=>{this.bookings=data, console.log(this.bookings)},error=>{console.log(error)});
   }
 t:any;
=======
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
 
>>>>>>> 4b03b4bcab83643bffd4100bcc71a6f9c998c910

  ngOnInit() {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue != '') {
<<<<<<< HEAD
      this.bookings = this.bookings.filter(booking => booking.movie.toLowerCase().startsWith(filterValue.toLowerCase()) || booking.show.theatreName.startsWith(filterValue.toLowerCase()));
=======
      this.bookings = this.bookings.filter(booking => booking.movie.toLowerCase().startsWith(filterValue.toLowerCase()) || booking.show.theatre.theatreName.startsWith(filterValue.toLowerCase()));
>>>>>>> 4b03b4bcab83643bffd4100bcc71a6f9c998c910
    }
    else {
      
      this.customerService.getPreviousBookings(this.customerId).subscribe(data=>{this.bookings=data,console.log(this.bookings)},error=>{alert("No shows available");this.bookings=[];});
  }

}
<<<<<<< HEAD
booking:Booking;
cancelTicket(booking:Booking){
  this.customerService.getBooking(booking.bookingId).subscribe(data=>{
    console.log("booking");
    console.log(data);
    this.booking=data;
  })

  this.customerService.cancelTicket(this.customerId,booking.ticket).subscribe(data=>{
    console.log("ticket");
    console.log(data);
    this.toastrService.success("Ticket Cancelled");
    
  })
}

=======
>>>>>>> 4b03b4bcab83643bffd4100bcc71a6f9c998c910
}
