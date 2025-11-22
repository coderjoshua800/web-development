// clear the calculator display
function clearscreen() {
    document.getElementById("result").value = "";
}


// Append the click button's value to the display 
function setscreenvalue(value) {
    document.getElementById("result").value += value;
}

// calculates and display the result 
function calculateresult() {
    const resultElement = document.getElementById("result");
    const expresion =   resultElement.value.trim();


    // check for emty input 
    if (expression === ''){
        resultElement.value = 'enter an expression';
        return;
    }


    // Evaluate expressionand handle errors 
    try {
        resultElement.value = eval(expression);
    } catch (e) {
        resultElement.value = ' invalid expression';
    }
}