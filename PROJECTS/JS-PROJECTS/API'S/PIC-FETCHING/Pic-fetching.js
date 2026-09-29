const button = document.querySelector('.btn');
const photocon = document.querySelector('.photo');
const image = document.querySelector('.image');
const name = document.querySelector('.Photoname');
const apiKey = "HmoIjX68f2i-bRujTnp5Z3XxZapNi6hsZk8a2h2QVYs";

async function getImage() {
    try {
        let types = ["forest", "mountains", "waterfall", "river", "landscape"];
        let randomType = types[Math.floor(Math.random() * types.length)];
        const response = await fetch(`https://api.unsplash.com/photos/random?query=${randomType}&client_id=${apiKey}`);
        const data = await response.json();
        console.log(data);

        image.src = data.urls.regular;
        name.textContent = data.user.name;
        photocon.style.display = "flex";
    }
    catch (error) {
        console.error("Error fetching image:", error);
    }
}

button.addEventListener('click', getImage);
