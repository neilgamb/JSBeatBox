function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`div[data-key='${e.keyCode}']`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeClass(key) {
  if (key.propertyName != "transform") return;

  key.target.classList.remove("playing");
}

function init() {
  window.addEventListener("keydown", playSound);
  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener("transitionend", removeClass));
}

window.addEventListener("load", init);
