import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CtgComponent } from './ctg/ctg.component';

const routes: Routes = [
  {path: '', component: CtgComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
