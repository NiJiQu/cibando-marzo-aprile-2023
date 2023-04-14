import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RECIPES } from '../mocks/recipes.mock';
import { Observable, ReplaySubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiBaseUrl = 'api/recipes';

  cerca= new ReplaySubject();

  constructor(private http: HttpClient) { }

  getRecipes() {
    // return of (RECIPES);
    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`)
  }

  getRecipe(id: string): Observable<Recipe> {
    // const recipe = RECIPES.find(ricetta => ricetta._id === id);
    // return of (recipe);
    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`)
  }

  addRecipe(recipe: any): Observable<Recipe> {
    return this.http.post<any>(`${this.apiBaseUrl}/`, recipe)
  }

  getRecipeByText(text: any) {
    return this.http.get<any>(`${this.apiBaseUrl}/cerca/${text}`);
  }
}
