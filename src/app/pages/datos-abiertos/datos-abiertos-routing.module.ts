import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatosAbiertosComponent } from './datos-abiertos.component';

const routes: Routes = [{ path: '', component: DatosAbiertosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosAbiertosRoutingModule {}
