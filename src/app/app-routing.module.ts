import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlipcartComponent } from './flipcart/flipcart.component';

const routes: Routes = [
  {path:"flipcart", component: FlipcartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
