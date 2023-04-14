import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent {

  titolo: string;
  newRecipe: any;

  form = new FormGroup({
    titolo: new FormControl('', Validators.required),
    descrizione: new FormControl('', Validators.required),
    immagine: new FormControl('', Validators.required),
    pubblica: new FormControl(''),
    difficolta: new FormControl('')
  });

  Editor = ClassicEditorBuild;

  editorConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'indent',
            'outdent',
            '|',
            'codeBlock',
            'blockQuote',
            'insertTable',
            'undo',
            'redo',
        ]
    },
    image: {
        toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    height: 300,
  };

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private recipeService: RecipeService
    ){}

  OnSubmit(){
    const Recipe = this.form.value;

    this.recipeService.addRecipe(Recipe).subscribe({
        next: (response) => {
          this.newRecipe = response;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  open(content: any){

    this.modalService.open(content, {ariaLabelledBy: 'modaleServizi', size: 'lg', centered: true}).result.then((res) => {
      console.log('azione da eseguire ')
      // (close) svuota i campi del form
      this.form.reset()
    }).catch((res) => {
      console.log('nessuna azione da eseguire')
      // (dismiss) chiudere la modale e reindirizzare alle ricette
      this.router.navigate(['ricette'])
    });
  }
}
