import { NgModule } from '@angular/core';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ReviewFormComponent],
  imports: [SharedModule],
  exports: [ReviewFormComponent]
})
export class ReviewModule {}
