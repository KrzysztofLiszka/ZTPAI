import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './containers';

const COMPONENTS = [HomePageComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [COMPONENTS]
})
export class HomePageModule { }
