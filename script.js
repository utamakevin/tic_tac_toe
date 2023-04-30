inputButtons = document.querySelectorAll(".input-btn")
restartBtn = document.getElementById("restart")
message = document.getElementById("message")
counter = document.getElementById("counter")
h1 = document.querySelector("h1")

const clickSound = new Audio("click_sound.wav")

let turnCounter = 0
let player1 = []
let player2 = []
let player1WinCount = 0
let player2WinCount = 0
let roundCount = 1
let allWinCondition = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]

message.textContent = `O's turn`

function handleClick(event) {
    turnCounter++
    clickSound.play()
    
    if (turnCounter % 2 === 0) {
        event.target.textContent = "X" 
        player2.push(Number(event.target.dataset.num))
        player2.sort(function(a, b){return a-b})
        message.textContent = `O's turn`
    
    } else {
        event.target.textContent = "O"
        player1.push(Number(event.target.dataset.num))
        player1.sort(function(a, b){return a-b})
        message.textContent = `X's turn`
    }

    console.log(`${event.target.dataset.num} clicked`)
    event.target.classList.add("clicked")
    event.target.disabled = true

    checkResult()
    
    checkDraw()
}

function checkResult() {
    let hasAllElems = []
    let test = null

    if (turnCounter % 2 === 0) {
        for (i = 0; i < allWinCondition.length; i++) {
            test = allWinCondition[i].every(element => player2.includes(element))
            hasAllElems.push(test)
        }

    } else {
        for (i = 0; i < allWinCondition.length; i++) {
            test = allWinCondition[i].every(element => player1.includes(element))
            hasAllElems.push(test)
        }
    }

    if(hasAllElems.includes(true)) {
        processResult()

    } else {
        return false
    }
}

function processResult() {
    if (turnCounter % 2 === 0) {
        message.textContent = `The winner is X`
        document.body.style.background = "linear-gradient(90deg, rgba(64,224,208,1) 0%, rgba(72,184,247,1) 100%)"
        for(button of inputButtons) {
            button.style.backgroundColor = "rgba(0, 0, 0, 0)"
        }
        player2WinCount++

    } else {
        message.textContent = `The winner is O`
        document.body.style.background = "linear-gradient(90deg, rgba(255,99,71,1) 0%, rgba(240,8,8,1) 100%)"
        for(button of inputButtons) {
            button.style.backgroundColor = "rgba(0, 0, 0, 0)"
        }
        player1WinCount++
    }

    inputButtons.forEach(button => {
        button.disabled = true
    })

    counter.textContent = `${player1WinCount} O | ${player2WinCount} X`
}


function checkDraw() {
    if(document.querySelectorAll(".clicked").length === 9) {
        setTimeout (function() {
            inputButtons.forEach(button =>{
                button.disabled = false
                button.textContent = ""
                button.classList.remove("clicked")
                button.classList.remove("X")
                button.classList.remove("O")
                player1 = []
                player2 = []
            }, 30000)
        })
    }
}


function handleRestart() {
    inputButtons.forEach(button => {
        button.disabled = false
        button.textContent = ""
        button.classList.remove("clicked")
        button.classList.remove("X")
        button.classList.remove("O")
        button.style.backgroundColor = "rgba(0, 0, 0, 0)"
    })

    document.body.style.background = "linear-gradient(90deg, rgba(252, 175, 67, 1) 0%, rgba(255, 150, 113, 1) 100%)"

    player1 = [] 
    player2 = [] 
    
    roundCount++
    h1.textContent = `TIC TAC TOE | Round ${roundCount}`
    if (turnCounter % 2 === 0) {
        message.textContent = `O's turn`
    } else {
        message.textContent = `X's turn`
    }
}


inputButtons.forEach(button => {
    button.addEventListener("click", handleClick)})

restartBtn.addEventListener("click", handleRestart)