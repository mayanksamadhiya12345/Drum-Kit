
// Adding event listner of clicking for each letter

// addEventListener(type,listener)  {mention function means listner without brackets}

// using line by line
// document.querySelectorAll("button")[0].addEventListener("click",Click);
// document.querySelectorAll("button")[1].addEventListener("click",Click);
// document.querySelectorAll("button")[2].addEventListener("click",Click);   
// document.querySelectorAll("button")[3].addEventListener("click",Click);
// document.querySelectorAll("button")[4].addEventListener("click",Click);
// document.querySelectorAll("button")[5].addEventListener("click",Click);
// document.querySelectorAll("button")[6].addEventListener("click",Click);

// using looping concept

// for cliking by mouse
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",RespondToClick);
}

// listener
var SoundSourse = "sounds/";
function RespondToClick()
{
    // extracting the current button value (w/a/s/d/j/k/l)
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}



// for key pressed by keyBoard
document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(curr)
{
    // according to key value, seeting up the sound
    switch (curr) 
    {
        case "w":
            var audio = new Audio(SoundSourse+"crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio(SoundSourse+"kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio(SoundSourse+"snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio(SoundSourse+"tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio(SoundSourse+"tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio(SoundSourse+"tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio(SoundSourse+"tom-4.mp3");
            audio.play();
            break;
    
        default:
            break;
    }
}


// Animation
function buttonAnimation(key)
{
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    }, 100);
}