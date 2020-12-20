    var noofDrumButtons = document.querySelectorAll(".drum").length;

    for (var i = 0; i < noofDrumButtons; i++) {

        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
           button1 = this.innerHTML;
           makeSound(button1);
            // var audio = new Audio("sounds/tom-1.mp3");
            // audio.play();
            buttonAnimation(button1);
            
        });
        
    }
    document.addEventListener("keydown",function(Event){
        makeSound(Event.key);
        buttonAnimation(Event.key);
    })  

    function makeSound (key){
        switch (key) {
            case "l":
                var audio = new Audio("sounds/crash.mp3");
            audio.play();
                break;
            case "k":
                var audio1 = new Audio("sounds/kick-bass.mp3");
                audio1.play();
                break;
            case "j":
                var audio2 = new Audio("sounds/snare.mp3");
                audio2.play();
                break;
            case "d":
                var audio3 = new Audio("sounds/tom-1.mp3");
                audio3.play();
                break;
            case "s":
                var audio4 = new Audio("sounds/tom-2.mp3");
                audio4.play();
                break;
            case "a":
                var audio5 = new Audio("sounds/tom-3.mp3");
                audio5.play();
                break;
            case "w":
                var audio6 = new Audio("sounds/tom-4.mp3");
                audio6.play();
                break;
            default:
                console.log("Its The wrong Button");
                var audio7 = new Audio("sounds/tom-4.mp3");
                audio7.play();
                break;
        } 
    }

    function buttonAnimation (KeyRecieve){
        var activeButton = document.querySelector("."+KeyRecieve)
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },139);
    }