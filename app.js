function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`div[data-key='${e.keyCode}']`);
}

function init() {
  window.addEventListener("keydown", playSound);
}

window.addEventListener("load", init);
