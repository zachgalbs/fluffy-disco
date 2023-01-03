const startButton = document.getElementById("startButton");
const workoutButton = document.getElementById("workoutButton");
const workoutList = document.getElementById("workoutList");

const workoutInputs = [document.getElementById("workoutinput1"), document.getElementById("workoutinput2"), document.getElementById("workoutinput3"), document.getElementById("workoutinput4"), document.getElementById("workoutinput5"), document.getElementById("workoutinput6")];
const setsInputs = [document.getElementById("setsinput1"), document.getElementById("setsinput2"), document.getElementById("setsinput3"), document.getElementById("setsinput4"), document.getElementById("setsinput5"), document.getElementById("setsinput6")];
const repsInputs = [document.getElementById("repsinput1"), document.getElementById("repsinput2"), document.getElementById("repsinput3"), document.getElementById("repsinput4"), document.getElementById("repsinput5"), document.getElementById("repsinput6")];
const weightInputs = [document.getElementById("weightinput1"), document.getElementById("weightinput2"), document.getElementById("weightinput3"), document.getElementById("weightinput4"), document.getElementById("weightinput5"), document.getElementById("weightinput6")];


startButton.disabled = true;

workoutButton.onclick = function() {
    console.log("workoutButton has been clicked!");
    workoutList.style.opacity = '1';
    workoutList.style.marginTop = '5px';
    startButton.style.opacity = '1';
    workoutButton.remove()

}

startButton.onclick = function() {
    console.log("start button clicked");
    // set the opacity of the whole screen to 0
    hideEverything();
    // set all of the input placeholders to their current values with a timeout
    setTimeout(startWorkout, 2000);
    setTimeout(showEverything, 2000);
}

workoutInputs[0].onchange = function() {
    if (workoutInputs[0].value != null) {
        startButton.style.opacity = '1';
        startButton.disabled = false;
    }
}

function startWorkout() {
    for (i=0; i<=workoutInputs.length; i++) {
        if (setsInputs[i] !== undefined) {
            setsInputs[i].placeholder = setsInputs[i].value;
            setsInputs[i].value = "";
        }
        else{}
        if (repsInputs[i] !== undefined) {
            repsInputs[i].placeholder = repsInputs[i].value;
            repsInputs[i].value = "";
        }
        else{}
        if (weightInputs[i] !== undefined) {
            weightInputs[i].placeholder = weightInputs[i].value;
            weightInputs[i].value = "";
        }
        else{}
    }
}
function hideEverything() {
    document.body.style.background = 'white';
    startButton.style.opacity = '0';
    workoutButton.opacity = '0';
    workoutList.style.opacity = '0';
}
function showEverything() {
    document.body.style.background = 'rgb(150, 150, 150)';
    startButton.style.opacity = '1';
    workoutButton.opacity = '1';
    workoutList.style.opacity = '1';
}
function alert() {
    console.log("timeout");
}