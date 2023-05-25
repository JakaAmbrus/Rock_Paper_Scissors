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
                titleP.style.opacity = '1';
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

// function getComputerChoice(){
// let random_number = Math.floor(Math.random() * 3);
// let  ComputerSelection;
//     if(random_number == 0){
//     return ComputerSelection = "rock";
// }
//     else if(random_number == 1){
//     return ComputerSelection = "paper";
// }
//     else if(random_number == 2){
//     return ComputerSelection = "scissors";
// }

// }
// function playRound(x, y){
//     if (x == "rock" && y == "paper"){
//         return "ah you lose";
//     }
//     else if (x == "rock" && y == "scissors"){
//         return "you won";
//     }
//     else if (x == "paper" && y == "scissors"){
//         return "ah you lose";
//     }
//     else if (x == "paper" && y == "rock"){
//         return "you won";
//     }
//     else if (x == "scissors" && y == "rock"){
//         return "ah you lose";;
//     }
//     else if (x == "scissors" && y == "paper"){
//         return "you won";
//     }
//     else if (x == y){
//         return "you tied"
//     }

// }
// let computer = getComputerChoice();
// let player = "rock";
// let result = playRound(player, computer);
// console.log("you chose " + player);
// console.log("computer chose " + computer);
// console.log(result);

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