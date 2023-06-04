import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent, TextEditorComponent } from './components';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const COMPONENTS = [TableComponent, TextEditorComponent];

const MODULES = [FormsModule, ReactiveFormsModule];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        MaterialModule,
        CKEditorModule,
        MODULES
    ],
    exports: [COMPONENTS, MODULES]
})
export class SharedModule { }
