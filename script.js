inputButtons = document.querySelectorAll(".input-btn")
restartBtn = document.getElementById("restart")

const box1 = document.querySelectorAll(".input-btn")[0]
const box2 = document.querySelectorAll(".input-btn")[1]
const box3 = document.querySelectorAll(".input-btn")[2]
const box4 = document.querySelectorAll(".input-btn")[3]
const box5 = document.querySelectorAll(".input-btn")[4]
const box6 = document.querySelectorAll(".input-btn")[5]
const box7 = document.querySelectorAll(".input-btn")[6]
const box8 = document.querySelectorAll(".input-btn")[7]
const box9 = document.querySelectorAll(".input-btn")[8]



// event.target.dataset.num

let turnCounter = 0
let winner = null
let winConditionMet = false

function handleClick(event) {
    
    turnCounter++
    if (turnCounter % 2 === 0) {
        event.target.textContent = "X"
        event.target.classList.add("X")   
    } else {
        event.target.textContent = "O"
        event.target.classList.add("O")
    }

    console.log(`${event.target.dataset.num} clicked`)
    
    event.target.classList.add("clicked")
    event.target.disabled = true
    checkResult()
}

// check rows if there is a winner
function checkResult() {
    // debugger
        
        // check horizontals - use for each loop
        if (box1.classList.value.split(" ")[1] ===  box2.classList.value.split(" ")[1] && box1.classList.value.split(" ")[1] === box3.classList.value.split(" ")[1] && box1.classList.value.split(" ")[2] !== undefined) {
            winner = box4.classList.value.split(" ")[1]
            winConditionMet = true
        }
        if (box4.classList.value.split(" ")[1] ===  box5.classList.value.split(" ")[1] && box4.classList.value.split(" ")[1] === box6.classList.value.split(" ")[1] && box4.classList.value.split(" ")[2] !== undefined) {
            winner = box4.classList.value.split(" ")[1]
            winConditionMet = true
        }
        if (box7.classList.value.split(" ")[1] ===  box8.classList.value.split(" ")[1] && box7.classList.value.split(" ")[1] === box9.classList.value.split(" ")[1] && box7.classList.value.split(" ")[2] !== undefined) {
            winner = box7.classList.value.split(" ")[1]
            winConditionMet = true
        }
        // check verticals
        if (box1.classList.value.split(" ")[1] ===  box4.classList.value.split(" ")[1] && box1.classList.value.split(" ")[1] === box7.classList.value.split(" ")[1] && box1.classList.value.split(" ")[2] !== undefined) {
            winner = box1.classList.value.split(" ")[1]
            winConditionMet = true
        }
        if (box2.classList.value.split(" ")[1] ===  box5.classList.value.split(" ")[1] && box2.classList.value.split(" ")[1] === box8.classList.value.split(" ")[1] && box2.classList.value.split(" ")[2] !== undefined) {
            winner = box2.classList.value.split(" ")[1]
            winConditionMet = true
        }
        if (box3.classList.value.split(" ")[1] ===  box6.classList.value.split(" ")[1] && box3.classList.value.split(" ")[1] === box9.classList.value.split(" ")[1] && box3.classList.value.split(" ")[2] !== undefined) {
            winner = box3.classList.value.split(" ")[1]
            winConditionMet = true
        }
        // check diagonals
        if (box1.classList.value.split(" ")[1] ===  box5.classList.value.split(" ")[1] && box1.classList.value.split(" ")[1] === box9.classList.value.split(" ")[1] && box1.classList.value.split(" ")[2] !== undefined) {
            winner = box1.classList.value.split(" ")[1]
            winConditionMet = true
        }
        if (box3.classList.value.split(" ")[1] ===  box5.classList.value.split(" ")[1] && box3.classList.value.split(" ")[1] === box7.classList.value.split(" ")[1] && box3.classList.value.split(" ")[2] !== undefined) {
            winner = box4.classList.value.split(" ")[1]
            winConditionMet = true
        }
    
    if(document.querySelectorAll(".clicked").length === 9) {
        setTimeout (function() {
            inputButtons.forEach(button =>{
                button.disabled = false
                button.textContent = ""
                button.classList.remove("clicked")
                button.classList.remove("X")
                button.classList.remove("O")
            }, 30000)
        })
    }

    if (winConditionMet === true) {
    // display winning page
    console.log(`The winner is ${winner}`)
        inputButtons.forEach(button => {
            button.disabled = true
        })
    document.body.style.backgroundColor = "blue"
    }
}


function handleRestart() {
    inputButtons.forEach(button => {
        button.disabled = false
        button.textContent = ""
        button.classList.remove("clicked")
        button.classList.remove("X")
        button.classList.remove("O")
    })
    turnCounter = 0
    document.body.style.backgroundColor = "white"
    winConditionMet = false
}


inputButtons.forEach(button => {
    button.addEventListener("click", handleClick)})


restartBtn.addEventListener("click", handleRestart)