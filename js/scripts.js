async function main() {
    let userNumber = Number(await input("Please enter an integer between 1 and 10: "));
    if (userNumber >= 1 && userNumber <= 10 && Number.isInteger(userNumber))
    {
        output("Validation passed!");
    }
    else
    {
        output("Validation failed.");
    }
}

