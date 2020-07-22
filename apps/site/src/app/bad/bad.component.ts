import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'a11y-forms-bad',
  templateUrl: './bad.component.html',
  styleUrls: ['./bad.component.scss'],
})
export class BadComponent implements OnInit {
  form = this.fb.group({
    firstName: '',
    lastName: '',
    age: 18,
    phone: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {}
}
