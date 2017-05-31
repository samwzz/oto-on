class View {
  constructor(el) {
    this.el = el;
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
         li.setAttribute("sound-id", "sound_bass_hit");

         ul.appendChild(li);
       }
     }

     this.el.appendChild(ul);
   }

   setupAudio() {
     for (let i = 0; i < 8; i++) {
       let audio = document.createElement("audio");
       audio.setAttribute("id", `${i}`);
       const attr = document.createAttribute("autobuffer");
       audio.setAtttributeNode(attr);

       let source = document.createElement("source");
       source.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/380275/" + i);
       audio.appendChild(source);
     }
   }
 }

 module.exports = View;
