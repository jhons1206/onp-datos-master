import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';

import { NgCarouselModule } from '@silmar/ng-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FacilComponent } from './facil.component';
import { FacilRoutingModule } from './facil-routing.module';


@NgModule({
  declarations: [FacilComponent],
  imports: [
    CommonModule,
    FacilRoutingModule,
    HammerModule,
    BrowserAnimationsModule,    
    FormsModule,
    NgCarouselModule,
  ]
})
export class FacilModule { }
