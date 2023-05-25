//for the game to start
const startBtn = document.querySelector('.start-btn');
const overlay = document.querySelector('#overlay');
const gameContainer = document.querySelector('#game-container');
const textBelowTitle = document.querySelector('#text-below-title');
const title = document.querySelector('#title');
const titleR = document.querySelector('.title-r');
const titleP = document.querySelector('.title-p');
const titleS = document.querySelector('.title-s');
const choices = document.querySelector('#choices-container');
const scoresContainer = document.querySelector('#scores');

console.log('3fddfhg')
//transition to the game from start game screen
startBtn.addEventListener('click', hideOverlayAndGameStart);
function hideOverlayAndGameStart()
{
    gameContainer.style.opacity = '1';
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = "none";
        gameContainer.style.display = 'grid';
        setTimeout(() => {
            titleR.style.opacity = '1';
            setTimeout(() => {
                titleP.style.opacity = '1'; //I know I am nesting a lot, will improve on this in the next projects
                setTimeout(() => {
                    titleS.style.opacity = '1';
                    setTimeout(() => {
                        textBelowTitle.style.opacity = '1';
                        setTimeout(() => {
                            scoresContainer.style.opacity = '1';
                            choices.style.opacity = '1';
                            
                        }, 1200)    
                    }, 1000)
                }, 700)
            }, 700);
          }, 700);
        }, 600);
}

let playerScore = 0;
let computerScore = 0;
const rButton = document.querySelector('#rock');
const pButton = document.querySelector('#paper');
const sButton = document.querySelector('#scissors');
let playerScoreSpan = document.querySelector('#player-score-span');
let computerScoreSpan = document.querySelector('#computer-score-span');

function playerSelection(){
    rButton.addEventListener('click', () => {
        playRound('rock', getComputerChoice())
    });
    pButton.addEventListener('click', () => {
        playRound('paper', getComputerChoice())
    });
    sButton.addEventListener('click', () => {
        playRound('scissors', getComputerChoice())
    });
}

function getComputerChoice(){
let random_number = Math.floor(Math.random() * 3);
let  ComputerSelection;
    if(random_number == 0){
    return ComputerSelection = "rock";
}
    else if(random_number == 1){
    return ComputerSelection = "paper";
}
    else if(random_number == 2){
    return ComputerSelection = "scissors";
}

}
function playRound(x, y){
    if (x == "rock" && y == "paper"){
        return winRP();
    }
    else if (x == "rock" && y == "scissors"){
        return loseRS();
    }
    else if (x == "paper" && y == "scissors"){
        return losePS();
    }
    else if (x == "paper" && y == "rock"){
        return winPR();
    }
    else if (x == "scissors" && y == "rock"){
        return loseSR();;
    }
    else if (x == "scissors" && y == "paper"){
        return winSP();
    }
    else if (x == "rock" && y == "rock"){
        return tieR();
    }
    else if (x == "paper" && y == "paper"){
        return tieP();
    }
    else if (x == "scissors" && y == "scissors"){
        return tieS();
    }

}
function win(){
    playerScore++;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
    console.log('win')
    if(playerScore == 5){
        gameReset();
        
    }

}
function lose(){
    computerScore++;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
    console.log('lose')
    if(computerScore == 5){
        gameReset();
    }
}
function tie(){
    console.log('tie')
}
function gameReset(){
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.innerHTML = playerScore;
    computerScoreSpan.innerHTML = computerScore;
}
function winRP(){
    win();
}
function winPR(){
    win();
}
function winSP(){
    win();
}

function losePS(){
    lose();
}
function loseRS(){
    lose();
}
function loseSR(){
    lose();
}


playerSelection();
/*
I WAS TRYING TO MAKE THE ANIMATION OF THE TITLE SCREEN WAY TOO COMPLICATED
function displayWords(i) {
    if (i < titleArr.length) {
      const wordElement = document.createElement("span");
      wordElement.textContent = titleArr[i];

      // Add a space after each word except for the last one
      if (i < titleArr.length - 1) {
        const spaceElement = document.createTextNode(" ");
        title.appendChild(spaceElement);
      }

      title.appendChild(wordElement);
      void wordElement.offsetWidth;
      wordElement.style.opacity = "1";
      setTimeout(() => {
        displayWords(i + 1);
      }, 1000);
    }
  }
*/