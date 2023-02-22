inputBoxes = document.querySelectorAll(".inputBox")

const box1 = document.querySelectorAll(".inputBox")[0]
const box2 = document.querySelectorAll(".inputBox")[1]
const box3 = document.querySelectorAll(".inputBox")[2]
const box4 = document.querySelectorAll(".inputBox")[3]
const box5 = document.querySelectorAll(".inputBox")[4]
const box6 = document.querySelectorAll(".inputBox")[5]
const box7 = document.querySelectorAll(".inputBox")[6]
const box8 = document.querySelectorAll(".inputBox")[7]
const box9 = document.querySelectorAll(".inputBox")[8]



function handleClick(event) {
    console.log(`${event.target.dataset.num} clicked`)
    event.target.textContent = "X"
    checkResult()
}

// check rows if there is a winner
function checkResult() {

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




inputBoxes.forEach(box => {
    box.addEventListener("click", handleClick)})