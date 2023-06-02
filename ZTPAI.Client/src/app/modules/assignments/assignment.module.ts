import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AssignmentsPageComponent } from './containers';

const COMPONENTS = [AssignmentsPageComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [COMPONENTS]
})
export class AssignmentsModule { }
