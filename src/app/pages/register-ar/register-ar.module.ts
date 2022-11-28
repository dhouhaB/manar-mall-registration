import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterArPageRoutingModule } from './register-ar-routing.module';

import { RegisterArPage } from './register-ar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterArPageRoutingModule
  ],
  declarations: [RegisterArPage]
})
export class RegisterArPageModule {}
