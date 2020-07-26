import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodRoutingModule } from './good-routing.module';
import { GoodComponent } from './good.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [GoodComponent],
	imports: [CommonModule, SharedModule, GoodRoutingModule, ReactiveFormsModule],
})
export class GoodModule {}
