import { Component } from '@angular/core';
import { CalculatorButtonComponent } from "../calculator-button/calculator-button.component";
import { CalculatorOutputComponent } from "../calculator-output/calculator-output.component";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CalculatorButtonComponent, CalculatorOutputComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  values = ["%", "CE", "C", "<x", "1/x", "x^2", "sqrt(x)", "/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ".", "="];

  outputValue = '';
  onButtonPressReceive(value: string) {
    this.outputValue = value;
  }
}
