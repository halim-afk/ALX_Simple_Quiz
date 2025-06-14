// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Cannot divide by zero";
    }
    return number1 / number2;
}

// Helper function to get input values
function getInputValues() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    return [number1, number2];
}

// Helper function to display result
function displayResult(value) {
    document.getElementById("calculation-result").textContent = value;
}

// Event listeners
document.getElementById("add").addEventListener("click", function () {
    const [n1, n2] = getInputValues();
    displayResult(add(n1, n2));
});

document.getElemen
