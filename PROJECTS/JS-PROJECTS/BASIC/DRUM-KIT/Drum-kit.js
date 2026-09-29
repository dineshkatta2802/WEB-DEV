window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.box[data-key="${e.keyCode}"]`);
    if (!audio || !key) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add("animation");
});

window.addEventListener("keyup", function(e) {
    const key = document.querySelector(`.box[data-key="${e.keyCode}"]`);
    if (key) {
        key.classList.remove("animation");
    }
});
