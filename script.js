let seconds = 0
let minutes = 0
let hours = 0
let interval
const relogio = document.querySelector('h1')

function twoDigits (digit){
    if (digit<10){
        return ('0'+digit)
    }else {
        return (digit)
    }
}

function start (){
   time()
   interval = setInterval(time, 1000)
}

function pause(){
    clearInterval(interval)
}
function stop (){
    clearInterval(interval)
    seconds = 0
    minutes = 0
    hours = 0
    relogio.innerText = '00:00:00'

}

function time(){
    seconds++
    if(seconds == 60){
        minutes++
        seconds=0
    } else if (minutes == 60){
        hours++
        minutes=0
    } else if (hours > 23 ) {
        hours = 0
    }
    relogio.innerText = twoDigits(hours)  + ':' + twoDigits(minutes)  + ':' + twoDigits(seconds) 
}