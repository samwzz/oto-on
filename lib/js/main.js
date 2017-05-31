const View = require('./view');

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.querySelector('.board');
  new View(rootEl);

  const sound = document.getElementById("sound_bass_hit");
  document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      sound.play();
    });
  });
});
