const playerScore = document.querySelector(".player-score");
const AIScore = document.querySelector(".ai-score");
const playerLast = document.querySelector(".player-last");
const AILast = document.querySelector(".ai-last");
var playerChoice = "";
var AIChoice = "";
var playerScoreInc = 0;
var AIScoreInc = 0;

function playerMove()
{
    rockbtn.addEventListener("click", )
}

function AIMove()
{
    const possibility = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * possibility.length);
    const move = possibility [random];

    if (move == "rock") 
    {
        return 0;    
    }
    else if (move == "paper")
    {
        return 1;
    }
    else if (move == "scissor")
    {
        return 2;
    }
}

function game(playerMove)
{   
    var AIChoiceTemp = AIMove();
    playerChoice = playerMove;
    AIChoice = AIChoiceTemp;

    if ((playerChoice + 1) % 3 == AIChoiceTemp) 
    {   
        AIScoreInc++;
        AIScore.innerHTML = AIScoreInc;
    }
    else if (playerChoice == AIChoiceTemp)
    {
        console.log("draw")
    }
    else
    {
        playerScoreInc++;
        playerScore.innerHTML = playerScoreInc;
    }
    history(playerChoice, AIChoice);
}

function lastMoves(person)
{
    if(person == 0)
    {
        return "img/0.png"
    }
    else if(person == 1)
    {
        return "img/1.png"
    }
    else if(person == 2)
    {
        return "img/2.png"
    }
}

function history(player, AI)
{
    $('.player-last').attr("src", lastMoves(player));
    $('.AI-last').attr("src", lastMoves(AI));
}

function reset ()
{
    playerScoreInc = 0;
    playerScore.innerHTML = playerScoreInc;
    AIScoreInc = 0;
    AIScore.innerHTML = AIScoreInc;
    $('.player-last').attr("src", "img/rockpaperscissors.png");
    $('.AI-last').attr("src", "img/rockpaperscissors.png");
}