const inputs = document.querySelectorAll("input");

function updateInput(e) {
    const input = e.target;
    const suffix = input.dataset.sizing || ""; // to add suffix
    if (input.name === "size") {
        const scaleFactor = input.value / 100;
        // ex: 800 * 0.1(or 10%) + px
        document.documentElement.style.setProperty("--width", (800 * scaleFactor) + suffix);
        document.documentElement.style.setProperty("--height", (500 * scaleFactor) + suffix);
    } else {
        document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix);
    }
}


inputs.forEach(input => input.addEventListener("input", updateInput));