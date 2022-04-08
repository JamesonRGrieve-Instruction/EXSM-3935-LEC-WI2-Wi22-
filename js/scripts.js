async function main() {
    let valid;
    do {
        // Set valid to true at the start of each validation loop.
        valid = true;
        // Make an empty errors list.
        let errors = [];
        // Get the input.
        let userNumber = Number(await input("Please enter an integer between 1 and 10: "));
        // Conduct our validation and add an error for each failure. If at least one fails, valid will be false.
        if (userNumber < 1) {
            valid = false;
            errors.push("The number must be greater than or equal to 1.");
        }
        if (userNumber > 10)
        {
            valid = false;
            errors.push("The number must be less than or equal to 10.");
        }
        if (!Number.isInteger(userNumber))
        {
            valid = false;
            errors.push("The number must be an integer.");
        }

        // Based on valid either congratulate or tell them they had errors.
        if (valid) {
            output("Validation passed.")
        }
        else {
            output("Validation failed.\n"+errors.join("\n"));
        }
    } while (!valid);
}

