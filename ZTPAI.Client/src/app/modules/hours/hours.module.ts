import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoursPageComponent } from './containers';
import { SharedModule } from '../shared/shared.module';
import { AddHourDialogComponent, EditHourDialogComponent } from './components';
import { MaterialModule } from '../material/material.module';

const COMPONENTS = [HoursPageComponent, AddHourDialogComponent, EditHourDialogComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule, SharedModule, MaterialModule
  ],
  exports: [COMPONENTS]
})
export class HoursModule { }
