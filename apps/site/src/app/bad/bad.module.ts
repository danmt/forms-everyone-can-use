import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadRoutingModule } from './bad-routing.module';
import { BadComponent } from './bad.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BadComponent],
  imports: [CommonModule, BadRoutingModule, ReactiveFormsModule],
})
export class BadModule {}
