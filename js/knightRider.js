let boxes = document.querySelectorAll('.box'); 
let btnStart = document.getElementById('start-btn'); 
let btnStop = document.getElementById('stop-btn');  
const music = document.getElementById("audio-file");

let position = 0; 
let isForward = true; 
let intervalId;  

let colors = ["#ff0000", "#c42222", "#9e3939", "#ae6161", "#dea4a4", "salmon", "rosybrown"];  

function updateColors() {    
    boxes.forEach(box => box.style.backgroundColor = "white");

    if (isForward) {
        for (let i = 0; i < colors.length; i++) {
            let boxIndex = position - i;
            if (boxIndex >= 0 && boxIndex < boxes.length) { 
                boxes[boxIndex].style.backgroundColor = colors[i];
            }
        }
        position++;

        if (position > boxes.length + colors.length - 1) { 
            position = boxes.length - 1;
            isForward = false;
        }
    } else { 
        for (let i = 0; i < colors.length; i++) {
            let boxIndex = position + i;
            if (boxIndex >= 0 && boxIndex < boxes.length) {
                boxes[boxIndex].style.backgroundColor = colors[i];
            }
        }
        position--;

        if (position < -colors.length) { 
            isForward = true;
            position = 0;
        }
    }
}  

function start() { 
    // Play audio when the start button is clicked
    music.play();
    // Start the color change interval
    intervalId = setInterval(updateColors, 50); 
}  

function end() { 
    // Pause audio when the stop button is clicked
    music.pause();
    // Clear the interval to stop color changing
    clearInterval(intervalId); 
    intervalId = null;
}  

btnStart.addEventListener('click', start); 
btnStop.addEventListener('click', end);
