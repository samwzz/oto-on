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
    let currCol = document.querySelectorAll(`.col-${currBeat}`);

    for (let i = 0; i < currCol.length; i++) {
      currCol[i].classList.toggle("playing");

      if (currCol[i].classList.contains("active")) {
        let soundId = currCol[i].getAttribute("sound-id");
        let note = document.getElementById(soundId);

        const tempNote = note.cloneNode(true);
        tempNote.muted = isMuted ? true : false;
        tempNote.play();
      }

      setTimeout(() => {
        currCol[i].classList.toggle("playing");
      }, 500);
    }
  };

  // Iterate over columns at set interval and repeat
  setInterval(() => {
    play();
    currBeat = (currBeat + 1) % 16;
  }, 500);

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
    return isMuted ? unmuteAll() : muteAll();
  });

  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", () => {
    document.querySelectorAll("li").forEach((li) => {
      li.classList.remove("active");
    });
  });
});
