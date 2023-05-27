var allBtns = document.querySelectorAll(".btn");
var playBtn = document.getElementById("play");
var playAgainBtn = document.getElementById("playagain");
var resultText = document.getElementById("result");
var result = document.querySelector(".resultPlayer");
var turn = document.querySelector(".turn");
var gameboard = document.querySelector(".gameboard");

var r1 = ["", "", ""];
var r2 = ["", "", ""];
var r3 = ["", "", ""];
var firstPlayer = "X";
var secondPlayer = "O";
var current = firstPlayer;
var finished = false;

gameboard.classList.remove("hide");

playBtn.addEventListener("click", () => {
  playBtn.style.backgroundColor = "grey";
  turn.classList.remove("hide");
  playGame();
});

playAgainBtn.addEventListener("click", () => {
  gameboard.classList.remove("hide");
 location.reload();
});

function playGame() {
  for (let i = 0; i < allBtns.length; i++) {
    let cell = allBtns[i];
    cell.addEventListener("click", function () {
      console.log(cell.id);
      if (finished == false) {
        var clickCell = cell.id.split(",");
        var clickrow = Number(clickCell[0]);
        var clickcol = Number(clickCell[1] - 1);
        var valid = true;
        cell.disable = true;
        switch (clickrow) {
          case 1:
            //r1
            if (r1[clickcol] != "") {
              valid = false;
              break;
            }
            r1[clickcol] = current;
            break;
          case 2:
            //r2
            if (r2[clickcol] != "") {
              valid = false;
              break;
            }
            r2[clickcol] = current;
            break;
          case 3:
            if (r3[clickcol] != "") {
              valid = false;
              break;
            }
            r3[clickcol] = current;
            break;
        }

        if (valid) {
          cell.innerHTML = current;
          if (current == firstPlayer) {
            setTimeout(() => {
              computer();
            }, 1000);

            document.getElementById("turn").innerHTML = "Player 2 Turn!";
            document.getElementById("turn").style.color = "teal";
            current = secondPlayer;
          } else {
            document.getElementById("turn").innerHTML = "Player 1 Turn!";
            document.getElementById("turn").style.color = "orange";
            current = firstPlayer;
          }
        }
        draw();
        whoWin();
      }
    });
  }
}
function computer() {
  var row = Math.floor(Math.random() * 3 + 1);
  var col = Math.floor(Math.random() * 3 + 1);
  var rand = row + "," + col;

  while (document.getElementById(rand).disable == true) {
    row = Math.floor(Math.random() * 3 + 1);
    col = Math.floor(Math.random() * 3 + 1);
    rand = row + "," + col;
  }

  document.getElementById(rand).click();
  document.getElementById(rand).disable = true;
}
function whoWin() {
  //vertical
  if (verticalCheckPlayer(firstPlayer) == true) {
    finished = true;
    resultText.innerText = "Player 1 Win!";
    result.classList.remove("hide");
    gameboard.classList.add("hide");
  } else if (verticalCheckPlayer(secondPlayer) == true) {
    finished = true;
    resultText.innerText = "Player 2 Win!";
    result.classList.remove("hide");
    gameboard.classList.add("hide");
  }

  //horizontal
  else if (horizontalCheckPlayer(firstPlayer) == true) {
    finished = true;
    resultText.innerText = "Player 1 Win!";
    result.classList.remove("hide");
    gameboard.classList.add("hide");
  } else if (horizontalCheckPlayer(secondPlayer) == true) {
    finished = true;
    resultText.innerText = "Player 2 Win!";
    result.classList.remove("hide");
    result.classList.remove("hide");
    gameboard.classList.add("hide");
  }

  //diagonal
  else if (diagonalCheckPlayer(firstPlayer) == true) {
    finished = true;
    resultText.innerText = "Player 1 Win!";
    result.classList.remove("hide");
    gameboard.classList.add("hide");
  } else if (diagonalCheckPlayer(secondPlayer) == true) {
    finished = true;
    resultText.innerText = "Player 2 Win!";
    result.classList.remove("hide");
    gameboard.classList.add("hide");
  }
}
function draw() {
  if (
    (r1[0] && r2[0] && r3[0]) != "" &&
    (r1[1] && r2[1] && r3[1]) != "" &&
    (r1[2] && r2[2] && r3[2]) != ""
  ) {
    finished == true;
    resultText.innerText = "Draw!";
    result.classList.remove("hide");
    gameboard.classList.add("hide");
  }
}

function verticalCheckPlayer(player) {
  for (let index = 0; index < 3; index++) {
    if (r1[index] == player && r2[index] == player && r3[index] == player) {
      return true;
    }
  }
  return false;
}
function horizontalCheckPlayer(player) {
  if (
    (r1[0] == player && r1[1] == player && r1[2] == player) ||
    (r2[0] == player && r2[1] == player && r2[2] == player) ||
    (r3[0] == player && r3[1] == player && r3[2] == player)
  ) {
    return true;
  }
  return false;
}

function diagonalCheckPlayer(player) {
  if (
    (r1[0] == player && r2[1] == player && r3[2] == player) ||
    (r3[0] == player && r2[1] == player && r1[2] == player)
  ) {
    return true;
  }
  return false;
}
