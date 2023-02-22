const container = document.getElementById("container");

// const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

// const colors = ["rgb(235,235,223)", "rgb(253,209,36)", "rgb(238,64,137)", "rgb(0,162,191)","rgb(72,92,42)"];

// const colors = ["rgb(249,243,159)", "rgb(232,230,46)", "rgb(127,203,180)", "rgb(197,31,104)","rgb(2,112,112)"];

// const colors = ["rgb(255,191,34)", "rgb(153,161,59)", "rgb(238,87,39)", "rgb(0,139,143)","rgb(137,62,30)"];

// const colors = ["#1BE7FF", "#6EEB83", "#E4FF1A", "#E8AA14", "#FF5714"];

// const colors = ["#f6511d", "#ffb400", "#00a6ed", "#7fb800", "#0d2c54"];

const colors = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];


const squares = 500;

for(let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}

function setColor(square) {
    const colorRandom = colors[Math.floor(Math.random() * colors.length)];

    square.style.backgroundColor = colorRandom;
    square.style.boxShadow = `0 0 2px ${colorRandom}, 0 0 10px ${colorRandom}`;
}

function removeColor(square) {
    square.style.backgroundColor = "#1d1d1d";
    square.style.boxShadow = "0 0 2px #000";
}