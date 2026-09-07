const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const incrementBtn = document.getElementById("incrementBtn");
const countNum = document.getElementById("countNum");

let count = 0;
incrementBtn.onclick = function(){
    count++;
    countNum.textContent = count;
}

decrementBtn.onclick = function(){
    count--;
    countNum.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countNum.textContent = count;
}