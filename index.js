const main = document.getElementById("main1");
const soundBox = document.getElementById("yas");
const arrM = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
const arrm = ["w", "e", "t", "y", "u", "o", "p"];

// console.log(document.querySelector(".board").getAttribute("class"));
let count = 0;
function themeChange() {
  count += 1;

  if (count % 2 == 0) {
    main.style.background =
      "linear-gradient(rgba(110, 84, 84, 0.4),rgba(233, 62, 62, 0.4)), url(images/background2.jpg)";
    main.style["background-size"] = "cover";
  } else {
    main.style.background =
      "linear-gradient(rgba(110, 84, 84, 0.4),rgba(140, 105, 234, 0.4)), url(images/background1.jpg)";
    main.style["background-size"] = "cover";
  }
}

document.addEventListener("click", (e) => {
  //   console.log(e.target.getAttribute("id"));
  song = `./sounds/${e.target.getAttribute("id")}.mp3`;
  soundBox.src = song;
});

document.addEventListener("keydown", (e) => {
  if (arrM.indexOf(e.key) != -1) {
    k = `Mkey${arrM.indexOf(e.key) + 1}`;
    song = `./sounds/${k}.mp3`;

    const key = document.getElementById(k);
    key.style["height"] = "99.4%";
    key.style["background"] = " rgb(0,0,0)";
    key.style["background"] =
      " linear-gradient(90deg, rgba(0,0,0,0.4547129193474265) 0%, rgba(255,255,240,1) 15%, rgba(255,255,253,1) 51%, rgba(252,255,255,1) 84%, rgba(0,0,0,1) 100%)";

    setTimeout(function () {
      const key = document.getElementById(k);
      key.style["height"] = "100%";
      key.style["background"] = " ivory";
    }, 80);
    // console.log(song);
  }

  if (arrm.indexOf(e.key) != -1) {
    k = `m_key${arrm.indexOf(e.key) + 1}`;
    song = `./sounds/${k}.mp3`;

    const key = document.getElementById(k);
    key.style["height"] = "102%";
    key.style["background"] = " rgb(161,160,160)";
    key.style["background"] =
      " linear-gradient(0deg, rgba(161,160,160,1) 3%, rgba(75,75,75,1) 29%, rgba(69,69,69,1) 43%, rgba(0,0,0,1) 100%)";

    setTimeout(function () {
      const key = document.getElementById(k);
      key.style["height"] = "100%";
      key.style["background"] = " black";
      key.style["background"] =
        " linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(119,119,119,1) 5%, rgba(45,45,45,1) 10%, rgba(0,0,0,1) 51%, rgba(57,57,57,1) 90%, rgba(105,103,103,1) 95%, rgba(0,0,0,1) 100%)";
    }, 80);
    // console.log(song);
  }
  soundBox.src = song;
});
