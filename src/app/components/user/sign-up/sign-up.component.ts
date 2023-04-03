import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from '../customValidator';

import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(
    private userService: UserService,
    private router: Router,
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

  OnSubmit(){
    const user = {
      name: this.form.value.name,
      email: this.form.value.email
    }

    this.userService.datiUtente.next(user);

    this.router.navigate(['home']);
  }
}
