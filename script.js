let container = document.getElementById('container');
let gridSize = document.getElementById('grid-size');
let clear = document.getElementById('clear');

gridSize.addEventListener('change', reset);
clear.addEventListener('click', reset);

function makeGrid(num) {
  container.style.setProperty('--grid-rows', num);
  container.style.setProperty('--grid-columns', num);
  for (let i = 0; i < (num * num); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    }
}

function colorSquares() {
  const squares = container.querySelectorAll('.square');
  
  squares.forEach(square => square.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = getRandomColor();
    })
  );
}

function getRandomColor() {
  const random = () => Math.floor(Math.random() * 256);
  return `rgb(${random()}, ${random()}, ${random()})`;
}

function reset() {
  let all = document.querySelectorAll('.square');
  all.forEach(item => item.remove());
  makeGrid(gridSize.value);
  colorSquares();
}

reset();