let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText = turnO ? "O" : "X";
        turnO = !turnO;
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }
    })
});

const checkWinner = () => {
    for (var pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val !="" && pos3Val !=""){
            if(pos1Val ===pos2Val && pos2Val ===pos3Val){
                //alert(`Winner: ${pos1Val}`);
                showWinner(pos1Val);
                return true;
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    count = 0;
    disableBoxes();
}

const gameDraw = () => {
    msg.innerText = "Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
    count = 0;
}

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled= true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled= false;
        box.innerText = "";
    }
}

newGameBtn.addEventListener("click",resetGame);

resetBtn.addEventListener("click",resetGame);