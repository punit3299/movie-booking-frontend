import { Component, OnInit } from '@angular/core';
import { BookTicketDetails } from 'src/app/shared/models/book-ticket-details.model';
import { BookedDetailsOfTicket } from 'src/app/shared/models/booked-details-of-ticket.model';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-seat',
  templateUrl: './book-seat.component.html',
  styleUrls: ['./book-seat.component.css']
})
export class BookSeatComponent implements OnInit {

  title = 'theatreSeat';
  seats: number = 100;
  seatArray: number[] = [];
  rowArray: number[] = [];
  colArray: number[] = [];
  seatBookArray: string[] = [];
  bookedSeat = [];
  showId: number = 619;
  buttonClass: string = "vacantButton";
  totalTicketPrice: number;
  bookSeatButton :boolean=true;
  bookingTicketDetails: BookTicketDetails = new BookTicketDetails();
  bookedDetails: BookedDetailsOfTicket = new BookedDetailsOfTicket();

  constructor(private customerService: CustomerService,private toaster:ToastrService){
  }
  ngOnInit(): void {
  
    this.customerService.bookedSeatArray(this.showId).subscribe(data => {
      this.bookedSeat = data;
      console.log(this.bookedSeat);
    })
    for (let i = 1; i <= this.seats / (this.seats / 20); i++) {
      this.rowArray.push(i);
      console.log(this.rowArray[i]);
    }
    for (let i = 1; i <= this.seats; i++) {
      this.seatArray.push(i);
    }

    for (let i = 1; i <= this.seats / 20; i++) {
      this.colArray.push(i);
    }


  }

  bookSeatNo(no: number) {
     if (this.seatBookArray.length > 0) {

      if (this.seatBookArray.includes(no.toString())) {
        let i = this.seatBookArray.indexOf(no.toString());
        this.seatBookArray.splice(i, 1);

        this.buttonClass = "vacantButton";


        console.log(this.seatBookArray);
      }
      else {
        this.seatBookArray.push(no.toString());
        this.buttonClass = "bookedButton";

        console.log(this.seatBookArray);
      }


    }
    else {
      this.seatBookArray.push(no.toString());
      this.buttonClass = "bookedButton";
      console.log(this.seatBookArray);
    }

    this.totalTicketPrice = 200 * this.seatBookArray.length;
    console.log("total price= " + this.totalTicketPrice);

    if (this.seatBookArray.length >=1) {
      this.bookSeatButton = false;
    }
    else
    {
      this.bookSeatButton = true;
    }

  };

  checkIfFinished(item: number) {
    return this.seatBookArray.includes(item.toString());
  }

  finalSeatBook() {
    console.log("inside finalSeatBook");

    console.log(this.seatBookArray.toString());
    //this.seatService.finalSeatBook(this.seatBookArray);
  }



  checkSeat(seatN: number) {
    for (let i = 0; i < this.bookedSeat.length; i++) {
      if (this.bookedSeat[i] == seatN) {
        return true;
      }
    }
    return false;
  }

  bookTicket() {
    this.bookingTicketDetails.seatNo = this.seatBookArray.toString() + ",";
    this.bookingTicketDetails.ticketPrice = this.totalTicketPrice;
    this.bookingTicketDetails.cityName = "Pune";
    this.bookingTicketDetails.customerId = 1160;
    this.bookingTicketDetails.movieId = 555;
    this.bookingTicketDetails.screenId = 6819;
    this.bookingTicketDetails.theatreId = 162;
    this.bookingTicketDetails.showId = this.showId;
    this.bookingTicketDetails.bookingDate = "2020-08-14T16:44:49.183+00:00";
    let bookingdate = new Date(this.bookingTicketDetails.bookingDate).getTime().toString();
    this.bookingTicketDetails.bookingDate = bookingdate;

    this.bookingTicketDetails.showDate = "2020-08-15T12:30:38.506+00:00";
    let showdate = new Date(this.bookingTicketDetails.showDate).getTime().toString();
    this.bookingTicketDetails.showDate = showdate;
    this.customerService.bookTicket(this.bookingTicketDetails).subscribe(data => {
      this.bookedDetails = data;
        this.toaster.success("Your Ticket has been successfully booked ");
    });



  }

}
