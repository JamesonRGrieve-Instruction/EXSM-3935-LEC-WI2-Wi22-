async function main() {
    /* 
    ☑ -Make a 2D array with the item code, followed by the item name, and then the price (for example: [[1234, ‘Apple’, 0.75], [1235, ‘Orange’, 0.99]])
    ☑ -Initiate a variable to keep track of the total price
    ☑ -Initiate an array to keep track of the receipt contents
    ☑ -When the user enters an item code, 
        ☑ use a loop to go through every product available to see 
            ☑ if the product exists, if it exists, 
                ☑ the item name should be added to the receipt array and 
                ☑ the price should be added to the total price variable 
    ☑ -If the product does not exist, the program should output the message “No such product found.” and prompt the user to enter another product code - the program should not terminate!
    ☑ -When the user inputs “END”, your program should display the total price, followed by the receipt items
    ☑ -Use a loop to keep the program running, with the loop break condition being when the user inputs “END”
    */
    let priceArray =
        [
            [1234, "Apple", 0.40],
            [1235, "Orange", 0.45],
            [1236, "Banana", 0.65],
            [1237, "Pear", 0.30]
        ];

    let totalPrice = 0;

    let receiptArray = [];

    let userInput;
    do {
        let found;
        do {
            userInput = (await input("Please enter an item code: ")).toUpperCase().trim().split("").join("-").replaceAll("-", "");
            // " end", " END", "END", ["E", "N", "D"], "E-N-D", "END"


            /*
            userInput = await input("Please enter an item code: ");
            userInput = userInput.toUpperCase();
            userInput = userInput.trim();
            */

            found = false;
            for (let i = 0; i < priceArray.length; i++) {
                // Check the current row at index 0 (item codes) to see if it's what we're looking for.
                if (priceArray[i][0] == userInput) {
                    found = true;
                    receiptArray.push(priceArray[i][1]);
                    totalPrice += priceArray[i][2];
                }
            }
            // Override our boolean if the sentinel value for the outer loop is met. This cleans up our following condition logic.
            if (userInput == "END") {
                found = true;
            }
            if (!found) {
                output("No such product found.");
            }
            // If found == false and userInput == "END" we want to exit the loop, so the condition needs to be false.
        } while (!found);
    } while (userInput != "END");
    output("You have spent a total of $" + Math.round(totalPrice * 100) / 100 + " on the items: " + receiptArray + ".");
}
