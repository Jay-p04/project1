let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btns = ["yellow", "red", "purpel", "green"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}
function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randomindx = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomindx];
    let rndmbtn = document.querySelector(`.${randomcolor}`);
    //  console.log(randomindx);
    console.log(randomcolor);
    //  console.log(rndmbtn);
    gameseq.push(randomcolor);
    gameFlash(rndmbtn);
}
function checkans(idx) {
    if (userseq[idx] == gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp(), 1000);
        }
    } else {
        h2.innerHTML = `game over ! your score was <b>${level}</b> <br> press any key to start `;
        document.querySelector("body").style.backgroundcolor = "red";
        setTimeout(function () {
            document.querySelector(".body").style.backgroundcolorcolor = "white";
        }, 150);

        reset();

    }
}
function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
function btnpress() {
    let btn = this;
    console.log(btn.id);
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}