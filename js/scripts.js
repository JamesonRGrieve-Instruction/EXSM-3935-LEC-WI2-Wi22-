async function main() {
    /*
    1. Write a cashing program that takes three user inputs
        ☑ a. Total cost of goods
        ☑ b. Cash payment from the customer
        ☑ c. Discount codes (use a switch or series of ‘else if’ statement for this)
            Discount code input of 0 gives no discount
            Discount code input of 1 gives 10% off order
            Discount code input of 2 gives 15% off order
            Discount code input of 3 gives 25% off order
            Discount code input of 4 gives 35% off order
            Discount code input of 5 gives 40% off order
    2. If the total of cash payment from the customer subtracted by the total cost of goods is a negative amount, output the message “Insufficient Payment!”
    3. Otherwise, print out the amount of change that the customer should receive, after taking into account the discount code\
    */

    // Get input from the user for our 3 values, and store them in variables to reference later.
    let totalCost = await input("Please enter the total cost of your goods: ");
    let cashProvided = await input("Please enter the amount of cash you are providing: ");
    let discountCode = await input("Please enter a discount code (or 0 for no code): ");
    let discountPercentage;

    if (discountCode == "1")
    {
        discountPercentage = 0.1;
    }
    else if (discountCode == "2")
    {
        discountPercentage = 0.15;
    }
    else if (discountCode == "3")
    {
        discountPercentage = 0.25;
    }
    else if (discountCode == "4")
    {
        discountPercentage = 0.35;
    }
    else if (discountCode == "5")
    {
        discountPercentage = 0.40;
    }
    else
    {
        discountPercentage = 0;
    }

    let discountedTotal = totalCost * (1-discountPercentage);

    // If the total is greater than the amount of cash the customer gave us, then it's not enough money.
    if (discountedTotal > cashProvided)
    {
        output("Insufficient Payment!");
    }
    else
    {
        output("Thank you for your business, your change is $"+(cashProvided-discountedTotal)+".");
    }
}
