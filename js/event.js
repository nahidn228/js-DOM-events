// option 1: directly set on the HTML element
// <button onclick="document.body.style.backgroundColor='Yellow'">Make Yellow</button>

// option 2: add onclick function
// IMPORTANT: We will use this
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3: add onclick function
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option 3: another

const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option 4: addEventListener("click", makePink)
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option 4: another
const greenButton = document.getElementById("make-green");
greenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option: 4 Final
// IMportant: We will use this sometimes
// document.getElementById('make-goldenrod').addEventListener('click', function(){})

document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
