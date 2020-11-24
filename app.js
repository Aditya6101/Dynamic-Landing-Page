const time = document.querySelector(".time"),
  greet = document.querySelector(".greeting"),
  name = document.querySelector(".name"),
  focus = document.querySelector(".focus");
showAmPM = true;

function displayTime() {
  let currentTime = new Date(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();

  const amPm = hour <= 12 ? "AM" : "PM";
  hour = hour % 12 || 12;
  time.innerHTML = `${hour}<span>:</span>${zero(minute)}<span>:</span>${zero(
    second
  )} ${showAmPM ? amPm : ""}`;
  setTimeout(displayTime, 1000);
}

function zero(number) {
  return (parseInt(number, 10) < 10 ? "0" : "") + number;
}

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('Images/morning.jpg')";
    greet.textContent = "Good Morning, ";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('IMages/afternoon.jpg')";
    greet.textContent = "Good Afternoon, ";
  } else {
    // Evening
    document.body.style.backgroundImage = "url('Images/night.jpg')";
    greet.textContent = "Good Evening, ";
    document.body.style.color = "white";
  }
}
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

displayTime();
setBgGreet();
getName();
getFocus();
