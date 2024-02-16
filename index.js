let number = 0;
const soln = document.getElementById("number")
soln.innerText = number;
console.log("executed")

function decrease() {
    number = number - 1;
    soln.innerText = number;
    if (number < 0) soln.style.color = "red";
    if (number == 0) soln.style.color = "black";
}
function reset() {
    number = 0;
    soln.innerText = number;
    soln.style.color = "black";
}
function increase() {
    number = number + 1;
    soln.innerText = number;
    if (number > 0) soln.style.color = "green";
    if (number == 0) soln.style.color = "black";
}

