import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RatingInputComponent } from '@shared/components/rating-input/rating-input.component';
import { EmailValidator } from '@shared/utils/email.validator';

@Component({
  selector: 'review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.sass']
})
export class ReviewFormComponent implements AfterViewInit {
  @ViewChild(RatingInputComponent) ratingInput: RatingInputComponent;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      rateCount: [''],
      comment: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(400)
        ]
      ],
      email: ['', [Validators.required, EmailValidator.validateEmail]]
    });
  }

  ngAfterViewInit() {}

  handleSubmit() {
    console.log(this.form.value);
    alert('Danke für Ihr Bewertung! Die daten sind auf dem console gelegt.');

    this.form.reset({
      rateCount: '',
      comment: '',
      email: ''
    });
  }

  get comment() {
    return this.form.get('comment');
  }

  get email() {
    return this.form.get('email');
  }
}
