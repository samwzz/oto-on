class View {
  constructor(el) {
    this.el = el[0];
    this.setupBoard();
  }

  setupBoard() {
     const ul = document.createElement("ul");
     ul.className = "group";

     for (let rowIdx = 0; rowIdx < 8; rowIdx++) {
       for (let colIdx = 0; colIdx < 8; colIdx++) {
         let li = document.createElement("li");
         li.setAttribute("pos", [rowIdx, colIdx]);

         ul.appendChild(li);
       }
     }

     this.el.appendChild(ul);
   }
 }

 module.exports = View;
