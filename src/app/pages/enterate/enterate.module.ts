import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { NgCarouselModule } from '@silmar/ng-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EnterateRoutingModule } from './enterate-routing.module';

import { EnterateComponent } from './enterate.component';
import { PensionistasComponent } from './pensionistas/pensionistas.component';
import { AfiliadosComponent } from './afiliados/afiliados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [EnterateComponent, PensionistasComponent, AfiliadosComponent],
  imports: [
    CommonModule,
    HammerModule,
    NgCarouselModule,
    EnterateRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule, 
  ], 
})
export class EnterateModule {
  
}
