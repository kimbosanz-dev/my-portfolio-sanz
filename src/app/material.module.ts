import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatProgressBarModule,
 } from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule
  ],
})
export class MaterialModule { }
