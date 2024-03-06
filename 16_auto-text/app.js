const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

let words = ["Genius", "Intelligent", "Handsome", "Cool", "Coder",'💪','🔛🔝'];

const typingDelay = 200;
const EarsingDelay = 200;

//delay betweencurrent and next text

const newletterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded',()=>{
    if(words.length){
        setTimeout(type,newletterDelay)

    }
})

function type() {
  if (charIndex < words[index].length) {
    typedText.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(earse, newletterDelay);
  }
}

function earse() {
  if (charIndex > 0) {
    typedText.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(earse, EarsingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}
