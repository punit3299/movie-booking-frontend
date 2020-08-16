import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBooking'
})
export class SearchBookingPipe implements PipeTransform {
  transform(bookingsList: any, searchText: any): any {

    let newList: any;
    if (searchText) {
      newList = bookingsList.filter(booking => booking.movie.toLowerCase().startsWith(searchText.toLowerCase()));
    }
    else {
      newList = bookingsList;
    }
    return newList;
  }

}
