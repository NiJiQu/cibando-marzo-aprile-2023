import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  //Proprietà
  ricette: Recipe[];
  titoloRicetta: string;

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (response) => {
        this.ricette = response;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  //Metodi

  riceviMessaggio(e: any){
    if(this.titoloRicetta != e){
      this.titoloRicetta = e;
    } else {
      this.titoloRicetta = "";
    }

  }

}
