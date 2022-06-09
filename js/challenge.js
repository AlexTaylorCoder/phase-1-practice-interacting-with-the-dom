//Timer that counts each second 
//+ and - that increment / decrement a second
//Heart that saves amount of clicks per second
//Pause stops timer disables clicking other buttons
//Text area allows comment to be submitted and appends content to page

const countNode = document.getElementById("counter")
const pauseNode = document.getElementById("pause")
const minusNode = document.getElementById("minus")
const plusNode = document.getElementById("plus")
const form = document.querySelector("form")
const heart = document.getElementById("heart")

let count = 0
let pause = 0

let heartCount = 0
let pauseClicks = 1

let interval = setInterval(timer,1000)

heart.addEventListener("click",()=>{
    const newHeart = document.createElement("li")

    heartCount++

    if (heartCount > 1)
    newHeart.textContent = count + " has been liked "+ heartCount + " times"
    else (    newHeart.textContent = count + " has been liked "+ heartCount + " time"
    )
    document.querySelector(".likes").append(newHeart)
})

form.addEventListener("submit",(e)=> {
    e.preventDefault()
    const newP = document.createElement("p")
    newP.textContent = e.target.querySelector("#comment-input").value

    document.body.append(newP)
})

minusNode.addEventListener("click",()=>{
    count--
    countNode.textContent = count
})

plusNode.addEventListener("click",()=>{
    count++
    countNode.textContent = count

})

pauseNode.addEventListener("click",(e)=> {
    pauseClicks++
  
    if (pauseClicks % 2 == 0) {
        e.target.textContent = "resume"
        document.querySelectorAll("button").forEach((item)=>{
            item.disabled = true
        })
        e.target.disabled = false
        clearInterval(interval)

    }
    else {
        e.target.textContent = "pause"
        document.querySelectorAll("button").forEach((item)=>{
            item.disabled = false
        })
        interval = setInterval(timer,1000)

    }
})

function timer() {
    count++
    heartCount = 0
    countNode.textContent = count
}

//while (pause === 0) startTimer()