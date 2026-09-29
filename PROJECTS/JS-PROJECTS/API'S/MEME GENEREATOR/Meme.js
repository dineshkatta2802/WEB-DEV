let image = document.querySelector('.meme-image');
let button = document.querySelector('.btn');
let title = document.querySelector('.title');

let url = "https://meme-api.com/gimme";

// meme genres
let type = ["catmemes", "wholesomememes", "dogmemes", "me_irl"];

async function getMeme(){
    let randomtype = type[Math.floor(Math.random() * type.length)];
    let response = await fetch(url + `/${randomtype}`);
    let data = await response.json();
    console.log(data);

    image.src = data.preview[Math.floor(Math.random() * 3)];
    title.innerHTML = data.title;
}

button.addEventListener('click', getMeme);
