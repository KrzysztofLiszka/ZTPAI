import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './containers';


const COMPONENTS = [LoginPageComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [COMPONENTS]
})
export class LoginModule { }
