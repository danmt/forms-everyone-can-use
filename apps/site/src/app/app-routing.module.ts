import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'bad',
        loadChildren: () => import('./bad/bad.module').then((m) => m.BadModule),
      },
      {
        path: 'good',
        loadChildren: () =>
          import('./good/good.module').then((m) => m.GoodModule),
      },
      { path: '', redirectTo: '/bad', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
