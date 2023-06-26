let winMsg = 'victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'tie';
let playerMove;
let ComputerMove;
let results;

let moveList = ['Rock', 'Paper', 'Scissor'];
let calcResult=(move1,move2)=>{
 if(move1==move2){
  console.log(tieMsg)
 }
 else if(move1=='Rock'&& move2=='Scissor'){
  console.log(winMsg)
 }
 else if(move1=='Scissor'&& move2=='Rock'){
  console.log(loseMsg)
 }
 else if(move1=='Rock'&& move2=='Paper'){
  console.log(loseMsg)
 }
 else if(move1=='Scissor'&& move2=='Paper'){
  console.log(winMsg)
 }
 else if(move1=='Paper'&& move2=='Rock'){
  console.log(winMsg)
 }
 else{
  console.log(loseMsg)
 }
}
let randomMove=()=>{
  return Math.floor(Math.random()*3);
 }
let endGame=((event)=>{
  playerMove = event;
  ComputerMove = moveList[randomMove()];
  results=calcResult(playerMove,ComputerMove)
  
});
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
    buttons[i].addEventListener('click',()=>{
      endGame(moveList[i]);
    })
}


// needed to call endGame()


}
startGame()
