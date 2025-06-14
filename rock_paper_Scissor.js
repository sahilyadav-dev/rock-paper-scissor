let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loose: 0,
  draw: 0,
};

updateScore();

/* if(!score){
  score={
  win: 0,
  loose: 0,
  draw: 0
  };
}; */

function pickRandomNumber() {
  let computerMove = "";
  Math.random();
  const randomNumber = Math.random();

  console.log(randomNumber);
  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
    computerMove = "Scissors";
  }

  return computerMove;
}

function action(parameter1) {
  const computerMove = pickRandomNumber();
  console.log(computerMove);
  let result = "";

  if (parameter1 === "Rock") {
    if (computerMove === "Rock") {
      result = "Draw";
    } else if (computerMove === "Paper") {
      result = "Loose";
    } else if (computerMove === "Scissors") {
      result = "Win";
    }

    if (result === "Win") {
      score.win += 1;
    } else if (result === "Loose") {
      score.loose += 1;
    } else if (result === "Draw") {
      score.draw += 1;
    }
  } else if (parameter1 === "Paper") {
    if (computerMove === "Paper") {
      result = "Draw";
    } else if (computerMove === "Scissors") {
      result = "Loose";
    } else if (computerMove === "Rock") {
      result = "Win";
    }

    if (result === "Win") {
      score.win += 1;
    } else if (result === "Loose") {
      score.loose += 1;
    } else if (result === "Draw") {
      score.draw += 1;
    }
  } else if (parameter1 === "Scissors") {
    if (computerMove === "Scissors") {
      result = "Draw";
    } else if (computerMove === "Rock") {
      result = "Loose";
    } else if (computerMove === "Paper") {
      result = "Win";
    }

    if (result === "Win") {
      score.win += 1;
    } else if (result === "Loose") {
      score.loose += 1;
    } else if (result === "Draw") {
      score.draw += 1;
    }
  }

  document.querySelector(".js-result").innerText = result;

  document.querySelector(".js-pickup").innerHTML = `You Picked 
<img src="images/${parameter1}-emoji.png" class="move-icon">  Computer Picked<img src="images/${computerMove}-emoji.png" class="move-icon"> `;

  updateScore();

  localStorage.setItem("score", JSON.stringify(score));

  //           alert(`You picked Scissors, Computer Picked ${computerMove}, You ${result}
  // Wins: ${score.win}, Looses ${score.loose}, Draw: ${score.draw}` ) ;
}

function updateScore() {
  let score1 = (document.querySelector(
    ".js-score"
  ).innerText = `Win: ${score.win}, Loose: ${score.loose}, Draw: ${score.draw}`);
}

console.log(score);
