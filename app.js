document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("workout-button").addEventListener("click", function(){
        window.location.href = "yes.html";
    });
});

// create an array of responses
const responses = ['Yes', 'Mmmhmmm', 'You know it'];

// select a button
const button = document.querySelector('button');

// add a click event listener to the button
button.addEventListener('click', function() {
  // generate a random index between 0 and the number of responses
  const randomIndex = Math.floor(Math.random() * responses.length);

  // display the random response to the user
  alert(responses[randomIndex]);
});

