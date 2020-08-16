import { Theatre } from './theatre.model';
import { Screen } from './screen.model';
import { Movie } from './movie.model';

export class Show {
    showId;
    showStartTime;
    showEndTime;
    showName;
    status;
    theatre:Theatre;
    screen:Screen;
    movie:Movie;
}