import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  template: `
    <nav class="white" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">Logo</a>
        <ul class="right hide-on-med-and-down"></ul>
      </div>
    </nav>
  `,
  styles: [],
})
export class BooksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
