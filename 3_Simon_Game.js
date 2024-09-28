let gameseq = [];
let userseq = [];
let level = 0;
let start = false;
let colors = ["yellow", "green", "purple", "sky"];

let h3 = document.querySelector("h3");
document.addEventListener("keypress", function () {
  if (start == false) {
    console.log("game has started");
    start = true;
    levelUp();
  }
});

function btnflash(box) {
  box.classList.add("flash");
  setTimeout(function () {
    box.classList.remove("flash");
  }, 400);
}

function userflash(box) {
  box.classList.add("userflash");
  setTimeout(function () {
    box.classList.remove("userflash");
  }, 400);
}

function levelUp() {
  userseq = [];
  level++;
  h3.innerText = `level ${level}`;

  randint = Math.floor(Math.random() * 4);
  // console.log(randint)
  randomClr = colors[randint];
  gameseq.push(randomClr);
  // console.log(randomClr)
  randbox = document.querySelector(`.${randomClr}`);
  btnflash(randbox);
  console.log(gameseq);
}

function btnpress() {
  let btn = this;
  userflash(btn);
  // console.log("button was pressed")
  let userclr = btn.getAttribute("id");
  // console.log(userclr)
  userseq.push(userclr);
  checkSeq(userseq.length - 1);
  console.log(userseq);
}

function checkSeq(idx) {
  // let idx = level
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (level == 0){
    h3.innerText = `Game Over! . And your score is ${
      level
    }. Press any key to start the game again.`;
    }
    else{
       h3.innerText = `Game Over! . And your score is ${
      level - 1
    }. Press any key to start the game again.`;
    }
    let bodyclr = document.querySelector("body");
    bodyclr.style.backgroundColor = "red";
    setTimeout(function () {
      bodyclr.style.backgroundColor = "white";
    }, 500);
    reset();
  }
}

let boxes = document.querySelectorAll(".box");
for (box of boxes) {
  box.addEventListener("click", btnpress);
}
function reset() {
  start = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
