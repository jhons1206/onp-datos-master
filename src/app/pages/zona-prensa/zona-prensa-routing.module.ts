import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonaPrensaComponent } from './zona-prensa.component';

const routes: Routes = [{ path: '', component: ZonaPrensaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonaPrensaRoutingModule {}
