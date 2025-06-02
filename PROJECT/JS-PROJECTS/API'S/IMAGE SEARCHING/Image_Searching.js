const search_form = document.getElementById('Search-form');
const search_result = document.querySelector('.search-result');
const input = document.getElementById('Search-box');
const show_more_btn = document.querySelector('.Show-more');

const apiKey = "HmoIjX68f2i-bRujTnp5Z3XxZapNi6hsZk8a2h2QVYs";
let page = 1;
let keyword = "";

// Main function to fetch images from Unsplash API
async function searchImage() {
    keyword = input.value.trim();
    if (!keyword) return;

    const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`;
    
    const response = await fetch(URL);
    const data = await response.json();

    if (page === 1) {
        search_result.innerHTML = ""; // Clear old results
    }

    const results = data.results;

    results.forEach(result => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.appendChild(image);
        search_result.appendChild(imagelink);
    });

    show_more_btn.style.display = "block";
}

// Handle search submit
search_form.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});

// Handle show more
show_more_btn.addEventListener('click', () => {
    page++;
    searchImage();
});
