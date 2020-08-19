import { Pipe, PipeTransform } from '@angular/core';
import { Theatre } from '../models/theatre.model';

@Pipe({
  name: 'searchTheatre'
})
export class SearchTheatrePipe implements PipeTransform {

  transform(theatres: Theatre[], searchText: String) {
    if(!theatres || !searchText)
    {
      return theatres;
    }
    else{
        return theatres.filter(theatre=>theatre.city.cityName.toLowerCase().indexOf(searchText.toLowerCase())!=-1);
    }
  }

}