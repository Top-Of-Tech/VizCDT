const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
let color = "#000000";
let width = 25;
let drawing = false;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 150;
}

function change_color(element) {
    color = element;
}

function change_pen_size() {
    width = document.querySelector(".pen-size").value;
}

function change_custom_color() {
    color = document.querySelector(".custom-color").value;
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function start(e) {
    drawing = true;
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.beginPath();
}

function draw(e) {
    if (drawing == true) {
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
    }
}

function stop(e) {
    drawing = false;
    ctx.closePath();
}

resizeCanvas();

window.addEventListener("resize", function(e) {
    drawing = true;
    resizeCanvas();
});

window.addEventListener("mousedown" , start);
window.addEventListener("touchstart", start);
window.addEventListener("mousemove" , draw);
window.addEventListener("touchmove" , draw);
window.addEventListener("mouseup" , stop);
window.addEventListener("touchend" , stop);

document.querySelector(".clear").onclick = clear;