import { Movie } from './movie.model';
import { Theatre } from './theatre.model';

export class Screen{
    screenId;
	screenName;
	noOfSeats;
    status;
    movie:Movie;
    theatre:Theatre;
}