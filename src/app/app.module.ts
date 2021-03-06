 import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgCarouselModule} from '@silmar/ng-carousel';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSlickJsModule } from "ngx-slickjs";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    ComponentsModule,
    AppRoutingModule,
    NgCarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,  
    NgxSpinnerModule, 
    NgxSlickJsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
