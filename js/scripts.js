async function main() {
    
    let userNumber;
    do {
        userNumber = await input("Please enter an integer between 1 and 9: ");
        if (!/^[123456789]$/.test(userNumber))
        {
            output("Error!");
        }
    } while (!/^[123456789]$/.test(userNumber));

}

