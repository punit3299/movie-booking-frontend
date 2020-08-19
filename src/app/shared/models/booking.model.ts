import { Show } from './show.model';
import { Transaction } from './transaction.model';
import { Ticket } from './ticket.model';

export class Booking{
    bookingId;
	bookingDate;
	totalCost;
	movie;
    status;
    transaction:Transaction;
    ticket:Ticket;
    show:Show;
}