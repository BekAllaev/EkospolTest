import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhoneNumbers } from './phone-numbers';

@NgModule({
  declarations: [
    PhoneNumbers
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PhoneNumbers
  ]
})
export class PhoneNumbersModule { }
