let btn = document.querySelector('button');

btn.addEventListener("click", function () {
    let randomColor = generateRandomColor();

    let h1 = document.querySelector('h1');
    h1.innerHTML = randomColor;

    let div = document.querySelector('.con');
    div.style.backgroundColor = randomColor;
});

function generateRandomColor() {
    let red = Math.floor(Math.random() * 256); // Ensures full range 0-255
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}
