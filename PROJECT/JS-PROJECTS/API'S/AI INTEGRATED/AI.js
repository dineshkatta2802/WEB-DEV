let toggle = document.querySelector('.toggle');
let container = document.querySelector('.con');
let logoIcon = document.querySelector('.logo i');
let logoHeader = document.querySelector('.logo h1');
let color = document.querySelector('.color');
let prompt = document.querySelector('.prompt');
let dice = document.querySelector('.prompt-btn');
let generatebtn = document.querySelector('.Generate-btn button');
let promptText = prompt.innerHTML;

// const apiKey = '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';

// async function api(promptText){
    
//     const apiURL = "https://router.huggingface.co/nebius/v1/images/generations";

//         try {
//             headers: {
// 				Authorization: `Bearer ${apiKey}`,
// 				"Content-Type": "application/json",
// 			},
// 			method: "POST",
// 			body: JSON.stringify({
//                 input:,
//                 parameters:{width,height},
//                 "x-use-cache" "false",

//             }),
//     } catch (error) {
        
//     }
// }

let samplePrompts = [
    "A pastel sunset over a calm ocean with soft clouds",
    "Vintage cafe corner with plants and sunlight through windows",
    "A cozy reading nook with fairy lights and warm blankets",
    "Dreamy lavender field under a starry night sky",
    "Soft watercolor-style sakura blossoms in spring",
    "Aesthetic desk setup with a journal, coffee, and plants",
    "Rainy city street with reflections and neon signs",
    "Polaroid-style photo of a girl in a flowy dress in a meadow",
    "A peaceful lakeside cabin during autumn",
    "A minimalist bedroom with white sheets and natural light",
    "Old bookstore with warm lighting and floating books",
    "Cottagecore-style kitchen with hanging herbs and pies",
    "Golden hour walk through sunflower fields",
    "A serene Japanese tea garden with koi pond",
    "Silhouetted couple under cherry blossoms at dusk",
    "Soft dreamy clouds shaped like animals",
    "A girl sketching by the window on a rainy day",
    "A retro walkman and cassette tapes on a wooden table",
    "Colorful butterflies flying around vintage glass jars",
    "Aesthetic picnic setup with fruits, flowers, and a book"
];


let isDark = false;

toggle.addEventListener('click', () => {
    isDark = !isDark;

    document.body.classList.toggle('dark-mode');

    // Icon toggle: moon ↔ suna
    if (isDark) {
        toggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        toggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
});

dice.addEventListener('click',() =>{
    let smaple_prompt = samplePrompts[Math.floor(Math.random() * 20)];
    prompt.innerHTML = smaple_prompt;
});

