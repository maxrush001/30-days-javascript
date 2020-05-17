const HOURHAND = document.querySelector("#hour");
const MINHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function setPosition() {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hourPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
  let minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
  let secPosition = (sec * 360) / 60;

  HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
  MINHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}
setInterval(setPosition, 1000);
