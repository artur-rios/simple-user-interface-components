import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SuicButtonComponent } from './button/button.component';
import { SuicInputComponent } from './input/input.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [SuicButtonComponent, SuicInputComponent, NavbarComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SuicButtonComponent, SuicInputComponent, NavbarComponent],
})
export class SuicModule {}
