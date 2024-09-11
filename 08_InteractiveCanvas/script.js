const settingsPanel = document.querySelector(".settings-panel");
const closeBtn = document.querySelector(".close-btn");
const settingsVertical = document.querySelector(".settings-vertical");

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const colorChoose = document.querySelector(".color-choose");
const colorRainbow = document.querySelector(".color-rainbow");
const brushSize = document.querySelector(".brush-size");

canvas.width = window.innerWidth - 15;
canvas.height = window.innerHeight - 15;

ctx.strokeStyle = '#000000';
ctx.lineCap = "round";
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

let rainbowMode = false;
let chooseColor = false;

function draw(e) {
    if (!isDrawing) return;
    if (rainbowMode) {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        if (hue >= 360) hue = 0;
        hue++;
    } else {
        ctx.strokeStyle = colorChoose.value;
    }
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function closeSettingsPanel() {
    settingsPanel.classList.add("close");
    settingsVertical.classList.add("open");
}

function openSettingsPanel() {
    settingsPanel.classList.remove("close");
    settingsVertical.classList.remove("open");
}

function toggleRainbowMode(e) {
    rainbowMode = !rainbowMode;
    this.classList.toggle("clicked");
}

function toggleChooseColor() {
    chooseColor = !chooseColor;
}

function adjustColor(e) {
    ctx.strokeStyle = this.value;
}

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
});

function adjustBrushSize(e) {
    ctx.lineWidth = this.value;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);

closeBtn.addEventListener("click", closeSettingsPanel);
settingsVertical.addEventListener("click", openSettingsPanel);

colorChoose.addEventListener("click", toggleChooseColor);
colorChoose.addEventListener("input", adjustColor);
colorRainbow.addEventListener("click", toggleRainbowMode);

brushSize.addEventListener("input", adjustBrushSize);

