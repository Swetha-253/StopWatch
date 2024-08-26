const set_timer=document.getElementById("timer");
const start_btn=document.getElementById("start");
const stop_btn=document.getElementById("stop");
const reset_btn=document.getElementById("reset");
 let running=false;
 let time;
 let secs=0;


 function formatTime(input) {
    const seconds = input;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const h = String(hours).padStart(2, '0');
    const M = String(minutes % 60).padStart(2, '0'); 
    const S= String(seconds % 60).padStart(2, '0'); 
    return `${h} : ${M} : ${S}`;
}

start_btn.addEventListener('click', () => {
    if (!running) {
        running = true;
        time = setInterval(() => {
            secs++;
            set_timer.innerHTML = formatTime(secs);
        }, 1000);
    }
});

stop_btn.addEventListener('click',()=>{
    if(running){
        running=false;
        clearInterval(time);
    }
})

reset_btn.addEventListener('click',()=>{
    running=false;
    secs=0;
    set_timer.innerHTML=formatTime(secs);
})



