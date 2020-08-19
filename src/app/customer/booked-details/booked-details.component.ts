import { Component, OnInit } from '@angular/core';
import { BookedDetailsOfTicket } from 'src/app/shared/models/booked-details-of-ticket.model';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';

@Component({
  selector: 'app-booked-details',
  templateUrl: './booked-details.component.html',
  styleUrls: ['./booked-details.component.css']
})
export class BookedDetailsComponent implements OnInit {

  bookingId: number;
  cityName: string;
  movieName: string;
  theatreName: string;
  screenName: string;
  showDate: string;
  seatNo: string;
  totalCost: number;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  showTicketDetail(ticketDetail: BookedDetailsOfTicket) {
    this.customerService.showTicket(ticketDetail);
    this.bookingId = this.customerService.ticketDetail.bookingId;
    this.cityName = this.customerService.ticketDetail.cityName;
    this.movieName = this.customerService.ticketDetail.movieName;
    this.screenName = this.customerService.ticketDetail.screenName;
    this.theatreName = this.customerService.ticketDetail.theatreName;
    this.seatNo = this.customerService.ticketDetail.seatNo;
    this.totalCost = this.customerService.ticketDetail.totalCost;
    this.showDate = this.customerService.ticketDetail.showDate;
  }

}
