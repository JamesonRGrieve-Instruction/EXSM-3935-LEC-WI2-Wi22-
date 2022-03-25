let inputBar = document.querySelector("#input");
let outputPanel = document.querySelector("#output");

let proceed = false;
const timeout = async ms => new Promise(res => setTimeout(res, ms));
function output(string, type="normal") {
    // Anything passed into here will be printed in the web page.
    let newP = document.createElement("p");
    newP.innerText = String(string).replaceAll(' ', '\xa0');
    if (type != "normal")
    {
        newP.classList.add(type);
    }
    document.querySelector("#output").appendChild(newP);
}
async function input(string) {
    let newP = document.createElement("p");
    newP.innerHTML = string + '<span class="editing"></span>';
    document.querySelector("#output").appendChild(newP);
    inputBar.focus();
    while (proceed === false) { await timeout(500); newP.classList.length === 0 ? newP.classList.add("flash") : newP.classList.remove("flash"); }
    let text = inputBar.value;
    inputBar.value = "";
    newP.classList.remove("flash");
    newP.querySelector("span").classList.remove("editing");
    proceed = false;
    return text;
}
function submit() {
    proceed = true;
}
inputBar.addEventListener("keyup", function(event) {
    document.querySelector(".editing").innerText = inputBar.value.replaceAll(' ', '\xa0');
    if (event.keyCode === 13) {
      event.preventDefault();
      submit();
    }
  });
outputPanel.addEventListener("click", function(event) {
    inputBar.focus();
});

function refreshTheme()
{
    let body = document.querySelector("body");   
    body.classList.remove(...body.classList);
    body.classList.add(localStorage.getItem('exsm3935-theme'));
}
for (item of document.querySelectorAll(".theme"))
{
    item.addEventListener("click", function(event) {
        localStorage.setItem('exsm3935-theme', event.target.classList[0]);
        refreshTheme();
    });
}
async function run() {
    await main().catch((e) => output("\n---UNHANDLED EXCEPTION---\n"+e.stack, "error"));
    output("\nEnd of program, please refresh the page (F5) to restart the program.", "meta");
}
refreshTheme();
run();