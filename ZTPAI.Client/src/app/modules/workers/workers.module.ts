import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersPageComponent } from './containers';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AddWorkerDialogComponent, EditWorkerDialogComponent } from './components';

const COMPONENTS = [WorkersPageComponent, AddWorkerDialogComponent, EditWorkerDialogComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [COMPONENTS]
})
export class WorkersModule { }
