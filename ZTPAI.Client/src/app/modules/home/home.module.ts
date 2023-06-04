import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './containers';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [HomePageComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [COMPONENTS]
})
export class HomePageModule { }
