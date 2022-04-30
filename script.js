// This code is for changing the color
let box = document.getElementById("box");
let text = document.getElementById("text");

function random(num) {
    return Math.floor(Math.random()*(num+1));
}

function colorChange() {
    const clr = "rgb("+random(255)+","+random(255)+","+random(255)+")";
    box.style.backgroundColor = clr;
    text.innerHTML = clr;
}

// This code is for copy the text
function copyText() {

    if(text.innerText == "") {
        alert("Nothig to copy!!");
    }
    else {
        navigator.clipboard.writeText(text.innerText);
        alert("Text copied");
    }
}