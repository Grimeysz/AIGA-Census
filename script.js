const hero = document.querySelector("[data-hero]");

$(document).ready(function () {
  console.log("jquery loaded");
  var windowHeight = $(window).height(),
    gridTop = windowHeight * 0.5,
    gridBottom = windowHeight * 0.7;

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
// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
