import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent, RegisterPageComponent } from './containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/interceptors';


const COMPONENTS = [LoginPageComponent, RegisterPageComponent];

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
export class AuthModule { }
