import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

const MODULES = [MatTableModule, MatIconModule];

@NgModule({
  declarations: [],
  imports: [MODULES],
  exports: [MODULES]
})
export class MaterialModule { }
