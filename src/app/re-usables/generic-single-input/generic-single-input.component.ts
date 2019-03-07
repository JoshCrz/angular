import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'generic-single-input',
  templateUrl: './generic-single-input.component.html',
  styleUrls: ['./generic-single-input.component.css']
})
export class GenericSingleInputComponent implements OnInit {

    @Input() context: string;
    @Input() typeOfInput: any;
    @Input() preSetValue: any = this.preSetValue ? this.preSetValue : null;
    @Output() provideNewValue: EventEmitter<any> = new EventEmitter();     

  constructor() { }

  updateValue = (val) => {
      this.provideNewValue.emit(val)
  }

  ngOnInit() {
  }



}
