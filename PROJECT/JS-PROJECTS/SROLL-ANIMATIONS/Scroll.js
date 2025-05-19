let boxes = document.querySelectorAll('.box'); // Changed to querySelectorAll for multiple boxes

window.addEventListener('scroll', function () {
    let triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
});
