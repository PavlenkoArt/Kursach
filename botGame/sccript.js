let currentPlayer = "X";
let gameEnded = false;

function handleClick(cell) {
 if (cell.innerHTML !== "" || gameEnded) {
  return;
 }
 cell.innerHTML = currentPlayer;
 if (checkWin()) {
  alert(currentPlayer + " выиграл!");
  gameEnded = true;
  location.reload();
 }
 if (checkDraw()) {
  alert("Ничья!");
  gameEnded = true;
  location.reload();
 }
 currentPlayer = currentPlayer === "X" ? "O" : "X";
 if (currentPlayer === "O") {
  setTimeout(() => {
   computerMove();
  }, 500);
 }
}

function checkWin() {
 for (let i = 0; i < 5; i++) {
  if (checkRow(i) || checkColumn(i)) {
   return true;
  }
 }
 if (checkDiagonal() || checkAntiDiagonal()) {
  return true;
 }
 return false;
}

function checkRow(row) {
 for (let i = 0; i < 5; i++) {
  if (document.getElementById(row + "" + i).innerHTML !== currentPlayer) {
   return false;
  }
 }
 return true;
}

function checkColumn(column) {
 for (let i = 0; i < 5; i++) {
  if (document.getElementById(i + "" + column).innerHTML !== currentPlayer) {
   return false;
  }
 }
 return true;
}

function checkDiagonal() {
 for (let i = 0; i < 5; i++) {
  if (document.getElementById(i + "" + i).innerHTML !== currentPlayer) {
   return false;
  }
 }
 return true;
}

function checkAntiDiagonal() {
 for (let i = 0; i < 5; i++) {
  if (document.getElementById(i + "" + (2 - i)).innerHTML !== currentPlayer) {
   return false;
  }
 }
 return true;
}

function checkDraw() {
 for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
   if (document.getElementById(i + "" + j).innerHTML === "") {
    return false;
   }
  }
 }
 return true;
}

function computerMove() {
  let emptyCells = [];
  for (let i = 0; i < 5; i++) {
   for (let j = 0; j < 5; j++) {
    if (document.getElementById(i + "" + j).innerHTML === "") {
     emptyCells.push(i + "" + j);
    }
   }
  }
  let randomIndex = Math.floor(Math.random() * emptyCells.length);
  let cell = document.getElementById(emptyCells[randomIndex]);
  cell.innerHTML = currentPlayer;
  if (checkWin()) {
   alert(currentPlayer + " выиграл!");
   gameEnded = true;
   return;
  }
  if (checkDraw()) {
   alert("Ничья!");
   gameEnded = true;
   location.reload();
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
 }

document.querySelectorAll("td").forEach(cell => {
 cell.addEventListener("click", () => handleClick(cell));
});

