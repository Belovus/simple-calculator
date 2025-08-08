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

  initKeyboard = () => {}

  clear = () => {}

  backspace = () => {}

  calculate = () => {}

  addToDisplay = () => {}
}

new Calculator();
