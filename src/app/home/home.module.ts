import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/component/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './singup/signup.component';

@NgModule({
    declarations:[
        SignInComponent,
        SignUpComponent
    ],
    imports:[
        ReactiveFormsModule,
        FormsModule,
        CommonModule, 
        VMessageModule,
        RouterModule]
})
export class HomeModule{

}