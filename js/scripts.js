async function main() {
    greeting();

    greet("James");
    greet("John");
    greet("Jane");

    output(giveMePi());
    output(addThese(42, 12));
}

// Function with no parameters and no returns.
function greeting() {
    output("Hello.");
    output("How are you?");
    output("How's the weather?");
}

// Function with a single parameter and no returns.
function greet(person) {
    output(`Hello, ${person}! How are you?`);
}

// Function with no parameters and a return.
function giveMePi() {
    return 3.141592654;
}

// Function with two parameters and a return.
function addThese(number1, number2)
{
    return number1 + number2;
}