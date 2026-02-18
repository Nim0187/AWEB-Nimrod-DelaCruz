import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-form.html',
  styleUrl: './custom-form.css'
})
export class CustomFormComponent {
  categories = ['Bug Report', 'Feature Request', 'General Inquiry', 'Billing', 'Account Access', 'Performance Issue'];
  submitted  = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name:      ['', [Validators.required, Validators.minLength(2)]],
      email:     ['', [Validators.required, Validators.email]],
      phone:     ['', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]],
      category:  ['', Validators.required],
      priority:  ['', Validators.required],
      subject:   ['', [Validators.required, Validators.minLength(5)]],
      reference: [''],
      message:   ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.submitted = true;
    console.log(this.form.value);
  }

  isInvalid(name: string): boolean {
    const c = this.form.get(name);
    return !!(c?.touched && c?.invalid);
  }
}
