const body = document.body;
const btn = document.getElementById("btn");

let isLight = false; // first click → light

btn.onclick = function () {

    if (isLight === false) {
        // LIGHT MODE
        body.style.backgroundColor = "white";
        body.style.color = "black";
        isLight = true;
    } else {
        // DARK MODE
        body.style.backgroundColor = "black";
        body.style.color = "white";
        isLight = false;
    }

};
