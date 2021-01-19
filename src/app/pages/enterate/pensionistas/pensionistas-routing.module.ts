import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PensionistasComponent } from './pensionistas.component';

const routes: Routes = [{ path: '', component: PensionistasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PensionistasRoutingModule {}