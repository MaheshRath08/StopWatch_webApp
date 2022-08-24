let display = document.querySelector(".display")
let start = document.getElementById("start")
let pause = document.getElementById("pause")
let reset = document.getElementById("reset")

let startTime = 0
let pastTime = 0
let callEl
let isPaused = true
let milliseconds = 0
let sec = 0
let min = 0

start.addEventListener("click", ()=>{
    if(isPaused){
        isPaused = false
        startTime = Date.now() - pastTime
        callEl = setInterval(updateTime, 50)
    }
})

pause.addEventListener("click", ()=>{
    if(!isPaused){
        isPaused = true
        clearInterval(callEl)
        pastTime = Date.now() - startTime
    }
})

reset.addEventListener("click", ()=>{
    clearInterval(callEl)
    mili = 0
    sec = 0
    min = 0
    isPaused = true
    startTime = 0
    pastTime = 0
    display.textContent = "00:00:000"
})

function updateTime(){
    pastTime = Date.now() - startTime
    // mili = parseInt((pastTime % 1000) / 100)
    milliseconds = parseInt((pastTime%1000).toFixed(3))
    sec = Math.floor((pastTime / 1000) % 60)
    min = Math.floor((pastTime / (1000*60)) % 60)

    sec = format(sec)
    min = format(min)
    let mili = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds
    function format(e){
        return ("0"+e).length > 2 ? e : "0"+e
    }


    display.textContent = `${min}:${sec}:${mili}`
}