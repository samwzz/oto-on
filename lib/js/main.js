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

  const addListeners = (el, s, fn) => {
    s.forEach((e) => {
      el.addEventListener(e, fn, false);
    });
  };

  const toggleNote = (e) => {
    const target = e.path[0];
    if (mouseDown) {
      target.classList.toggle("active");
      let soundId = target.getAttribute("sound-id");
      let sound = document.getElementById(soundId);
      sound.play();
    }
  };

  // make sound on click
  document.querySelectorAll("li").forEach((li) => {
    const events = ["click", "mouseover"];
    addListeners(li, events, toggleNote);
  });

  // Iterate over col and play all active squares
  let currBeat = 0;
  const play = () => {
    let col = document.querySelectorAll(`.col-${currBeat}.active`);
    console.log(col);
    console.log(currBeat);
    for (let i = 0; i < col.length; i++) {
      let soundId = col[i].getAttribute("sound-id");
      let note = document.getElementById(soundId);

      const tempNote = note.cloneNode(true);
      tempNote.muted = isMuted ? true : false;
      tempNote.play();
    }
  };

  // Iterate over columns at set interval and repeat
  // setInterval(() => {
  //   play();
  //   currBeat = (currBeat + 1) % 8;
  // }, 100);

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
