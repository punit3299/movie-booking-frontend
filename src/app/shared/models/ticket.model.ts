import { Booking } from './booking.model';
import { Customer } from './customer.model';

export class Ticket{
    ticketId;
	seatName; 
	ticketStatus;
    screenName;
    booking:Booking;
    customer:Customer;
}