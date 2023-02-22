inputButtons = document.querySelectorAll(".input-btn")

const box1 = document.querySelectorAll(".input-btn")[0]
const box2 = document.querySelectorAll(".input-btn")[1]
const box3 = document.querySelectorAll(".input-btn")[2]
const box4 = document.querySelectorAll(".input-btn")[3]
const box5 = document.querySelectorAll(".input-btn")[4]
const box6 = document.querySelectorAll(".input-btn")[5]
const box7 = document.querySelectorAll(".input-btn")[6]
const box8 = document.querySelectorAll(".input-btn")[7]
const box9 = document.querySelectorAll(".input-btn")[8]


function handleClick(event) {
    console.log(`${event.target.dataset.num} clicked`)
    event.target.textContent = "X"
    event.target.classList.add("clicked")
    event.target.disabled = true
    checkResult()
}

// check rows if there is a winner
function checkResult() {
    // debugger
    if(document.querySelectorAll(".clicked").length === 9) {
        setTimeout (function() {
            inputButtons.forEach(button =>{
                button.disabled = false
                button.textContent = "."
                button.classList.remove("clicked")
        }, 30000)
        })
        
    } else {
    
        if (box1.textContent === box2.textContent && box1.textContent === box3.textContent) {
            console.log("heyhey")
        }
        if (box4.textContent === box5.textContent && box4.textContent === box6.textContent) {
            console.log("heyhey")
        }
        if (box7.textContent === box8.textContent && box7.textContent === box9.textContent) {
            console.log("heyhey")
        }

        if (box1.textContent === box4.textContent && box1.textContent === box7.textContent) {
            console.log("heyhey")
        }
        if (box2.textContent === box5.textContent && box2.textContent === box8.textContent) {
            console.log("heyhey")
        }
        if (box3.textContent === box6.textContent && box3.textContent === box9.textContent) {
            console.log("heyhey")
        }

        if (box1.textContent === box5.textContent && box1.textContent === box9.textContent) {
            console.log("heyhey")
        }
        if (box3.textContent === box5.textContent && box3.textContent === box7.textContent) {
            console.log("heyhey")
        }
    }
}





inputButtons.forEach(button => {
    button.addEventListener("click", handleClick)})