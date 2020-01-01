var buttonLength = document.querySelectorAll(".drum").length;

//assign all drum class an eventlistener and play audio
for (var i = 0; i < buttonLength; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function handleClick() {
      var button = this.innerHTML;

      makeDrumSound(button);
      animateButton(button);
    });
}

//listen for keypress
document.addEventListener("keypress", function(e) {
  makeDrumSound(e.key);
  animateButton(e.key);
});

//function that plays audio
function makeDrumSound(key) {
  var audio;

  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

//animate button

function animateButton(key) {
  var activeButton = document.querySelector(`.${key}`);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 200);
}
