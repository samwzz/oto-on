const View = require('./view');

document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById('board');
  const sounds = document.getElementById('sounds');
  new View(board, sounds);

  let mouseDown;
  document.addEventListener("mousedown", () => {
    mouseDown = true;
  });
  document.addEventListener("mouseup", () => {
    mouseDown = false;
  });

  // make sound on click
  document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      li.classList.toggle("active");
      let soundId = li.getAttribute("sound-id");
      let sound = document.getElementById(soundId);
      sound.play();
    });
    li.addEventListener("mouseover", () => {
      if (mouseDown) {
        li.classList.toggle("active");
        let soundId = li.getAttribute("sound-id");
        let sound = document.getElementById(soundId);
        sound.play();
      }
    });
  });

  // Iterate over col and play all active squares
  let currBeat = 0;
  const play = () => {
    let col = document.querySelectorAll(`.col-${currBeat}.active`);

    for (let i = 0; i < col.length; i++) {
      let soundId = col[i].getAttribute("sound-id");
      let note = document.getElementById(soundId);

      col[i].classList.toggle("playing");
      console.log(col[i]);
      const tempNote = note.cloneNode(true);
      tempNote.muted = isMuted ? true : false;
      tempNote.play();
    }

    for (let i = 0; i < col.length; i++) {
      col[i].classList.toggle("playing");
    }
  };

  // Iterate over columns at set interval and repeat
  // setInterval(() => {
  //
  //   play();
  //   currBeat = (currBeat + 1) % 16;
  // }, 500);

  const muteButton = document.getElementById("mute-button");
  const soundEls = document.querySelectorAll("audio");
  let isMuted = false;

  const muteAll = () => {
    for (let i = 0; i < soundEls.length; i++) {
      soundEls[i].muted = true;
    }
    isMuted = true;
  };
  const unmuteAll = () => {
    for (let i = 0; i < soundEls.length; i++) {
      soundEls[i].muted = false;
    }
    isMuted = false;
  };
  muteButton.addEventListener("click", () => {
    if (isMuted) {
      unmuteAll();
    } else {
      muteAll();
    }
  });

  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", () => {
    document.querySelectorAll("li").forEach((li) => {
      li.classList.remove("active");
    });
  });
});
