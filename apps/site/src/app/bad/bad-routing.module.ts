import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadComponent } from './bad.component';

const routes: Routes = [{ path: '', component: BadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadRoutingModule { }
