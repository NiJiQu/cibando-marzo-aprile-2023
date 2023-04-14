import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Observable, map, take } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit, OnDestroy{

  @Input() pag: string;
  @Output() messaggio = new EventEmitter();

  // recipes: Recipe[];
  ricetteTotali: number;
  page = 1;
  ricettePerPagina = 4;

  recipes$: Observable<Recipe[]> = this.recipeService.getRecipes().pipe(
    // map(response => response.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 3)),
    map(res => this.ricette = res)
  )
  ricette: Recipe[];
  ruolo: any;

  constructor(
    private recipeService: RecipeService,
    private userService: UserService
    ){}

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('user')) !== null) {
      const user = localStorage.getItem('user');
      const email = (JSON.parse(user)).email;

      this.userService.getUser(email).subscribe({
        next: res => this.ruolo = res.role
      })
    }
  }

  ngOnDestroy(): void {
    console.log('utente uscito dal componente')
  }

  inviaTitolo(titolo: string){
    this.messaggio.emit(titolo);
  }

  // prendiRicette(){
  //   this.recipeService.getRecipes()
  //   .pipe(
  //     take(1)
  //   )
  //   .subscribe({
  //     next: (response) => {
  //       this.recipes = response;
  //       if(this.pag){
  //         this.recipes = this.recipes.sort((a,b) => b._id - a._id).slice(0,4);
  //       }
  //       this.ricetteTotali = this.recipes.length;
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     }
  //   })
  // }

  paginate(event){
    event.page = event.page + 1;
    this.page = event. page;
  }
}
