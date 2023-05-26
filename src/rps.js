// declaration
var player1choice;
var player2choice;
var y = 0;
var z = 0;
document.getElementById("p1result").innerText = y;
document.getElementById("p2result").innerText = z;
var player1 = ["rock", "paper", "scissors"];
var player2 = ["rock", "paper", "scissors"];
// play
function choose(value) {
  player1choice = player1[value];
  if (player1[value] == "rock") {
    document.getElementById("paper").style.opacity = "0";
    document.getElementById("scissors").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("paper").style.display = "none";
      document.getElementById("scissors").style.display = "none";
    }, 1000);
    document.getElementById("rock").disabled = false;
  } else if (player1[value] == "paper") {
    document.getElementById("rock").style.opacity = "0";
    document.getElementById("scissors").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("rock").style.display = "none";
      document.getElementById("scissors").style.display = "none";
    }, 1000);
  } else if (player1[value] == "scissors") {
    document.getElementById("paper").style.opacity = "0";
    document.getElementById("rock").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("paper").style.display = "none";
      document.getElementById("rock").style.display = "none";
    }, 1000);
  }
  document.getElementById("play1").play();

  computer();
  check();
}

function show() {
  document.getElementById("show").style.display = "flex";
  document.getElementById("result").style.display = "flex";
  document.getElementById("win").style.display = "block";
  document.getElementById("reset").style.display = "block";
  document.getElementById("mode").style.display = "none";
  document.getElementById("play2").play();
}
// computer
function random() {
  var x = Math.floor(Math.random() * 3);
  player2choice = player2[x];
}

function computer() {
  random();
  switch (player2choice) {
    case "rock":
      document.getElementById("paper2").style.opacity = "0";
      document.getElementById("scissors2").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("paper2").style.display = "none";
        document.getElementById("scissors2").style.display = "none";
      }, 1000);
      break;
    case "paper":
      document.getElementById("rock2").style.opacity = "0";
      document.getElementById("scissors2").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("rock2").style.display = "none";
        document.getElementById("scissors2").style.display = "none";
      }, 1000);
    default:
      break;
    case "scissors":
      document.getElementById("paper2").style.opacity = "0";
      document.getElementById("rock2").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("paper2").style.display = "none";
        document.getElementById("rock2").style.display = "none";
      }, 1000);
  }
}
//check condition
function check() {
  if (player1choice == player2choice) {
    setTimeout(() => {
      document.getElementById("status").style.display = "block";
      document.getElementById("status").innerText = "Draw";
      document.getElementById("play6").play();
    }, 1200);
  } else if ((player1choice == "rock") & (player2choice == "paper")) {
    setTimeout(() => {
      document.getElementById("status").style.display = "block";
      document.getElementById("status").innerText = "Computer Wins";
      z++;
      document.getElementById("p2result").innerText = z;
      document.getElementById("play5").play();
    }, 1200);
  } else if ((player1choice == "rock") & (player2choice == "scissors")) {
    setTimeout(() => {
      document.getElementById("status").style.display = "block";
      document.getElementById("status").innerText = "Player 1 Wins";
      y++;
      document.getElementById("p1result").innerText = y;
      document.getElementById("play4").play();
    }, 1200);
  } else if ((player1choice == "paper") & (player2choice == "scissors")) {
    setTimeout(() => {
      document.getElementById("status").style.display = "block";
      document.getElementById("status").innerText = "Computer Wins";
      z++;
      document.getElementById("p2result").innerText = z;
      document.getElementById("play5").play();
    }, 1200);
  } else if ((player1choice == "paper") & (player2choice == "rock")) {
    setTimeout(() => {
      document.getElementById("status").style.display = "block";
      document.getElementById("status").innerText = "Player 1 Wins";
      y++;
      document.getElementById("p1result").innerText = y;
      document.getElementById("play4").play();
    }, 1200);
  } else if ((player1choice == "scissors") & (player2choice == "rock")) {
    setTimeout(() => {
      document.getElementById("status").style.display = "block";
      document.getElementById("status").innerText = "Computer Wins";
      z++;
      document.getElementById("p2result").innerText = z;
      document.getElementById("play5").play();
    }, 1200);
  } else if ((player1choice == "scissors") & (player2choice == "paper")) {
    setTimeout(() => {
      document.getElementById("status").style.display = "block";
      document.getElementById("status").innerText = "Player 1 Wins";
      y++;
      document.getElementById("p1result").innerText = y;
      document.getElementById("play4").play();
    }, 1200);
  }
}
// restart
function restart() {
  if (y == 10) {
    document.getElementById("result").style.display = "none";
    document.getElementById("show").style.display = "none";
    document.getElementById("text").style.display = "flex";
    document.getElementById("win").innerText = "Player Wins";
    document.getElementById("win").style.transform = "translateY(10em)";
    document.getElementById("play8").play();
    document.getElementById("reset").style.transform =
      "translate(-3em , -17em)";
    document.getElementById("restart").innerText = "Play Again";
    setTimeout(() => {
      window.location.reload();
    }, 4500);
  } else if (z == 10) {
    document.getElementById("result").style.display = "none";
    document.getElementById("show").style.display = "none";
    document.getElementById("text").style.display = "flex";
    document.getElementById("win").innerText = "Computer Wins";
    document.getElementById("win").style.transform = "translateY(10em)";
    document.getElementById("play7").play();
    document.getElementById("reset").style.transform =
      "translate(-6em , -17em)";
    document.getElementById("restart").innerText = "Play Again";
    setTimeout(() => {
      window.location.reload();
    }, 4500);
  } else {
    document.getElementById("play3").play();
    random();
    document.getElementById("show").innerHTML = `<div class="mt-20 ml-20">
  <div
    class="bg-white w-20 h-24 flex items-center mt-5 rounded-lg cursor-pointer transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-300"
    id="rock"
    onclick="choose(0)" disabled
  >
    <img
      src="https://www.seekpng.com/png/detail/816-8161371_rock-paper-scissor-icon-png.png"
      alt="Rock Paper Scissor Icon Png@seekpng.com"
      class="w-20"
    />
  </div>
  <div
    class="bg-white w-20 h-24 flex items-center mt-5 rounded-lg cursor-pointer transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-300"
    id="paper"
    onclick="choose(1)" disabled
  >
    <img src="./paper.png" alt="" class="paper bg-white w-16" />
  </div>
  <div
    class="bg-white w-20 h-24 flex items-center mt-5 rounded-lg cursor-pointer transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-300"
    id="scissors" 
    onclick="choose(2)" disabled
  >
    <img src="./scissors.png" alt="" class="w-20 -rotate-90" />
  </div>
</div>
<div class="mt-20 ml-20">
  <div
    class="bg-white w-20 h-24 flex items-center mt-5 rounded-lg cursor-pointer transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-300"
    id="rock2"
  >
    <img
      src="https://www.seekpng.com/png/detail/816-8161371_rock-paper-scissor-icon-png.png"
      alt="Rock Paper Scissor Icon Png@seekpng.com"
      class="w-20 bg-transparent"
    />
  </div>
  <div
    class="bg-white w-20 h-24 flex items-center mt-5 rounded-lg cursor-pointer transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-300"
    id="paper2"
  >
    <img src="./paper.png" alt="" class="paper bg-white w-16" />
  </div>
  <div
    class="bg-white w-20 h-24 flex items-center mt-5 rounded-lg cursor-pointer transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-300"
    id="scissors2"
  >
    <img src="./scissors.png" alt="" class="w-20 -rotate-90" />
  </div>
</div>
<div class="hidden absolute top-1/2 left-1/2 text-2xl" id="status"></div>
</div>`;
  }
}
