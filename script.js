inputBoxes = document.querySelectorAll("button")

const box2 = document.querySelectorAll("button")[1]
const box1 = document.querySelectorAll("button")[0]
const box3 = document.querySelectorAll("button")[2]
const box4 = document.querySelectorAll("button")[3]
const box5 = document.querySelectorAll("button")[4]
const box6 = document.querySelectorAll("button")[5]
const box7 = document.querySelectorAll("button")[6]
const box8 = document.querySelectorAll("button")[7]
const box9 = document.querySelectorAll("button")[8]



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
   
    // for (item of list) {
    //     if (item.textContent !== unclicked) {
    //         //draw
    //         //reset
    //     }
    // }
    // if 
}




inputBoxes.forEach(box => {
    box.addEventListener("click", handleClick)})