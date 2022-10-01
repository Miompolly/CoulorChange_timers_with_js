
//call id
let MovementBox=document.getElementById("more");
function showMovementBox(){
    MovementBox.className="open";
}
setTimeout(showMovementBox,2000);

let colourChanger=document.getElementById("more");
let coulors=["red","yellow","indigo","green"];
let counter=0;

function changeCoulor(){
if(counter>=coulors.length){
    counter=0;
}

    colourChanger.style.backgroundColor=coulors[counter];
    counter++;
}


let timer=setInterval(changeCoulor,3000);

let stop=document.getElementById("stop");
colourChanger.onclick=function(){
    clearInterval(timer,3000);
    stop.innerHTML="Color Changed";
}

