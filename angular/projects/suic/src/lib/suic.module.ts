import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SuicButtonComponent } from './button/button.component';
import { SuicInputComponent } from './input/input.component';

@NgModule({
  declarations: [SuicButtonComponent, SuicInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SuicButtonComponent, SuicInputComponent],
})
export class SuicModule {}
