import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterArPage } from './register-ar.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterArPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterArPageRoutingModule {}
