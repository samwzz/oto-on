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
 }

 module.exports = View;
