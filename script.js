const hero = document.querySelector("[data-hero]");

$(document).ready(function () {
  console.log("jquery loaded");
  var windowHeight = $(window).height(),
    gridTop = windowHeight * 0.4,
    gridBottom = windowHeight * 0.5;

  $("#quotes").scroll(function () {
    console.log("scrolling");

    var thisTop = $("#q1").offset().top - $(window).scrollTop();
    if (thisTop <= gridTop && thisTop + $(this).height() >= gridBottom) {
      $("#q1").css("background-color", "red");
    } else {
      $("#q1").css("background-color", "pink");
    }

    var thisTop2 = $("#q2").offset().top - $(window).scrollTop();
    if (thisTop2 <= gridTop && thisTop2 + $(this).height() >= gridBottom) {
      $("#q2").css("background-color", "red");
    } else {
      $("#q2").css("background-color", "pink");
    }
    var thisTop3 = $("#q3").offset().top - $(window).scrollTop();
    if (thisTop3 <= gridTop && thisTop3 + $(this).height() >= gridBottom) {
      $("#q3").css("background-color", "red");
    } else {
      $("#q3").css("background-color", "pink");
    }
    var thisTop4 = $("#q4").offset().top - $(window).scrollTop();
    if (thisTop4 <= gridTop && thisTop4 + $(this).height() >= gridBottom) {
      $("#q4").css("background-color", "red");
    } else {
      $("#q4").css("background-color", "pink");
    }
    var thisTop5 = $("#q5").offset().top - $(window).scrollTop();
    if (thisTop5 <= gridTop && thisTop5 + $(this).height() >= gridBottom) {
      $("#q5").css("background-color", "red");
    } else {
      $("#q5").css("background-color", "pink");
    }
  });
});

// mask code
console.log("hello world");
window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const x = Math.round((clientX / window.innerWidth) * 100);
  const y = Math.round((clientY / window.innerHeight) * 100);

  hero.style.setProperty("--x", `${x}%`); //follows position of
  hero.style.setProperty("--y", `${y}%`);
});

//make divs draggable
var dragItem = document.querySelector("#draggable");
var container = document.querySelector("body");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target === dragItem) {
    active = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  active = false;
}

function drag(e) {
  if (active) {
    e.preventDefault();

    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
