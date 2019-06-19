import { Component } from '@angular/core';
import { Repository } from '../models/repository';
import { Movie } from '../models/movie.model';

@Component({
// tslint:disable-next-line: component-selector
    selector: 'movie-detail',
    templateUrl: 'movieDetail.component.html'
})
export class MovieDetailComponent {
    constructor(private repo: Repository) { }
    get movie(): Movie {
        return this.repo.movie;
    }
}
