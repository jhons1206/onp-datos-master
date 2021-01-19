import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonaPrensaRoutingModule } from './zona-prensa-routing.module';

import { ZonaPrensaComponent } from './zona-prensa.component';

@NgModule({
  declarations: [ZonaPrensaComponent],
  imports: [CommonModule, ZonaPrensaRoutingModule],
})
export class ZonaPrensaModule {}
