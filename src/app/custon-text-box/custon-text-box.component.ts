import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custon-text-box',
  templateUrl: './custon-text-box.component.html',
  styleUrls: ['./custon-text-box.component.scss']
})
export class CustonTextBoxComponent {

  @Input() name: any;
  @Input() type: any;
  @Input() placeholder: any;
  @Input() class: any;

  

  @Input() childData: any;
  @Output() childDataChange: EventEmitter<any> = new EventEmitter();
  
  
  onDataChange(value: any) {
    this.childDataChange.emit(value);
  }


}
