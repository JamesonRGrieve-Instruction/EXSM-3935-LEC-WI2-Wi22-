let inputBar = document.querySelector("#inputBar");
let proceed = false;
const timeout = async ms => new Promise(res => setTimeout(res, ms));
function print(string) {
    // Anything passed into here will be printed in the web page.
    let newP = document.createElement("p");
    newP.innerText = string;
    document.querySelector("#output").appendChild(newP);
}
async function input(string) {
    // Anything passed into here will be prompted to the user, and then grab what the user enters.
    let newP = document.createElement("p");
    newP.innerHTML = string + '<span class="editing"></span>';
    document.querySelector("#output").appendChild(newP);
    inputBar.focus();
    while (proceed === false) { await timeout(500); newP.classList.length === 0 ? newP.classList.add("flash") : newP.classList.remove("flash"); }
    let text = inputBar.value;
    inputBar.value = "";
    newP.classList.remove("flash");
    proceed = false;
    return text;
}
function submit() {
    proceed = true;
}
inputBar.addEventListener("keyup", function(event) {
    console.log(inputBar.value);
    document.querySelector(".editing").innerText = inputBar.value;
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("inputButton").click();
    }
  });
 
