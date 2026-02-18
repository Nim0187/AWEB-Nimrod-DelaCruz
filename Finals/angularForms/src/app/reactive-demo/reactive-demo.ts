import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-demo.html',
  styleUrl: './reactive-demo.css'
})
export class ReactiveDemoComponent {
  departments  = ['Engineering', 'Marketing', 'Finance', 'Operations', 'Human Resources', 'Legal'];
  submitted    = false;
  showPassword = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullname:   ['', [Validators.required, Validators.minLength(3)]],
      email:      ['', [Validators.required, Validators.email]],
      password:   ['', [Validators.required, Validators.minLength(8)]],
      employeeId: ['', [Validators.required, Validators.pattern(/^EMP-\d{5}$/)]],
      department: ['Engineering', Validators.required],
      gender:     ['', Validators.required],
      status:     ['', Validators.required],
      startDate:  ['', Validators.required],
      bio:        ['']
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
