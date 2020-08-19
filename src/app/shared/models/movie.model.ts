import { Screen } from './screen.model';

export class Movie{
    movieId:number;
    movieName:string;
    movieDirector:string;
    movieReleaseDate:string;
    movieGenre:string;
    movieRating:string;
    movieLength:string;
    languageList:Array<String>;
    status :boolean;
    screen:Screen;
}