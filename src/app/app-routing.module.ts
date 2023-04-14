import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
// import { RegistrazioneComponent } from './shared/user/registrazione/registrazione.component';
import { EsempioCombineComponent } from './components/esempio-combine/esempio-combine.component';
// import { LoginComponent } from './shared/user/login/login.component';
// import { ProfileComponent } from './shared/user/profile/profile.component';
import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  // { path: 'registrazione', component: RegistrazioneComponent},
  // { path: 'login', component: LoginComponent},
  // { path: 'profilo', component: ProfileComponent, canActivate: [LoggedInGuard]},
  { path: 'combine', component: EsempioCombineComponent},
  { path: 'ricette', loadChildren: () => import("./components/recipes/recipes.module").then(modulo => modulo.RecipesModule)},
  // { path: 'login', loadChildren: () => import("./components/user/user.module").then(modulo => modulo.UserModule)},
  { path: 'user', loadChildren: () => import("./components/user/user.module").then(modulo => modulo.UserModule)},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
