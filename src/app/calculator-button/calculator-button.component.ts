import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  standalone: true,
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css'
})
export class CalculatorButtonComponent {
  @Input() displayNumber: string = '';
  @Output() onButtonPress: EventEmitter<string> = new EventEmitter<string>();

  onPress(param: any){
    this.onButtonPress.emit(param.innerText);
  }
}
