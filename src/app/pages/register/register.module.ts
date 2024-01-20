import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormatPhonePipe } from 'src/app/pipes/format-phone.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    RegisterPage,
    FormatPhonePipe
  ]
})
export class RegisterPageModule {}
