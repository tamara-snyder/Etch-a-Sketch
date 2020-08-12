let container = document.getElementById('container');
let gridSize = document.getElementById('grid-size');
let clear = document.getElementById('clear');
let shape = document.getElementById('shape');
let square = document.getElementsByClassName('square');
//let color = document.getElementById('color');
let color;

gridSize.addEventListener('change', reset);
//color.addEventListener('change', makeGrid(gridSize));
clear.addEventListener('click', reset);

function makeGrid(num) {
  container.style.setProperty('--grid-rows', num);
  container.style.setProperty('--grid-columns', num);
  for (let i = 0; i < (num * num); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = getRandomColor();
      });
    container.appendChild(square);
    }
}


function getRandomColor() {
  const random = () => Math.floor(Math.random() * 256);
  return `rgb(${random()}, ${random()}, ${random()})`;
}

function reset() {
  let all = document.querySelectorAll('.square');
  all.forEach(item => item.remove());
  makeGrid(gridSize.value);
}


makeGrid(gridSize.value);