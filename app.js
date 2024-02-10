var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var start = document.getElementById("start");
var reset = document.getElementById("reset");

var disp = document.getElementById("disp");


var interval;

var total = 0;

totalValue = ()=>{
  total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value)
}

timer = ()=>{
  totalValue();
  total--;

  if(total >= 0){
    var hr = Math.floor(total/3600);
    var mt = Math.floor((total/60) - (hr*60));
    var sc = total - ((hr*3600) + (mt*60));

    hour.value = hr;
    minute.value = mt;
    second.value = sc;
  }else{
    disp.innerText = "Time Over";
  }
}

// startTimer=()=>{
// };

start.addEventListener('click', ()=>{
  clearInterval(interval);
  interval =setInterval(timer,1000);
 disp.innerText = "Timer Started";
})
reset.addEventListener('click',()=> {
  clearInterval(interval);

  hour.value = 0;
  minute.value = 0;
  second.value = 0;

  disp.innerText = "Timer";
})




