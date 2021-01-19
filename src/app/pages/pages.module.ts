import { ZonaPrensaModule } from './zona-prensa/zona-prensa.module';
import { DatosAbiertosModule } from './datos-abiertos/datos-abiertos.module';
import { EnterateModule } from './enterate/enterate.module';
import { InicioModule } from './inicio/inicio.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionesModule } from './publicaciones/publicaciones.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InicioModule,
    EnterateModule,
    DatosAbiertosModule,
    PublicacionesModule,
    ZonaPrensaModule,
  ],
  exports: [
    InicioModule,
    EnterateModule,
    DatosAbiertosModule,
    PublicacionesModule,
    ZonaPrensaModule,
  ],
})
export class PagesModule {}
