import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from '../customValidator';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  newUser: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal
    ){}

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', Validators.required),
    accetto: new FormControl('', Validators.requiredTrue)
  },
  [CustomValidator.matchValidator('password', 'ripetiPassword')]
  );

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

  OnSubmit(){
    const userHome = {
      name: this.form.value.name,
      email: this.form.value.email
    }

    const user = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.userService.datiUtente.next(userHome);

    this.userService.addUser(user).subscribe({
      next: (response) => {
        this.newUser = response;
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.router.navigate(['home']);
  }

  open(content: any, titolo?: string){
    let title = titolo;

    this.modalService.open(content, {ariaLabelledBy: 'modaleServizi', size: 'lg', centered: true}).result.then((res) => {
      console.log('azione da eseguire ' + titolo)
    }).catch((res) => {
      console.log('nessuna azione da eseguire')
    });
  }
}
