async function main() {
    // This is where the code you're actually experimenting with goes.
    print("Hello, world!");
    
    let name = await input("Please enter your name: ");

    while (name != "bob") 
    {
        print("Hello, "+name+"!");
        name = await input("Please enter your name: ");
    }
}
main();
