import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{
				path: 'malvado',
				loadChildren: () => import('./bad/bad.module').then((m) => m.BadModule),
			},
			{
				path: 'amigable',
				loadChildren: () =>
					import('./good/good.module').then((m) => m.GoodModule),
			},
			{ path: '', redirectTo: '/malvado', pathMatch: 'full' },
		]),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
