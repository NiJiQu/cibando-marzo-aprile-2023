import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { DetailComponent } from './components/recipes/detail/detail.component';

const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'ricette', component: RecipesComponent, children: [
  {path: 'dettaglio/:title/:_id', component: DetailComponent},
  {path: '', pathMatch: 'full', component: RecipesListComponent}
]},
{path: 'registrazione', component: SignUpComponent},
{path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
