let winMsg = 'victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'tie';

let moveList = ['Rock', 'Paper', 'Scissor'];
let randomMove=()=>{
  return moveList[Math.floor(Math.random()*3)];
 }
 let calcResult = (move1, move2) => {
   if (move1 === move2) {
     return 'It\'s a tie!';
   } else if (
     (move1 === 'Rock' && move2 === 'Scissors') ||
     (move1 === 'Paper' && move2 === 'Rock') ||
     (move1 === 'Scissors' && move2 === 'Paper')
   ) {
     return 'You win!';
   } else {
     return 'Computer wins!';
   }
 };
 
let endGame = (playerMove) => {
  let computerMove = randomMove();

  let statusDisplay = document.getElementById('status-head');
  let moveDisplays = document.getElementsByClassName('move-display');
  let resultDisplay = moveDisplays[0].children[0];
  let movesDisplay = moveDisplays[1].children;

  let result = calcResult(playerMove, computerMove);

  statusDisplay.textContent = result;
  resultDisplay.textContent = 'Result:';

  movesDisplay[0].textContent = 'Player: ' + playerMove;
  movesDisplay[1].textContent = 'Computer: ' + computerMove;

  moveDisplays[0].style.visibility = 'visible';
  moveDisplays[1].style.visibility = 'visible';

  let buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = 'none';
    buttons[i].removeEventListener('click', endGame);
  }

  let playAgainButton = document.getElementById('play-again-button');
  playAgainButton.style.display = 'inline-block';
  playAgainButton.addEventListener('click', startGame);
};
let startGame = () => {
   //method1
 /*let statusDisplay=document.querySelector('#status-head');
 statusDisplay.textContent='Choose'*/
 //method2
 //document.getElementById('status-head').innerHTML='Choose'
 //difference of += and = in js in context of id and class
 //method3
  let statusDisplay = document.getElementById('status-head');
  statusDisplay.textContent = 'Choose!';

  let moveDisplay = document.getElementsByClassName('move-display')[0];
  moveDisplay.style.visibility = 'hidden';

  let buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = moveList[i];
    buttons[i].style.display = 'inline-block';
    buttons[i].addEventListener('click', endGame); 
  }
};

startGame();




  