// variables to track player and computer score
let uScore = 0;
let cScore = 0;

let buttons = document.querySelectorAll('button');
let game = document.querySelector('.game')
let reset = document.querySelector('span')


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

//restart game
let restart = document.querySelector('.restart').addEventListener('click', ()=>{
    window.location.reload();
})

// determine winner
const playRound = (playerSelection, computerPlay) => {
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


let scoreDiv = document.querySelector('.score');
let resultDiv = document.querySelector('.result');
let userDiv = document.querySelector('.userChoice');
let compDiv = document.querySelector('.computerChoice');
let roundDiv = document.querySelector('.round');

// play game and declare winner
const playGame = (e) => {
    const userChoice = e.target.className;
        const computerChoice = computerPlay();
        let result = playRound(userChoice, computerChoice);
         userDiv.textContent = `You threw: ${userChoice}`;
        compDiv.textContent = `The computer threw: ${computerChoice}`;
        resultDiv.textContent = result;
        scoreDiv.textContent = `Your score: ${uScore} Computer score: ${cScore}\n`
        
        if(cScore == 5 || uScore == 5){
        if(uScore > cScore){
            reset.style.display = 'initial'
        endGame();
        roundDiv.textContent = ('Hooray! You won this round.😀')
    } else if(uScore < cScore){
        roundDiv.textContent = ('Oops! You lost this round.😟')
            reset.style.display = 'initial'
            endGame();
    } else{
        if(uScore == cScore){
            roundDiv.textContent = ('Draw! That was close.')
            reset.style.display = 'initial'
            endGame();
        }    
    }
}

};



let endGame = () =>{
    buttons.forEach(button=>{
        button.removeEventListener('click', playGame)
    })
};

buttons.forEach(button => {
    button.addEventListener('click', playGame)
});
