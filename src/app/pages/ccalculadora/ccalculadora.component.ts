import { Component } from '@angular/core';

@Component({
  selector: 'app-ccalculadora',
  templateUrl: './ccalculadora.component.html',
  styleUrls: ['./ccalculadora.component.scss']
})
export class CcalculadoraComponent {
  displayValue: string = '0';
  showCalculator: boolean = true;
  storedValue: string = '';
  operator: string = '';
  lastClickedWasOperator: boolean = false;
  

  appendNumber(num: number) {
    if (this.displayValue === '0' || this.lastClickedWasOperator) {
      this.displayValue = num.toString();
    } else {
      this.displayValue += num.toString();
    }
    this.lastClickedWasOperator = false;
  }

  addDecimalPoint() {
    if (!this.displayValue.includes('.')) {
      this.displayValue += '.';
    }
  }

  clearDisplay() {
    this.displayValue = '0';
    this.storedValue = '';
    this.operator = '';
    this.lastClickedWasOperator = false;
  }

  backspaceKey() {
    if (this.displayValue.length > 1) {
      this.displayValue = this.displayValue.slice(0, -1);
    } else {
      this.displayValue = '0';
    }
  }

  changeSignValue() {
    if (this.displayValue !== '0') {
      if (this.displayValue.startsWith('-')) {
        this.displayValue = this.displayValue.slice(1);
      } else {
        this.displayValue = '-' + this.displayValue;
      }
    }
  }

  setOperatorValue(op: string) {
    if (!this.lastClickedWasOperator) {
      this.operator = op;
      this.storedValue = this.displayValue;
      this.lastClickedWasOperator = true;
    }
  }

  calculateResult() {
    if (this.operator !== '' && !this.lastClickedWasOperator) {
      const num1 = parseFloat(this.storedValue);
      const num2 = parseFloat(this.displayValue);
      let result: number;
      switch (this.operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case 'x':
          result = num1 * num2;
          break;
        case '/':
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            result = NaN;
          }
          break;
        default:
          result = NaN;
      }
      if (!isNaN(result)) {
        this.displayValue = result.toString();
      } else {
        this.displayValue = 'Error';
      }
      this.storedValue = '';
      this.operator = '';
      this.lastClickedWasOperator = true;
    }
  }

  addValue() {
    this.setOperatorValue('+');
  }

  subtractValue() {
    this.setOperatorValue('-');
  }

  multiplyValue() {
    this.setOperatorValue('x');
  }

  divideValue() {
    this.setOperatorValue('/');
  }
}