const copytxt = document.querySelector("textarea[name=copyTxt");
const finaltxt = document.querySelector("textarea[name=finalTxt");
const movebtn = document.querySelector(".moveBtn");
const copyBtn = document.querySelector(".copyBtn");
const output = document.querySelector(".output");

copyBtn.addEventListener("click", () => {
  let temp = copytxt.value;
  copyToclipBoard(temp);
});
movebtn.addEventListener("click", () => {
  let temp = copytxt.value;
  finaltxt.value = temp;
});

copytxt.addEventListener("click", () => this.select());
finaltxt.addEventListener("click", () => this.select());

function copyToclipBoard(str) {
  const outputcontainer = document.querySelector(".output-container");
  const textarea = document.createElement("textarea");
  textarea.value = str;
  outputcontainer.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  outputcontainer.removeChild(textarea);
  output.innerHTML = `<h3>Content copied </h3>`;
  output.classList.add("added");
  setTimeout(() => {
    output.classList.toggle("added");
    output.textContent = "";
  }, 2000);
}
