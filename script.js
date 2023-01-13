window.onload = function() {
    const workoutBtn = document.getElementById("workout-btn");
    workoutBtn.onclick = function() {
        workoutBtn.style.display = "none";
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "<strong class='text-4xl text-center text-white-500'>YES!</strong>";
        newDiv.classList.add("flex","items-center","h-screen", "bg-green-500");
        document.body.appendChild(newDiv);
        document.getElementById("example").classList.add("yes");
    };
  }
  
  




