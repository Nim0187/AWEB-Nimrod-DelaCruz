import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css'
})
export class TemplateDemoComponent {
  fullname   = '';
  email      = '';
  phone      = '';
  studentId  = '';
  course     = '';
  year       = '';
  status     = '';
  scholarship = '';
  notes      = '';
  submitted  = false;

  onSubmit(form: NgForm) {
    if (form.invalid || !this.year || !this.status) {
      Object.values(form.controls).forEach(ctrl => ctrl.markAsTouched());
      return;
    }
    this.submitted = true;
    console.log({
      fullname: this.fullname, email: this.email,
      phone: this.phone, studentId: this.studentId,
      course: this.course, year: this.year,
      status: this.status, scholarship: this.scholarship,
      notes: this.notes
    });
  }
}
