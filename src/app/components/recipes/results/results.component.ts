import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() pag: string; //grazie a questa variabile sappiamo da che pagina arriviamo

  @Output() messaggio = new EventEmitter();

  page = 1;
  ricettePerPagina = 4;
  ricette: Recipe[];
  ruolo: any;
  text = '';
  constructor(private recipeService: RecipeService) {}

  recipes$: Observable<Recipe[]> = this.recipeService.getRecipeByText('cannelloni').pipe(
    map(res => this.ricette = res),
  )

  paginate(event) {
    event.page = event.page + 1;
    this.page = event.page;
   }

   inviaTitolo(titolo: string) {
    this.messaggio.emit(titolo);
   }
}
