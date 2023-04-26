import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoursPageComponent } from './containers';

const COMPONENTS = [HoursPageComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [COMPONENTS]
})
export class HoursModule { }
