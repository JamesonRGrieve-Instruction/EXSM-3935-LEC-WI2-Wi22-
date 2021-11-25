async function main() {
    // This is where the code you're actually experimenting with goes.
    print("Hello, world!");
    
    let name = await input("Please enter your name: ");

    print("Hello, "+name+"!");
}
main();
