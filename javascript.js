let button = document.getElementById("workoutButton");

function checkIfClick() {
    button.onclick = function() {
        console.log("button has been clicked!");
    }
}

checkIfClick()