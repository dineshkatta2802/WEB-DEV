window.addEventListener("keydown",function(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.play();
    audio.currentTime = 0;

    //Adding animations to the box 
    const key = this.document.querySelector(`.box[data-key="${e.keyCode}"]`);
    key.classList.add('animation');
});

window.addEventListener("keyup", function (e) {
    const key = document.querySelector(`.box[data-key="${e.keyCode}"]`);
    if (key) {
        key.classList.remove("animation"); // Remove animation on key release
    }
});