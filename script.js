let winMsg = 'victory!';
let loseMsg = 'Crushing Defeat!';
let tieMsg = 'tie!';
let playerMove;
let ComputerMove;
let results;
let buttons = document.querySelectorAll('button');
let moveDisplay=document.querySelectorAll('.move-display h2');

let moveList = ['Rock', 'Paper', 'Scissor'];
let calcResult=(move1,move2)=>{
 if(move1==move2){
    return{
        "Message" : tieMsg,
        "User": move1,
        "Computer" :move2
    }
 }
 else if(move1=='Rock'&& move2=='Scissor'){
    return{
        "Message" : winMsg,
        "User": move1,
        "Computer" :move2
    }
 }
 else if(move1=='Scissor'&& move2=='Rock'){
    return{
        "Message" : loseMsg,
        "User": move1,
        "Computer" :move2
    }
 }
 else if(move1=='Rock'&& move2=='Paper'){
    return{
        "Message" : loseMsg,
        "User": move1,
        "Computer" :move2
    }
 }
 else if(move1=='Scissor'&& move2=='Paper'){
    return{
        "Message" : winMsg,
        "User": move1,
        "Computer" :move2
    }
 }
 else if(move1=='Paper'&& move2=='Rock'){
    return{
        "Message" : winMsg,
        "User": move1,
        "Computer" :move2
    }
 }
 else{
    return{
        "Message" : loseMsg,
        "User": move1,
        "Computer" :move2
    }
 }
}
let randomMove=()=>{
  return Math.floor(Math.random()*3);
 }
let endGame=((event)=>{
  playerMove = event;
  ComputerMove = moveList[randomMove()];
  results=calcResult(playerMove,ComputerMove);
  document.getElementById('status-head').innerHTML=results['Message'];
  for (i = 0; i < buttons.length; i = i + 2) {
    buttons[i].style.visibility = 'hidden';
}
document.querySelectorAll("button")[1].innerHTML = "Play Again";
buttons[1].addEventListener("click", startGame);
  for (let i=0;i<moveDisplay.length;i++){
    moveDisplay[i].style.visibility='visible';
    
  }
  moveDisplay[0].innerHTML='you played '+ results['User'];
  moveDisplay[1].innerHTML='computer played '+ results['Computer'];
  
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

for(let i=0;i<buttons.length;i++){
    buttons[i].textContent=moveList[i];
    buttons[i].style.display='inline-block';
    buttons[i].addEventListener('click',()=>{
      endGame(moveList[i]);
    })
}

}
startGame()
