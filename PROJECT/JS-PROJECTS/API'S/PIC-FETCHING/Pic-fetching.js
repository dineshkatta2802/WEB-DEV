let apikey = "HmoIjX68f2i-bRujTnp5Z3XxZapNi6hsZk8a2h2QVYs";
const apiurl = "https://api.unsplash.com/photos/random?query=nature";

const button = document.querySelector('.btn');
const photocon = document.querySelector('.photo');
const image = document.querySelector('.image');
const name = document.querySelector('.Photoname');

button.addEventListener('click', async () => {
    try {
        const response = await fetch(apiurl + `&client_id=${apikey}`);
        const data = await response.json();

        console.log(data); // Log full response in console

        image.src = data.urls.regular;
        name.textContent = data.user.name;
        photocon.style.display = "flex";
    } catch (error) {
        console.error("Error fetching image:", error);
    }
});
