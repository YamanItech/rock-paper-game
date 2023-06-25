let winMsg = 'victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'tie';

let moveList = ['Rock', 'Paper', 'Scissor'];

let startGame=()=>{
 //method1
 /*let statusDisplay=document.querySelector('#status-head');
 statusDisplay.textContent='Choose'*/
 //method2
 //document.getElementById('status-head').innerHTML='Choose'
 //difference of += and = in js in context of id and class
 //method3
 let statusDisplay=document.getElementById('status-head');
 statusDisplay.textContent='Choose!';

 document.getElementsByClassName('move-display')[0].style.visibility='hidden';


let buttons = document.querySelectorAll('button');
for(let i=0;i<buttons.length;i++){
    buttons[i].textContent=moveList[i];
    buttons[i].style.display='inline-block';
}
moveList.forEach((move, index) => {
    let button = document.querySelectorAll('button')[index];
    button.textContent = move;
    button.style.display = 'inline-block';
    button.addEventListener('click', () => {
      player = move;
      let computerMove = generateComputerMove();
      // continue with game logic using player and computerMove
    });
  });
  
// needed to call endGame()


}
startGame()
let endGame=(event)=>{

}
let calcResult=(move1,move2)=>{

}
let randomMove=()=>{
 return Math.floor(Math.random()*3);
}
let generateComputerMove = () => {
    let ranInt = randomMove();
    let computer;
    switch (ranInt) {
      case 0:
        computer = 'Rock';
        break;
      case 1:
        computer = 'Paper';
        break;
      case 2:
        computer = 'Scissor';
        break;
    }
    return computer;
  };
  console.log(generateComputerMove())
  

  