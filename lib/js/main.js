const View = require('./view');

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.querySelectorAll('.board');
  new View(rootEl);
});
