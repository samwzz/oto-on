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
