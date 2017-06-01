const View = require('./view');

document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById('board');
  const sounds = document.getElementById('sounds');
  new View(board, sounds);

  // make sound on click
  document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      li.classList.toggle("active");
      let sound = document.getElementById(li.getAttribute("sound-id"));
      sound.play();
    });
  });

  // Iterate over col and play all active squares
  let currBeat = 0;
  const play = () => {
    let col = document.querySelectorAll(`.col-${currBeat}.active`);
    console.log(col);
    console.log(currBeat);
    for (let i = 0; i < col.length; i++) {
      let note = document.getElementById(col[i].getAttribute("sound-id"));
      note.cloneNode(true).play();
    }
  };

  // Iterate over columns at set interval and repeat
  setInterval(() => {
    play();
    currBeat = (currBeat + 1) % 8;
  }, 100);
});
