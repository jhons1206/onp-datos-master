import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { FacilComponent } from './facil.component';

const routes: Routes = [{ path: '', component: FacilComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilRoutingModule {}
