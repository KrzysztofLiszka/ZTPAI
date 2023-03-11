import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoursPageComponent } from './containers';

const components = [HoursPageComponent];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [components]
})
export class HoursModule { }
