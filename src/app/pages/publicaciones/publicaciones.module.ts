import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';

import { PublicacionesComponent } from './publicaciones.component';
import { ActuarialInformationComponent } from './actuarial-information/actuarial-information.component';

@NgModule({
  declarations: [PublicacionesComponent, ActuarialInformationComponent],
  imports: [CommonModule, PublicacionesRoutingModule],
})
export class PublicacionesModule {}
