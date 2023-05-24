//for the game to start
const startBtn = document.querySelector('.start-btn');
const overlay = document.querySelector('#overlay');
const gameContainer = document.querySelector('#game-container');

startBtn.addEventListener('click', function() {
    gameContainer.style.opacity = '1';
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = "none";
        gameContainer.style.display = 'grid';
        // gameContainer.style.width = '100%';
        // gameContainer.style.height = '100vh';
      }, 400);
    
  });


function hideOverlay()
{
    overlay.style.display = 'none';
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