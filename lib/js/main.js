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

  // Toggle square active on click
  document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      li.classList.toggle("active");
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

  // const slider = document.getElementById("tempo-range");
  // let tempo = slider.value;
  // slider.addEventListener("change", e => {
  //   tempo = 1100 - e.currentTarget.value;
  //   console.log(tempo);
  // });

  // Iterate over col and play all active squares
  let currBeat = 0;

  const play = () => {
    let currCol = document.querySelectorAll(`.col-${currBeat}`);

    for (let i = 0; i < currCol.length; i++) {
      currCol[i].classList.toggle("playing");

      if (currCol[i].classList.contains("active")) {
        currCol[i].classList.add("pulse");
        let soundId = currCol[i].getAttribute("sound-id");
        let note = document.getElementById(soundId);

        if (!note.muted) {
          const tempNote = note.cloneNode(true);
          tempNote.play();
        }
      }

      setTimeout(() => {
        currCol[i].classList.toggle("playing");
        currCol[i].classList.remove("pulse");
      }, 200);
    }
  };

  // Iterate over columns at set interval and repeat
  setInterval(() => {
    play();
    currBeat = (currBeat + 1) % 16;
  }, 200);

  const muteButton = document.getElementById("mute-button");
  const muteIcon = document.getElementById("mute-icon");
  const soundEls = document.querySelectorAll("audio");
  let isMuted = false;

  const muteFn = (bool) => {
    for (let i = 0; i < soundEls.length; i++) {
      soundEls[i].muted = bool;
    }
    isMuted = bool;
  };

  muteButton.addEventListener("click", () => {
    muteIcon.classList.toggle("fa-volume-up");
    muteIcon.classList.toggle("fa-volume-off");
    return isMuted ? muteFn(false) : muteFn(true);
  });

  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", () => {
    document.querySelectorAll("li").forEach((li) => {
      li.classList.remove("active");
    });
  });
});
