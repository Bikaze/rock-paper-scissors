alert("Open the console to see results: Option + Comman + J(on macOS) or Ctrl + Shift + J(on Windows/Linux"); 

let wins = 0;
let loses = 0;

function playRound(player, computer) {
    if(player == computer) {
        return `It's a tie!`;
    }else if(player + computer == 5) {
        let result = player > computer ? "You Won!" : "Ooops! You Lost.";
        result == "You Won!" ? wins ++ : loses ++;
        return  `${result} Scissors beat Paper.`;
    }else if(player + computer == 4) {
        let result = player < computer ? "You Won!" : "Ooops! You Lost.";
        result == "You Won!" ? wins ++ : loses ++;
        return  `${result} Rock beats Scissors.`;
    }else if(player + computer == 3) {
        let result = player > computer ? "You Won!" : "Ooops! You Lost.";
        result == "You Won!" ? wins ++ : loses ++;
        return  `${result} Paper beats Rock.`;
    }
}


for(let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please enter rock, paper or scissors to play against the computer: ");
    playerSelection  = (/rock/i).test(playerSelection) ? 1 : (/paper/i).test(playerSelection) ? 2 : (/scissors/i).test(playerSelection) ? 3 : location.reload();
    let computerSelection = Math.floor(Math.random()*(3)) + 1;
    console.log(playRound(playerSelection, computerSelection));
}

let conclusion = wins > loses ? "Congratulations! You Won!" : wins == loses ? "It's a tie" : "Ooops! You Lost.";
console.log(`GAME OVER!
${conclusion}`)
