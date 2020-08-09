let squares = 256;
let container = document.getElementById('container');


for (let i = 0; i < squares; i++) {
  let div = document.createElement('div');
  div.classList.add('square');
  container.appendChild(div);
}