const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    number = btn.value;
    changeBackground(number);
  });
});

const body = document.body;

function changeBackground(number) {
  body.className = "";
  switch (number) {
    case "yellow":
      body.classList.add("yellow");
      break;
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "crimson":
      body.classList.add("crimson");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "blueviolet":
      body.classList.add("blueviolet");
      break;
    default:
        break;
  }
}
