import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-playfab',
  templateUrl: './playfab.component.html',
  styleUrls: ['./playfab.component.scss'],
})
export class PlayfabComponent {
  validateForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private store: Store,
  ) {
    this.validateForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      // repeatPassword: ['', [Validators.required]],
    });
  }

  submitForm() {
    console.log('submitForm', this.validateForm.getRawValue());
  }
}
