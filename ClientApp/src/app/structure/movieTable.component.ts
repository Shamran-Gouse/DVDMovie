import { Component } from '@angular/core';
import { Repository } from '../models/repository';
import { Movie } from '../models/movie.model';

@Component({
// tslint:disable-next-line: component-selector
    selector: "movie-table",
    templateUrl: './movieTable.component.html'
})
export class MovieTableComponent {
    constructor(private repo: Repository) { }
    get movies(): Movie[] {
        return this.repo.movies;
    }
}
