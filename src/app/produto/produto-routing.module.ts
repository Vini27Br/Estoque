import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdtComponent } from './pdt/pdt.component';

const routes: Routes = [
  {path: '', component: PdtComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
