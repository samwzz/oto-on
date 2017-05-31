const View = require('./view');

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('board');
  new View(rootEl);

  const sound = document.getElementById("sound_bass_hit");
  document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      li.toggleClass("active");
    });
  });

  const play = () => {
    for (let i = 0; i < 8; i++) {
      let col = document.querySelector(`.col-${i}`);
      console.log(col);
    }
  };

  // setInterval(play, 1000);
});
