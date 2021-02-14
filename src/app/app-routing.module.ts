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
import { ActuarialInformationComponent } from './pages/publicaciones/actuarial-information/actuarial-information.component';
import { FacilComponent } from './pages/facil/facil.component';
import { AseguraComponent } from './pages/facil/asegura/asegura.component';
import {BeneficiosComponent } from './pages/facil/beneficios/beneficios.component';
import {UneteComponent } from './pages/facil/unete/unete.component';
import {AfpComponent } from './pages/facil/afp/afp.component';
import {FinanciamientoComponent } from './pages/facil/financiamiento/financiamiento.component';
import { InformesInstitucionalesComponent } from './pages/publicaciones/informes-institucionales/informes-institucionales.component';
import { PresentacionesComponent } from './pages/publicaciones/presentaciones/presentaciones.component';
import { MemorialesAnualesComponent } from './pages/publicaciones/memoriales-anuales/memoriales-anuales.component';
import { EstudiosPrevisionalesComponent } from './pages/publicaciones/estudios-previsionales/estudios-previsionales.component';

const routes: Routes = [
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
  { path: 'Inicio',component: InicioComponent,},
  { path: 'Enterate',component: EnterateComponent, },
  { path: 'DatosAbiertos', component: DatosAbiertosComponent, },
  { path: 'Publicaciones',component: PublicacionesComponent,},
  { path: 'ActuarialInformation/:id',component: ActuarialInformationComponent,canActivate: []},
  { path: 'InformesInstitucionales/:id',component: InformesInstitucionalesComponent,canActivate: []},
  { path: 'Presentaciones',component: PresentacionesComponent,},
  { path: 'MemorialesAnuales',component: MemorialesAnualesComponent,},
  { path: 'EstudiosPrevisionales',component: EstudiosPrevisionalesComponent,},
  { path: 'ZonaPrensa',component: ZonaPrensaComponent,},
  { path: 'Pensionistas', component: PensionistasComponent},
  { path: 'Afiliados', component: AfiliadosComponent},
  { path: 'Facil', component: FacilComponent},
  { path: 'Asegura', component: AseguraComponent},
  { path: 'Beneficios', component: BeneficiosComponent},
  { path: 'Unete', component: UneteComponent},
  { path: 'Afp', component: AfpComponent},
  { path: 'Financiamiento', component: FinanciamientoComponent},
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
