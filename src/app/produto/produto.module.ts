import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { PdtComponent } from './pdt/pdt.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    PdtComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    PdtComponent
  ]
})
export class ProdutoModule { }
