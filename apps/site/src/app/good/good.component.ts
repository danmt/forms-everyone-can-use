import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as to from 'to-case';

@Component({
	selector: 'a11y-forms-good',
	templateUrl: './good.component.html',
	styleUrls: ['./good.component.scss'],
})
export class GoodComponent implements OnInit {
	form = this.fb.group({
		firstName: ['', [Validators.required]],
		lastName: ['', [Validators.required]],
		birthday: null,
	});
	submitted = false;
	validationErrors = [];
	@ViewChild('validationErrorsTemplate') validationErrorsTemplate: ElementRef;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {}

	submit() {
		this.submitted = true;

		if (this.form.invalid) {
			this.validationErrors = Object.keys(this.form.controls)
				.filter((fieldName) => {
					const fieldControl = this.form.get(fieldName);
					return fieldControl && fieldControl.invalid;
				})
				.map((fieldName) => ({
					name: `${to.title(fieldName)}`,
					id: `/good#${fieldName}`,
				}));
			this.validationErrorsTemplate.nativeElement.focus();
		}
	}

	reset() {
		this.form.reset();
		this.submitted = false;
		this.validationErrors = [];
	}
}
