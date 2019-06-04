import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingInputComponent } from './components/rating-input/rating-input.component';

@NgModule({
  declarations: [RatingInputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RatingInputComponent
  ]
})
export class SharedModule {}
