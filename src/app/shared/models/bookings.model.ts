import { Shows } from './shows.model';
import { Ticket } from './ticket.model';
import { Transaction } from './transaction.model';

export class Bookings{
    bookingId;
	bookingDate;
	totalCost;
	movie;
    status;
    transaction:Transaction;
    ticket:Ticket;
    show:Shows;
}