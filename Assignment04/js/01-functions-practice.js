//STEP 1:  Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
function halfNumber(number) {
    let result = number / 2;
    console.log(`Half of ${number} is ${result}.`);
    return result;
}
//STEP 2:  Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber(number) {
    let result = number * number;
    console.log(`The result of squaring the number ${number} is ${result}.`);
    return result;
}
//STEP 3:  Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."
function percentOf(firstNumber, secondNumber) {
    let result = (firstNumber / secondNumber) * 100;
    console.log(`${firstNumber} is ${result}% of ${secondNumber}.`);
    return result;
}

//STEP 4:  Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."
function findModulus(firstNumber, secondNumber) {
    let result = secondNumber % firstNumber;
    console.log(`${result} is the modulus of ${firstNumber} and ${secondNumber}.`);
    return result;
}
