//creating the class open on click
const hamBtn = document.querySelector("hamburger-btn");
let hamOpen = false;
hamBtn.addEventListener("click", () => {
  if (!hamOpen) {
    hamBtn.classList.add("open");
    hamOpen = true;
  } else {
    hamBtn.classList.remve("open");
    hamOpen = false;
  }
});
