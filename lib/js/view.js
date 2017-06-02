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
