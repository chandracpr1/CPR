var audio=[];
audio[0]=new Audio("sounds/crash.mp3");
audio[1]=new Audio("sounds/kick-bass.mp3");
audio[2]=new Audio("sounds/snare.mp3");
audio[3]=new Audio("sounds/tom-1.mp3");
audio[4]=new Audio("sounds/tom-2.mp3");
audio[5]=new Audio("sounds/tom-3.mp3");
audio[6]=new Audio("sounds/tom-4.mp3");
for(i=0;i<document.querySelectorAll("button").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function () { 
        makeSound(this.innerHTML);
        animation(this.innerHTML);
        });
}        
document.addEventListener("keydown",function(event) {
makeSound(event.key);
animation(event.key);
});
function makeSound(key) {
    switch (key) {
        case 'w':
            audio[0].play();
            break;
        case 'a':
            audio[1].play();
            break;
        case 's':
            audio[2].play();
            break;
        case 'd':
            audio[3].play();
            break;
        case 'j':
            audio[4].play();
            break;
        case 'k':
            audio[5].play();
            break;
        case 'l':
            audio[6].play();
            break;


    }
}
function animation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    } , 150);
}



