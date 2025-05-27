const h1 = document.querySelector('h1');

const texts = [
  "Praneeth...","Dinesh...","Ram.."];

let index = 0;

// Listen for animation iteration on the h1 element
h1.addEventListener('animationiteration', () => {
  // Increment index and wrap around if needed
  index = (index + 1) % texts.length;
  // Update the data-text attribute to change the displayed text
  h1.setAttribute('data-text', texts[index]);
});
