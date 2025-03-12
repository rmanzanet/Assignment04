// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    // Perform calculation based on the operation
    switch (operation) {
        case "add":
            return x + y;
        case "subtract":
            return x - y;
        case "multiply":
            return x * y;
        case "divide":
            if (y === 0) {
                alert("Error: Division by zero is not allowed.");
                return null;
            }
            return x / y;
        default:
            return null; // Return null for invalid operations
    }
}

function runCalculator() {
    let result;
    do {
        // COLLECT FIRST NUMBER FROM USER
        let num1 = parseFloat(prompt("Enter the first number:"));
        // Validate if input is a number
        if (isNaN(num1)) {
            alert("Invalid input. Please enter a valid number.");
            continue;
        }

        // COLLECT SECOND NUMBER FROM USER
        let num2 = parseFloat(prompt("Enter the second number:"));
        // Validate if input is a number
        if (isNaN(num2)) {
            alert("Invalid input. Please enter a valid number.");
            continue;
        }

        // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
        let operation = prompt("Enter an operation (add, subtract, multiply, divide):").toLowerCase();

        // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
        result = calculate(num1, num2, operation);

        // Validate if operation was valid
        if (result === null) {
            alert("Invalid operation. Please enter add, subtract, multiply, or divide.");
        }
    } while (result === null); // Repeat if invalid operation

    // Display the result
    alert(`The result is: ${result}`);
}

// Run the calculator
runCalculator();
