class Calculator {
  constructor() {
    this.display = document.getElementById('display');
    this.initEvents()
    this.initKeyboard()
    this.operatorSelected = false;
  }

  initEvents() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('click', (event) => this.handleClick(event));
    })
  }

  handleClick(event) {
    const value = event.target.textContent;

    if (value === 'C') {
      this.clear()
    }
    else if (value === '⌫') {
      this.backspace()
    }
    else if (value === '=') {
      this.calculate()
    }
    else {
      this.addToDisplay(value)
    }
  }

  initKeyboard = () => {
    document.addEventListener('keydown', (e) => {
      const key = e.key;

      if (/[0-9+\-*/.%]/.test(key) || key === 'Enter' || key === 'Escape' || key === 'Backspace') {
        e.preventDefault();

        if (key === 'Enter') {
          this.calculate();
        } else if (key === 'Escape') {
          this.clear();
        } else if (key === 'Backspace') {
          this.backspace();
        } else {
          this.addToDisplay(key);
        }
      }
    });
  }

  clear = () => {
    this.display.value = '';
    this.operatorSelected = false;
  }

  backspace = () => {
    this.display.value = this.display.value.slice(0, -1);
    const lastChar = this.display.value[this.display.value.length - 1];
    this.operatorSelected = /[+\-*/.]/.test(lastChar);
  }

  calculate() {
    try {
      const expression = this.display.value;

      const sanitized = expression.replace(/[^0-9+\-*/.%]/g, '');

      if (sanitized.includes('/0') && !sanitized.includes('/0.')) {
        return Infinity;
      }

      const result = new Function(`return ${sanitized}`)();

      if (result === Infinity || result === -Infinity) {
        this.display.value = 'Error';
      } else {
        this.display.value = result;
      }
    } catch (error) {
      this.display.value = 'Error';
    }
    this.operatorSelected = false;
  }

  addToDisplay = () => {
    const currentValue = this.display.value;

    if (/[+\-*/.]/.test(value)) {
      if (this.lastInputWasOperator || currentValue === '') {
        return;
      }
      this.lastInputWasOperator = true;
    } else {
      this.lastInputWasOperator = false;
    }

    this.display.value += value;
  }
}

new Calculator();
