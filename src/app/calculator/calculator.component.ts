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
  values = ["%", "CE", "C", "<x", "1/x", "x^2", "sqrt(x)", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ".", "="];

  outputValue = "";
  historyValue = ""

  onButtonPressReceive(value: string) {
    switch(value) {

      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":

        if(this.outputValue) {
          if (value != "0" && this.outputValue.startsWith("0") && this.outputValue.length === 1) {
            this.outputValue = value;
          } else {
            this.outputValue += value;
          }
          
        } else if(!this.outputValue){
          this.outputValue = value;
        }
        break;
      
      case "1/x":
        if(this.outputValue) {
          this.historyValue = `1/${this.outputValue}`;
          this.outputValue = (1 / Number(this.outputValue)).toString();
        }
        break;
      
      case "sqrt(x)":
        if(this.outputValue) {
          this.historyValue = `sqrt(${this.outputValue})`;
          this.outputValue = (Math.sqrt(Number(this.outputValue))).toString();
        }
        break;

      case "x^2":
        if(this.outputValue) {
          this.historyValue = `${this.outputValue} ^ 2`;
          this.outputValue = (Math.pow(Number(this.outputValue), 2)).toString();
        }
        break;

      case "+/-":
        if(this.outputValue) {
          if(!this.outputValue.startsWith("-")) {
            this.outputValue = "-".concat(this.outputValue);
          } else {
            this.outputValue = this.outputValue.slice(1);
          }
        }
        break;

      case ".":
        if(this.outputValue) {
          this.outputValue = this.outputValue.concat(".");
        }

        break;

      case "<x":
        this.outputValue = this.outputValue.slice(0, this.outputValue.length - 1);
        break;

      case "+":
      case "-":
      case "/":
      case "*":
      case "%":
        if(this.outputValue) {
          this.historyValue += `${this.outputValue} ${value} `;
          this.outputValue = "";
        }
        break;

      case "=":
        if(this.historyValue) {
          this.historyValue += this.outputValue;
          this.outputValue = eval(this.historyValue);
        }
        break;

      default:
        this.outputValue = "";
        this.historyValue = "";
    }
  }
}
