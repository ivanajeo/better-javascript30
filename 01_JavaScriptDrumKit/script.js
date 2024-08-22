const keys = document.querySelectorAll(".key");

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
}

function removePlayingClass(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.remove("playing");
}


window.addEventListener("keydown", playSound);
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keyup", removePlayingClass);