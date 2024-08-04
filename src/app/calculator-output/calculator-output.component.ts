import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-output',
  standalone: true,
  imports: [],
  templateUrl: './calculator-output.component.html',
  styleUrl: './calculator-output.component.css'
})
export class CalculatorOutputComponent {
  @Input() value: string = "";
  @Input() history: string = "";
}
