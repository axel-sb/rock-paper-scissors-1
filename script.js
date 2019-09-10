// variables to track player and computer score
let uScore = 0;
let cScore = 0;

// get computer's choice
const computerPlay = () => {
    var comp = Math.floor(Math.random() * 3) + 1;
    
    if (comp === 1) {
        return "rock"
    } else if (comp == 2) {
        return "scissors"
    } else {
        return "paper"
    }
}


// get user's score
const playerSelection = (choice) => {
    choice = choice.toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice.toLowerCase();
    } else {
        console.log("Please, choose a valid choice: Rock, Paper or Scissors")
    }
    
}

// determine winner
const playRound = (playerSelection, computerPlay) => {
    // console.log(playerSelection,computerPlay)
    if (playerSelection === "rock") {
        if (computerPlay === "scissors") {
            uScore++
            return "You win! Rock destroys Scissors."
        } else if (computerPlay === "paper") {
            cScore++
            return "You lose! Paper covers Rock."
        } else {
            return "It's a tie."
        }
    } else if (playerSelection === "scissors") {
        if (computerPlay === "paper") {
            uScore++
            return "You win! Scissors cut Paper."
        } else if (computerPlay === "rock") {
            cScore++
            return "You lose! Rock destroys Scissors."
        } else {
            return "It's a tie."
        }
    } else {
        if (playerSelection === "paper") {
            if (computerPlay === "rock") {
                uScore++
                return "You win! Paper covers Rock."
            } else if (computerPlay === "scissors") {
                cScore++
                return "You lose! Scissors cut Paper."
            }else{
            return "It's a tie."                
        }
        }
    }
    
}

// play game and declare winner
const playGame = () => {
    
    for(var i = 0; i < 5; i++){
        const userChoice = playerSelection(prompt("Choose a choice: Rock, Paper or Scissors"));
        const computerChoice = computerPlay();
        let result = playRound(userChoice, computerChoice);
        console.log(`You threw: ${userChoice}`);
        console.log(`The computer threw: ${computerChoice}`);
        console.log(result);
        console.log(`Your score: ${uScore}\nComputer score: ${cScore}\n`)
    }
    if(uScore > cScore){
        console.log('\nHooray! You won this round.')
    } else if(uScore < cScore){
        console.log('\nOops! You lost this round.')
    } else{
        console.log('\nDraw! That was close.')
    }

};

playGame();