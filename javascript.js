let button = document.getElementById("workoutButton");
let workoutList = document.getElementById("workoutList");

button.onclick = function() {
    console.log("button has been clicked!");
    workoutList.style.opacity = '1';
}