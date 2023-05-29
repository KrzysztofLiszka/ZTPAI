import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoursPageComponent } from './containers';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [HoursPageComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [COMPONENTS]
})
export class HoursModule { }
