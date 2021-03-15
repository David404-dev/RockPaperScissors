const ogStr = prompt('Make a choice...');

const playerSelection = ogStr.charAt(0).toUpperCase() + ogStr.slice(1).toLowerCase();

const computerSelection = computerPlay();

function computerPlay(){
   let randomNum = Math.floor(Math.random() * 3) + 1;
   if(randomNum === 1) {
       return 'Rock'
   } else if(randomNum === 2) {
       return 'Paper'
   } else if (randomNum === 3) {
        return 'Scissors'
   } else {
       console.log('Error!')
   }
}


function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection) {
        return 'Draw'
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You lost! Paper beats Rock'
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You won! Rock beats Scissors'
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You won! Paper beats Rock'
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lost! Scissors beats Paper'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You won! Scissors beat Paper'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You lost! Rock beats Scissors'
    } else {
        return 'Error!!!'
    }
}

function game(){
  console.log(playRound(playerSelection, computerSelection))
}

game();
