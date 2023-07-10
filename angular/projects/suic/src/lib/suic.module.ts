import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuicButtonComponent } from './button/button.component';

@NgModule({
  declarations: [SuicButtonComponent],
  imports: [CommonModule],
  exports: [SuicButtonComponent],
})
export class SuicModule {}
