import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'a11y-forms-card',
  template: `
    <section class="card">
      <ng-content></ng-content>
    </section>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
