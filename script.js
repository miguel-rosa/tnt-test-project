const audio = document.querySelector("#audio");
const playIcon = document.querySelector("#play-icon")

playIcon.addEventListener("click", () => {
  console.log("clicked")
  audio.play();
})
