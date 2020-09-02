import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-two',
  template: `
    <p>
      lazy-two works!
    </p>
  `,
  styles: [
  ]
})
export class LazyTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
