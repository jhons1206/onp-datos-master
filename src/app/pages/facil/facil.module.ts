import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';

import { NgCarouselModule } from '@silmar/ng-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FacilComponent } from './facil.component';
import { FacilRoutingModule } from './facil-routing.module';
import { AseguraComponent } from './asegura/asegura.component';
import { UneteComponent } from './unete/unete.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { AfpComponent } from './afp/afp.component';
import { FinanciamientoComponent } from './financiamiento/financiamiento.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FacilComponent, AseguraComponent, UneteComponent, BeneficiosComponent, AfpComponent, FinanciamientoComponent],
  imports: [
    //BrowserModule,
    CommonModule,
    FacilRoutingModule,
    HammerModule,
    //BrowserAnimationsModule,    
    FormsModule,
    NgCarouselModule,
    ReactiveFormsModule,
  ]
})
export class FacilModule { }
