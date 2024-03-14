const progress = document.querySelector("#progress");
const prevbtn = document.querySelector("#prev");
const nextbtn = document.querySelector("#next");

const circle = document.querySelectorAll(".circle");

let activeIndex = 1;

nextbtn.addEventListener("click", () => {
  activeIndex++;

  if (activeIndex > circle.length) {
    activeIndex = circle.length;
  }

  updateUi();
});

prevbtn.addEventListener("click", () => {
  activeIndex--;
  if (activeIndex < 1) {
    activeIndex = 1;
  }
  updateUi();
});

function updateUi() {
  circle.forEach((circle, index) => {
    if (index < activeIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + "%";

  if (activeIndex === 1) {
    prevbtn.disabled = true;
  } else if (activeIndex === circle.length) {
    nextbtn.disabled = true;
  } else {
    prevbtn.disabled = false;
    nextbtn.disabled = false;
  }
}
