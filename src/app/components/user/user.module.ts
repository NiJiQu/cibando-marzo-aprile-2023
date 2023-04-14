import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserRoutingModule } from "./user-routing.module";
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { MaterialExampleModule } from 'src/material.module';

import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserComponent } from "./user.component";

@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    SignUpComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    CKEditorModule,
    UserRoutingModule,
    PasswordModule,
    DividerModule,
    MaterialExampleModule,
  ],
  exports: [
  ]
})
export class UserModule {}
