const dice = document.querySelector(".dice-face");
const button = document.querySelector(".btn");
button.addEventListener("click",(faceChange) =>{
    dice.classList.add("rolldice");
    setTimeout(()=>{
        dice.classList.remove("rolldice")
    },1000);

    let random = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = changeFace(random);
})

function changeFace(random){
        switch(random) {
            case 1:
                return "&#9856";
            case 2:
                return "&#9857";
            case 3:
                return "&#9858";
            case 4:
                return "&#9859";
            case 5:
                return "&#9860";
            case 6:
                return "&#9861";
        }
}