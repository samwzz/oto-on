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
    let col = document.querySelectorAll(`.col-${currBeat}.active`);
    console.log(col);
    console.log(currBeat);
    for (let i = 0; i < col.length; i++) {
      let note = document.getElementById(col[i].getAttribute("sound-id"));
      note.play();
    }
  };

  // setInterval(() => {
  //   play();
  //   currBeat = (currBeat + 1) % 8;
  // }, 500);
});
