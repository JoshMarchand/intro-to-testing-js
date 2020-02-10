// helloWorld function 
function helloWorld() {
    return "Hello, World!"
}

function sayHello(name) {
    if (typeof name === 'string') {
        return 'Hello, ' + name + '!';
    } else {
        return "Hello, World!"
    }
    // if (typeof name === 'boolean' || name === '') {
    //     return "Hello, World!"
    // }
}

function isFive(input) {
    return !!input;
}

function isEven(input) {
    return  parseFloat(input) % 2 === 0;
}

function isVowel(input) {
    return input === 'y' || input === 4 || typeof input === 'boolean' || (typeof input === 'string' && input.length > 1) ? false : !!input;
}

function add(num1, num2) {
return !isNaN(num2) && !isNaN(num1) ? (parseFloat(num1)) + (parseFloat(num2)) : 'NaN';
}