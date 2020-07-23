import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'a11y-forms-bad',
  templateUrl: './bad.component.html',
  styleUrls: ['./bad.component.scss'],
})
export class BadComponent implements OnInit {
  form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    age: null,
    phone: ['', [Validators.required]],
  });
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {
    this.submitted = true;
  }

  reset() {
    this.form.reset();
    this.submitted = false;
  }
}
