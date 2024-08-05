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
  values: string[] = ["%", "CE", "C", "<x", "1/x", "x^2", "sqrt(x)", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ".", "="];

  outputValue: string = "";
  historyValue: string = ""

  onButtonPressReceive(value: string): void {
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
        this.handleNumberPress(value);
        break;
      
      case "1/x":
        this.handleInverseOperation(value);
        break;
      
      case "sqrt(x)":
        this.handleSQRTOperation(value);
        break;

      case "x^2":
        this.handleSquareOperation(value);
        break;

      case "+/-":
        this.handleNegationOperation(value);
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
        this.handleBinaryOperation(value);
        break;

      case "=":
        this.handleEqualOperation(value);
        break;

      default:
        this.outputValue = "";
        this.historyValue = "";
    }
 
  }

  handleNumberPress(value: string): void {
    if(this.outputValue) {
      if (value != "0" && this.outputValue.startsWith("0") && this.outputValue.length === 1) {
        this.outputValue = value;
      } else {
        this.outputValue += value;
      }
      
    } else if(!this.outputValue){
      this.outputValue = value;
    }
  }

  handleInverseOperation(value: string): void {
    if(this.outputValue) {
      this.historyValue = `1/${this.outputValue}`;
      this.outputValue = (1 / Number(this.outputValue)).toString();
    }
  }

  handleSQRTOperation(value: string): void {
    if(this.outputValue) {
      this.historyValue = `sqrt(${this.outputValue})`;
      this.outputValue = (Math.sqrt(Number(this.outputValue))).toString();
    }
  }

  handleEqualOperation(value: string): void {
    if(this.historyValue) {
      this.historyValue += this.outputValue;
      this.outputValue = eval(this.historyValue);
    }
  }

  handleBinaryOperation(value: string): void {
    if(this.outputValue) {
      this.historyValue += `${this.outputValue} ${value} `;
      this.outputValue = "";
    }
  }

  handleNegationOperation(value: string): void {
    if(this.outputValue) {
      if(!this.outputValue.startsWith("-")) {
        this.outputValue = "-".concat(this.outputValue);
      } else {
        this.outputValue = this.outputValue.slice(1);
      }
    }
  }

  handleSquareOperation(value: string): void {
    if(this.outputValue) {
      this.historyValue = `${this.outputValue} ^ 2`;
      this.outputValue = (Math.pow(Number(this.outputValue), 2)).toString();
    }
  }
}
