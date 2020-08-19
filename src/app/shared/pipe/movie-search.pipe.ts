import { Pipe, PipeTransform } from '@angular/core';
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
