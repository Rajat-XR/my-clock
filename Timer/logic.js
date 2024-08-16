const haddbtn = document.querySelector("#hincrease");
const hsubbtn = document.querySelector("#hdecrease");
const maddbtn = document.querySelector("#mincrease");
const msubbtn = document.querySelector("#mdecrease");
const saddbtn = document.querySelector("#sincrease");
const ssubbtn = document.querySelector("#sdecrease");
const startbtn = document.querySelector("#startbtn");
const resetbtn = document.querySelector("#resetbtn");
let msg = document.querySelector("#msg");
let h = document.querySelector("#hours");
let m = document.querySelector("#minutes");
let s = document.querySelector("#seconds");
let hrr = 0;
let min = 0;
let sec = 0;
const timeup = new Audio("Timer/timer.mp3");
let auto;

document.addEventListener("DOMContentLoaded", () => {
  h.innerHTML = hrr;
  m.innerHTML = min;
  s.innerHTML = sec;

  haddbtn.onclick = () => {
    hrr++;
    h.innerHTML = hrr;
  };
  maddbtn.onclick = () => {
    min++;
    m.innerHTML = min;
  };
  saddbtn.onclick = () => {
    sec++;
    s.innerHTML = sec;
  };

  hsubbtn.onclick = () => {
    if (hrr > 0) {
      hrr--;
      h.innerHTML = hrr;
    }
  };
  msubbtn.onclick = () => {
    if (min > 0) {
      min--;
      m.innerHTML = min;
    }
  };
  ssubbtn.onclick = () => {
    if (sec > 0) {
      sec--;
      s.innerHTML = sec;
    }
  };

  startbtn.onclick = () => {
    function timer() {
      if (hrr == 0 && min == 0 && sec == 0) {
        msg.innerHTML = "Time Up!!";
        timeup.play();
      } else {
        if (sec == 0 && hrr == 0) {
          min--;
          sec = 59;
          m.innerHTML = min;
          s.innerHTML = sec;
        }
        if (hrr != 0 && min != 0 && sec == 0) {
          min--;
          sec = 59;
          m.innerHTML = min;
          s.innerHTML = sec;
        }

        if (min == 0 && hrr != 0) {
          hrr--;
          min = 59;
          sec = 59;
          h.innerHTML = hrr;
          m.innerHTML = min;
          s.innerHTML = sec;
        } else {
          sec--;
          s.innerHTML = sec;
        }
      }
    }
    auto = setInterval(timer, 1000);
  };
  resetbtn.onclick = () => {
    msg.innerHTML = "";
    hrr = 0;
    min = 0;
    sec = 0;
    h.innerHTML = hrr;
    m.innerHTML = min;
    s.innerHTML = sec;
    timeup.pause();
    clearInterval(auto);
  };
});
