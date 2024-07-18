let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScoreCount = document.querySelector("#user-score");
const compScoreCount = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    const compChoice = options[index];
    return compChoice;
}

const drawGame = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "#081b31";

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
            userWin ? userScore++ : compScore++;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
            userWin ? userScore++ : compScore++;
        } else {
            userWin = compChoice === "rock" ? false : true;
            userWin ? userScore++ : compScore++;
        }

        showWinner(userWin, userChoice, compChoice);
        updateScore(userWin, userScore, compScore);
    }

}

const showWinner = (userWin, userChoice, compChoice) => {
    msg.innerText = userWin ? `You Won! Your ${userChoice} beats ${compChoice}` : `You loss. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = userWin ? "green" : "red";
};

const updateScore = (userWin, userScore, compScore) => {
    userWin ? userScoreCount.innerText = userScore : compScoreCount.innerText = compScore;
};