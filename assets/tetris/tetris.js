const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
const S = 30; // Tamaño del bloque en píxeles

const ROWS = canvas.height / S;
const COLS = canvas.width / S;

const shapes = [
  [[1, 1, 1, 1]], // I
  [[1, 1], [1, 1]], // O
  [[0, 1, 1], [1, 1, 0]], // S
  [[1, 1, 0], [0, 1, 1]], // Z
  [[1, 1, 1], [0, 1, 0]], // T
  [[1, 1, 1], [1, 0, 0]], // L
  [[1, 1, 1], [0, 0, 1]] // J
];

const colors = ['cyan', 'yellow', 'green', 'red', 'purple', 'orange', 'blue'];

let board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
let currentShape, currentX, currentY, currentColor;
let score = 0;
let animFrame = 0;
let message = '';

function drawBlock(x, y, color) {
  context.fillStyle = color;
  context.fillRect(x * S, y * S, S, S);
  context.strokeStyle = '#000';
  context.strokeRect(x * S, y * S, S, S);
}

function drawBoard() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  board.forEach((row, y) => row.forEach((value, x) => {
    if (value) drawBlock(x, y, colors[value - 1]);
  }));
}

function drawShape(shape, x, y, color) {
  shape.forEach((row, dy) => {
    row.forEach((value, dx) => {
      if (value) drawBlock(x + dx, y + dy, color);
    });
  });
}

function drawMessage() {
  if (message) {
    context.font = '30px Arial';
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.fillText(message, canvas.width / 2, canvas.height / 2);
  }
}

function drawScore() {
  context.font = '20px Arial';
  context.fillStyle = 'black';
  context.textAlign = 'left';
  context.fillText('Score: ' + score, 10, canvas.height - 10);
}

function collide(x, y, shape) {
  return shape.some((row, dy) => 
    row.some((value, dx) => 
      value && (board[y + dy] && board[y + dy][x + dx]) !== 0
    )
  );
}

function merge(shape, x, y, color) {
  shape.forEach((row, dy) => 
    row.forEach((value, dx) => {
      if (value) board[y + dy][x + dx] = colors.indexOf(color) + 1;
    })
  );
}

function rotate(shape) {
  return shape[0].map((_, i) => shape.map(row => row[i])).reverse();
}

function removeFullRows() {
  let rowsToRemove = [];
  board.forEach((row, y) => {
    if (row.every(value => value !== 0)) {
      rowsToRemove.push(y);
    }
  });

  rowsToRemove.forEach(rowIndex => {
    board.splice(rowIndex, 1);
    board.unshift(Array(COLS).fill(0));
  });

  updateScore(rowsToRemove.length);
}

function updateScore(rowsCleared) {
  let points = 0;
  switch (rowsCleared) {
    case 1: points = 100; break;
    case 2: points = 300; break;
    case 3: points = 500; break;
    case 4: points = 800; break;
  }
  score += points;
  if (rowsCleared > 0) {
    message = rowsCleared === 4 ? 'TETRIS!' : `Line ${rowsCleared}`;
    animFrame = 0; // Reset animation frame counter
  } else {
    message = '';
  }
}

function update() {
  drawBoard();
  drawShape(currentShape, currentX, currentY, currentColor);
  drawMessage();
  drawScore();
}

function spawnShape() {
  const randomIndex = Math.floor(Math.random() * shapes.length);
  currentShape = shapes[randomIndex];
  currentColor = colors[randomIndex];
  currentX = Math.floor(COLS / 2) - Math.floor(currentShape[0].length / 2);
  currentY = 0;
  if (collide(currentX, currentY, currentShape)) {
    board = Array.from({ length: ROWS }, () => Array(COLS).fill(0)); // Reiniciar el tablero si el juego termina
    score = 0;
    message = 'Game Over';
  }
}

function move(dir) {
  const newX = currentX + dir;
  if (!collide(newX, currentY, currentShape)) {
    currentX = newX;
    update();
  }
}

function drop() {
  const newY = currentY + 1;
  if (!collide(currentX, newY, currentShape)) {
    currentY = newY;
  } else {
    merge(currentShape, currentX, currentY, currentColor);
    removeFullRows();
    spawnShape();
  }
  update();
}

function rotateShape() {
  const rotatedShape = rotate(currentShape);
  if (!collide(currentX, currentY, rotatedShape)) {
    currentShape = rotatedShape;
    update();
  }
}

function animateMessage() {
  if (message) {
    context.save();
    context.font = '30px Arial';
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.globalAlpha = 1 - (animFrame / 30);
    context.fillText(message, canvas.width / 2, canvas.height / 2 - 20);
    context.restore();
    animFrame++;
    if (animFrame > 30) {
      message = '';
      animFrame = 0;
    }
  }
}

// Agregar manejadores de eventos para los botones
document.getElementById('left').addEventListener('click', () => move(-1));
document.getElementById('right').addEventListener('click', () => move(1));
document.getElementById('rotate').addEventListener('click', () => rotateShape());
document.getElementById('down').addEventListener('click', () => drop());

// Función para el bucle del juego
function gameLoop() {
  drop();
  animateMessage();
  setTimeout(gameLoop, 1000);
}

// Iniciar el juego
spawnShape();
gameLoop();