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

}
