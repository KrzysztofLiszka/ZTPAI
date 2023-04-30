import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/interceptors';


const COMPONENTS = [LoginPageComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [COMPONENTS],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: TokenInterceptor,
    multi: true
  }]
})
export class LoginModule { }
