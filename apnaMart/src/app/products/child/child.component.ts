import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [],
})
export class ChildComponent {
  @Input() dataFromParent;
  @Output() dataFromChild = new EventEmitter();

  sendData() {
    this.dataFromChild.emit('hello from child');
  }
}
