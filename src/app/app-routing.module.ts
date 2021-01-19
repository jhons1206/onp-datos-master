import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { EnterateComponent } from './pages/enterate/enterate.component';
import { DatosAbiertosComponent } from './pages/datos-abiertos/datos-abiertos.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';
import { ZonaPrensaComponent } from './pages/zona-prensa/zona-prensa.component';
import { PensionistasComponent } from './pages/enterate/pensionistas/pensionistas.component';
import { AfiliadosComponent } from './pages/enterate/afiliados/afiliados.component';

const routes: Routes = [
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
  {
    path: 'Inicio',
    component: InicioComponent,
  },
  {
    path: 'Enterate',
    component: EnterateComponent,
  },
  {
    path: 'DatosAbiertos',
    component: DatosAbiertosComponent,
  },
  {
    path: 'Publicaciones',
    component: PublicacionesComponent,
  },
  {
    path: 'ZonaPrensa',
    component: ZonaPrensaComponent,
  },
  {
    path: 'Pensionistas', component: PensionistasComponent
  },
  {
    path: 'Afiliados', component: AfiliadosComponent
  },
  // {
  //   path: 'OnpVirtual',
  //   component: OnpVirtualComponent,
  // },
  { path: '**', redirectTo: '/Inicio', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
