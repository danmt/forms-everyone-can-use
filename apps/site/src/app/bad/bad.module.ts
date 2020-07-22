import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadRoutingModule } from './bad-routing.module';
import { BadComponent } from './bad.component';


@NgModule({
  declarations: [BadComponent],
  imports: [
    CommonModule,
    BadRoutingModule
  ]
})
export class BadModule { }
