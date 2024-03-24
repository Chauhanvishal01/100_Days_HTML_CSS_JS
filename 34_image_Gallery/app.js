const images = document.querySelectorAll("img");
const wrapper = document.getElementById("wrapper");
const imageWrapper = document.getElementById("fullImg");

const closebtn = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(`img/${index}.jpg`);
  });
});

closebtn.addEventListener("click", () => {
  wrapper.style.display = "none";
});

function openModal(pic) {
  wrapper.style.display = "flex";
  imageWrapper.src = pic;
}
