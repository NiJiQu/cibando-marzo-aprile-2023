import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'src/app/logged-in.guard';

import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { DetailComponent } from './detail/detail.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path: '', component: RecipesComponent, children: [
    {path: 'ricette', component: RecipesListComponent},
    {path: 'dettaglio/:title/:_id', component: DetailComponent},
    {path: 'new-recipe', pathMatch: 'full', component: NewRecipeComponent, canActivate: [LoggedInGuard]},
    {path: 'results', component: ResultsComponent},
    {path: '', pathMatch: 'full', component: RecipesListComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipeRoutingModule {}
