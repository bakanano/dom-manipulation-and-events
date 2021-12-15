window.addEventListener("keydown", playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) {
        return;
    } else {
        key.classList.add("playing")
        audio.currentTime = 0;
        audio.play();
    }
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeEffect));

function removeEffect(e) {
    if (e.propertyName !== "transform") {
        return;
    } else {
        e.target.classList.remove("playing");
    }
}

