import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { Bookings } from 'src/app/shared/models/bookings.model';
import { ToastrService } from 'ngx-toastr';
import { Booking } from 'src/app/shared/models/booking.model';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {
  public bookings:Bookings[];

customerId:number=1160;
  constructor(private customerService:CustomerService,private toastrService:ToastrService) {
    this.customerService.getPreviousBookings(this.customerId).subscribe(data=>{this.bookings=data, console.log(this.bookings)},error=>{console.log(error)});
   }
 t:any;


  ngOnInit() {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue != '') {
      this.bookings = this.bookings.filter(booking => booking.movie.toLowerCase().startsWith(filterValue.toLowerCase()) || booking.show.theatreName.startsWith(filterValue.toLowerCase()));

      this.bookings = this.bookings.filter(booking => booking.movie.toLowerCase().startsWith(filterValue.toLowerCase()) || booking.show.theatreName.startsWith(filterValue.toLowerCase()));

    }
    else {
      
      this.customerService.getPreviousBookings(this.customerId).subscribe(data=>{this.bookings=data,console.log(this.bookings)},error=>{alert("No shows available");this.bookings=[];});
  }

}
booking:Booking;
cancelTicket(booking:Booking){
  this.customerService.cancelTicket(this.customerId,booking.ticket).subscribe(data=>{
    console.log("ticket");
    console.log(data);
    this.toastrService.success("Ticket Cancelled");
    
  })
}

}
