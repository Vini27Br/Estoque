import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CtgComponent } from './ctg/ctg.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    CtgComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    CtgComponent
  ]
})
export class CategoriaModule { }
