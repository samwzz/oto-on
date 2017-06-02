/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

class View {
  constructor(board, sounds) {
    this.board = board;
    this.sounds = sounds;
    this.setupAudio();
    this.setupBoard();
  }

  // Create grid of squares with row, col, sound-id attributes
  setupBoard() {
    const ul = document.createElement("ul");
    ul.className = "grid";

    for (let rowIdx = 0; rowIdx < 16; rowIdx++) {
      for (let colIdx = 0; colIdx < 16; colIdx++) {
        let div = document.createElement("div");
        div.setAttribute("class", "note-container");
        let li = document.createElement("li");
        li.classList.add("note");
        li.classList.add(`row-${rowIdx}`);
        li.classList.add(`col-${colIdx}`);
        li.setAttribute("id", `${rowIdx}-${colIdx}`);
        li.setAttribute("sound-id", `sound-${rowIdx}`);

        div.appendChild(li);
        ul.appendChild(div);
      }
    }

    this.board.appendChild(ul);
  }

  // Create audio element
  setupAudio() {
    for (let i = 0; i < 16; i++) {
      let audio = document.createElement("audio");
      audio.setAttribute("id", `sound-${i}`);

      let source = document.createElement("source");
      source.setAttribute("src", `./assets/audio/${i}.mp3`);

      audio.appendChild(source);
      this.sounds.appendChild(audio);
    }
  }
}

module.exports = View;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const View = __webpack_require__(0);

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map