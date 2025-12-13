const body = document.body;
const card = document.getElementById("card");
const countEl = document.getElementById("count");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");

let count = 0;

body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.background = "#f5f5f5";


card.style.background = "black";
card.style.color = "white";
card.style.padding = "40px";
card.style.borderRadius = "25px";
card.style.textAlign = "center";
card.style.boxShadow = "0 0 20px red";

const buttons = [inc, dec, reset];
buttons.forEach(btn => {
    btn.style.margin = "5px";
    btn.style.padding = "6px 12px";
    btn.style.cursor = "pointer";
});

inc.onclick = () => {
    count++;
    countEl.innerText = count;
};

dec.onclick = () => {
    count--;
    countEl.innerText = count;
};

reset.onclick = () => {
    count = 0;
    countEl.innerText = count;
};
