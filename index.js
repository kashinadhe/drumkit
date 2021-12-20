//Play the audios when the buttons are clicked
let numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(let i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var btnHTML=this.innerHTML;
        makeSound(btnHTML);
        buttonAnimation(btnHTML);
    });
}

//Play the audios when the keyboard keys are pressed
document.addEventListener("keypress",function(event){
    makeSound(event.key);//event.key returns the character of the key pressed
    /*example: if 'w' key is pressed 
    then event.key will return "w" 
    character string*/


    buttonAnimation(event.key);//Button animation function 
});

//Defining makeSound function
function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
    }
}
//Mouse Over functions
function onMouseOverW(){
    let w=document.getElementById('w');
    w.style.lineHeight="0";
}
function onMouseOverA(){
    let w=document.getElementById('a');
    w.style.lineHeight="0";
}
function onMouseOverS(){
    let w=document.getElementById('s');
    w.style.lineHeight="0";
}
function onMouseOverD(){
    let w=document.getElementById('d');
    w.style.lineHeight="0";
}
function onMouseOverJ(){
    let w=document.getElementById('j');
    w.style.lineHeight="0";
}
function onMouseOverK(){
    let w=document.getElementById('k');
    w.style.lineHeight="0";
}
function onMouseOverL(){
    let w=document.getElementById('l');
    w.style.lineHeight="0";
}
//Mouse Out
function onMouseOutW(){
    let w=document.getElementById('w');
    w.style.lineHeight="2";
}
function onMouseOutA(){
    let w=document.getElementById('a');
    w.style.lineHeight="2";
}
function onMouseOutS(){
    let w=document.getElementById('s');
    w.style.lineHeight="2";
}
function onMouseOutD(){
    let w=document.getElementById('d');
    w.style.lineHeight="2";
}
function onMouseOutJ(){
    let w=document.getElementById('j');
    w.style.lineHeight="2";
}
function onMouseOutK(){
    let w=document.getElementById('k');
    w.style.lineHeight="2";
}
function onMouseOutL(){
    let w=document.getElementById('l');
    w.style.lineHeight="2";
}
//Button Animation
function buttonAnimation(currentKey){
    let activeBtn=document.querySelector("."+currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);
}
