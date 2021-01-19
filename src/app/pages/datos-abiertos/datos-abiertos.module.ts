import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosAbiertosRoutingModule } from './datos-abiertos-routing.module';

import { DatosAbiertosComponent } from './datos-abiertos.component';

@NgModule({
  declarations: [DatosAbiertosComponent],
  imports: [CommonModule, DatosAbiertosRoutingModule],
})
export class DatosAbiertosModule {}
