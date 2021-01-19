import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterateComponent } from './enterate.component';

const routes: Routes = [{ path: '', component: EnterateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterateRoutingModule {}
