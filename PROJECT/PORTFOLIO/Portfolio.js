const Text = document.querySelector('.text')
const bg = document.querySelector('.bg')

let loadingVal = 0

let interval = setInterval(blurring, 30)

function blurring() {
  loadingVal++

  if (loadingVal > 99) {
    clearInterval(interval);
  }

Text.innerText = `${loadingVal}%`
Text.style.opacity = scale(loadingVal, 0, 100, 1, 0)
bg.style.filter = `blur(${scale(loadingVal, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}