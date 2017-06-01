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

    for (let rowIdx = 0; rowIdx < 8; rowIdx++) {
      for (let colIdx = 0; colIdx < 8; colIdx++) {
        let li = document.createElement("li");
        li.setAttribute("class", `row-${rowIdx}`);
        li.setAttribute("class", `col-${colIdx}`);
        li.setAttribute("sound-id", `sound-${rowIdx}`);

        ul.appendChild(li);
      }
    }

    this.board.appendChild(ul);
  }

  // Create audio element
  setupAudio() {
    for (let i = 0; i < 8; i++) {
      let audio = document.createElement("audio");
      audio.setAttribute("id", `sound-${i}`);
      const attr = document.createAttribute("autobuffer");
      audio.setAttributeNode(attr);

      let source = document.createElement("source");
      source.setAttribute("src", `../assets/audio/${i}.mp3`);

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

  // Iterate over columns at set interval and repeat
  setInterval(() => {
    play();
    currBeat = (currBeat + 1) % 8;
  }, 500);
});


/***/ })
/******/ ]);