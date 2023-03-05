let taimer = 0;
let counter = document.getElementById('counter');

let timerId = ''
function start() {
   timerId = setInterval(() => {
   taimer++;
    counter.innerText = taimer;
   }, 1000)
}

function reset() {
    clearInterval(timerId);
    taimer = 0;
    counter.innerText = taimer;
}

function pause() {
    clearInterval(timerId);
}