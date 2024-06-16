function computerMove(){
    move = Math.floor(Math.random()*3)
    return move
}




image_paths = ["images\\p.png", "images\\s.png", "images\\r.png"]
opponentMove = document.getElementById("opponent-move")
playerMove = document.getElementById("player-move")
console.log(opponentMove)
i = 0;
timer = setInterval(function(){
    opponentMove.src = image_paths[(i++)%image_paths.length]
}, 45)

rockButton = document.getElementById('rock-button')
paperButton = document.getElementById('paper-button')
scissorsButton = document.getElementById('scissors-button')

playerScore = document.getElementById('player-score')
opponentScore = document.getElementById('opponent-score')

playerScore.textContent = 0;
opponentScore.textContent = 0;

var player = 0;
var opp = 0;

rockButton.addEventListener('click',function(){
    playerMove.src = image_paths[2]
    clearTimeout(timer)
    var computer = computerMove();
    if(computer == 0) opp++;
    else if(computer == 1) player++;
    opponentMove.src = image_paths[computer]
    playerScore.textContent = player
    opponentScore.textContent = opp
    console.log(player)
    console.log(computer)
})

paperButton.addEventListener('click',function(){
    playerMove.src = image_paths[0]
    clearTimeout(timer)
    var computer = computerMove();
    if(computer == 1) opp++;
    else if(computer == 2) player++;
    opponentMove.src = image_paths[computer]
    playerScore.textContent = player
    opponentScore.textContent = opp
    console.log(player)
    console.log(computer)
})

scissorsButton.addEventListener('click',function(){
    playerMove.src = image_paths[1]
    clearTimeout(timer)
    var computer = computerMove();
    if(computer == 0) player++;
    else if(computer == 2) opp++;
    opponentMove.src = image_paths[computer]
    playerScore.textContent = player
    opponentScore.textContent = opp
    console.log(player)
    console.log(computer)
})





