import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';

import { PublicacionesComponent } from './publicaciones.component';
import { ActuarialInformationComponent } from './actuarial-information/actuarial-information.component';
import { InformesInstitucionalesComponent } from './informes-institucionales/informes-institucionales.component';
import { MemorialesAnualesComponent } from './memoriales-anuales/memoriales-anuales.component';
import { PresentacionesComponent } from './presentaciones/presentaciones.component';

@NgModule({
  declarations: [PublicacionesComponent, ActuarialInformationComponent, InformesInstitucionalesComponent, MemorialesAnualesComponent, PresentacionesComponent],
  imports: [CommonModule, PublicacionesRoutingModule],
})
export class PublicacionesModule {}
