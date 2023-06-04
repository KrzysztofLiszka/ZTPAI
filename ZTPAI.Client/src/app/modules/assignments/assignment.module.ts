import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AssignmentsPageComponent } from './containers';
import { AddAssignmentComponentComponent, EditAssignmentComponentComponent } from './components';
import { MaterialModule } from '../material/material.module';

const COMPONENTS = [AssignmentsPageComponent, AddAssignmentComponentComponent, EditAssignmentComponentComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule
    ],
    exports: [COMPONENTS]
})
export class AssignmentsModule { }
