console.log("app.js is connected");

const shareBtn = document.getElementById("share-button");
const socials = document.getElementById("socials");

shareBtn.addEventListener("click", () => {
  if (shareBtn.dataset.style == "light") {
    shareBtn.dataset.style = "dark";
  } else {
    shareBtn.dataset.style = "light";
  }
  if (socials.dataset.state == "close") {
    socials.dataset.state = "open";
  } else {
    socials.dataset.state = "close";
  }
});
