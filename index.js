/*var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
    });
}*/

var noOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerHTML;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });

}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "h":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
           break;
           case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
           break;
           case "v":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
           break;
           case "e":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
           break;
           case "f":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
           break;
           case "u":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
           break;
           case "n":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
           break;
        default:
    }

}

function buttonAnimation(currentKey){
    var activeBtn=document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);
}


