import { Component } from '@angular/core';
import { Repository } from '../models/repository';

@Component({
// tslint:disable-next-line: component-selector
    selector: 'category-filter',
    templateUrl: 'categoryFilter.component.html'
})
export class CategoryFilterComponent {
    public romanceCategory = 'romance';
    constructor(private repo: Repository) { }
    setCategory(category: string) {
        this.repo.filter.category = category;
        this.repo.getMovies();
    }
}
