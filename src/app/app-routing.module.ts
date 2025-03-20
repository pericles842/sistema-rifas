import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebRifasComponent } from './web-rifas/web-rifas.component';

const routes: Routes = [
  { path: '', component: WebRifasComponent },
  { path: 'dashboard', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
