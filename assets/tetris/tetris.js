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
  board = board.filter(row => row.some(value => value === 0));
  const missingRows = ROWS - board.length;
  board = Array.from({ length: missingRows }, () => Array(COLS).fill(0)).concat(board);
}

function update() {
  drawBoard();
  drawShape(currentShape, currentX, currentY, currentColor);
}

function spawnShape() {
  const randomIndex = Math.floor(Math.random() * shapes.length);
  currentShape = shapes[randomIndex];
  currentColor = colors[randomIndex];
  currentX = Math.floor(COLS / 2) - Math.floor(currentShape[0].length / 2);
  currentY = 0;
  if (collide(currentX, currentY, currentShape)) {
    board = Array.from({ length: ROWS }, () => Array(COLS).fill(0)); // Reiniciar el tablero si el juego termina
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

// Agregar manejadores de eventos para los botones
document.getElementById('left').addEventListener('click', () => move(-1));
document.getElementById('right').addEventListener('click', () => move(1));
document.getElementById('rotate').addEventListener('click', () => rotateShape());
document.getElementById('down').addEventListener('click', () => drop());

// Función para el bucle del juego
function gameLoop() {
  drop();
  setTimeout(gameLoop, 1000);
}

// Iniciar el juego
spawnShape();
gameLoop();