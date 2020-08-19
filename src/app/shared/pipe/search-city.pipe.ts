import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../models/city.model';

@Pipe({
  name: 'searchCity'
})
export class SearchCityPipe implements PipeTransform {

  transform(cities:City[], searchText: string) {
    if(!cities || !searchText)
    {
      return cities;
    }
    else{
      return cities.filter(city=>city.cityName.toLowerCase().indexOf(searchText.toLowerCase())!=-1);
    }
  }

}

/**
 * import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie.model';

@Pipe({
  name: 'movieSearch'
})
export class MovieSearchPipe implements PipeTransform {

  transform(movies:Movie[],searchMovie :string) {
    if(!movies|| !searchMovie)
    {
    return movies;
   }
   else
   return movies.filter(movie=>movie.movieName.toLowerCase().indexOf(searchMovie.toLowerCase())!=-1);
  }
}

 */
