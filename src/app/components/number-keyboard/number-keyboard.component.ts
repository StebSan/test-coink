import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-number-keyboard',
  templateUrl: './number-keyboard.component.html',
  styleUrls: ['./number-keyboard.component.scss'],
})
export class NumberKeyboardComponent {

  @Output() valueChange = new EventEmitter<string>();
  @Output() confirm = new EventEmitter<boolean>();

  phone: string = '';

  onKeyClick(key: string | number) {
    if (key === 'back') {
      this.phone = this.phone.slice(0, -1);

    } else if (key === 'confirm') {
      this.confirm.emit(true);

    } else {
      if(this.phone.length <= 9){
        this.phone += key;
      }
    }

    this.valueChange.emit(this.phone);
  }

}
