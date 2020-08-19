import { Pipe, PipeTransform } from '@angular/core';
import { Theatre } from '../models/theatre.model';
import { MovieSearchPipe } from './movie-search.pipe';

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
      //return theatres.filter(theatre=>theatre.theatreName.toLowerCase().indexOf(searchText.toLowerCase())!=-1);
        return theatres.filter(theatre=>theatre.city.cityName.toLowerCase().indexOf(searchText.toLowerCase())!=-1);
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