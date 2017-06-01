class View {
  constructor(board, sounds) {
    this.board = board;
    this.sounds = sounds;
    this.setupAudio();
    this.setupBoard();
  }

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

   setupAudio() {
     for (let i = 0; i < 8; i++) {
       let audio = document.createElement("audio");
       audio.setAttribute("id", `sound-${i}`);
       const attr = document.createAttribute("autobuffer");
       console.log(audio);
       audio.setAttributeNode(attr);

       let source = document.createElement("source");
       source.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/" + i + ".mp3");

       audio.appendChild(source);
       this.sounds.appendChild(audio);
     }
   }
 }

 module.exports = View;
