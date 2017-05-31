const View = require('./view');

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('board');
  new View(rootEl);

  // const sound = document.getElementById("sound_bass_hit");
  document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      li.classList.toggle("active");
      let sound = document.getElementById(li.getAttribute("sound-id"));
      sound.play();
    });
  });

  let currBeat = 0;
  const play = () => {
    for (let i = 0; i < 8; i++) {
      let col = document.querySelector(`.col-${i}`);
      console.log(col);
      col.forEach((sq) => {

      });
    }
  };

  // setInterval(play, 1000);
});
