function insertSymbol(symbol) {
    document.getElementById("calc-display").value += symbol;
  }
  
  function resetDisplay() {
    document.getElementById("calc-display").value = "";
  }
  
  function removeLast() {
    let displayValue = document.getElementById("calc-display").value;
    document.getElementById("calc-display").value = displayValue.slice(0, -1);
  }
  
  function computeResult() {
    let displayValue = document.getElementById("calc-display").value;
    try {
      document.getElementById("calc-display").value = eval(displayValue);
    } catch (error) {
      document.getElementById("calc-display").value = "Invalid";
    }
  }
  