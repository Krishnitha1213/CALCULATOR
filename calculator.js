const displayElement = document.querySelector('#display');

function clearDisplay() {
    displayElement.textContent = '0';
}

function appendToDisplay(value) {
    if (displayElement.textContent === '0') {
      displayElement.textContent = value;
    } else {
      displayElement.textContent += value;
    }
  }

  deleteLast = () => {
    if(displayElement.textContent.length > 1){
        displayElement.textContent = displayElement.textContent.slice(0, -1)
    } else {
        displayElement.textContent = '0';
    }
  }

  function calculateResult() {
    let expression = displayElement.textContent;
    expression=expression.replace(/%/g, "/100");

    try {
      displayElement.textContent = eval(displayElement.textContent);
    } catch (error) {
      displayElement.textContent = "Error";
    }
  }