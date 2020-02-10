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