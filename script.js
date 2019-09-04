
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

const playerSelection = (choice=prompt("Choose a choice: Rock, Paper or Scissors")) => {
    // choice.toLowerCase();
    if (choice.toLowerCase() === 'rock' || choice.toLowerCase() === 'paper' || choice.toLowerCase() === 'scissors') {
        return choice.toLowerCase();
    } else {
        console.log("Please, choose a valid choice: Rock, Paper or Scissors")
    }

}


const playRound = (playerSelection, computerPlay) => {

    // console.log(playerSelection,computerPlay)
    if (playerSelection === "rock") {
        if (computerPlay === "scissors") {
            return "You win! Rock destroys Scissors."
        } else if (computerPlay === "paper") {
            return "You lose! Paper covers Rock."
        } else {
            return "It's a tie."
        }
    } else if (playerSelection === "scissors") {
        if (computerPlay === "paper") {
            return "You win! Scissors cut Paper."
        } else if (computerPlay === "rock") {
            return "You lose! Rock destroys Scissors."
        } else {
            return "It's a tie."
        }
    } else {
        if (playerSelection === "paper") {
            if (computerPlay === "rock") {
                return "You win! Paper covers Rock."
            } else if (computerPlay === "scissors") {
                return "You lose! Scissors cut Paper."
            }else{
            return "It's a tie."                
            }
        }
    }
}

const playGame = () => {
    const userChoice = playerSelection();
    const computerChoice = computerPlay();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(playRound(userChoice, computerChoice));
  };
console.clear();
playGame();