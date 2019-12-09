import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-awesome-lib',
  template: `
    <p>
      my-awesome-lib works!
    </p>
  `,
  styles: []
})
export class MyAwesomeLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
