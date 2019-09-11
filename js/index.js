// Your code goes here

// ****** BODY CONTAINER BACKGORUND COLOR #1 ****** //

const link = document.querySelector(".nav a");
link.addEventListener("click", event => {
  console.log("link was clicked!");
  event.preventDefault();
  event.stopPropagation();
});

// ****** BODY CONTAINER BACKGORUND COLOR #1 ****** //

const body = document.querySelector("body");
body.addEventListener("click", event => {
  console.log("body was clicked");
  console.log(event.target);
  body.style.background = "grey";
  event.stopPropagation();
});

// ****** HEADER CONTENT RESIZE #2 ****** //

window.addEventListener("resize", event => {
  const changeTitle = document.querySelector(".intro h2");
  changeTitle.textContent = "THE FUN BUS IS READY TO TAKE OFF!!!";
});

// ****** HEADER PARAGRAPH WHEEL #3 ****** //
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector(".intro p");
el.onwheel = zoom;

// ****** MAIN CONTENT IMG SCALE #4 ****** //
const allMidImg = document.querySelectorAll(".img-content");

function scaleImageUp(event) {
  console.log(event.target);
  event.target.style.transform = "scale(1.0)";
  event.target.style.transition = "transform 0.5s";
}

allMidImg.forEach(image => {
  image.addEventListener("mouseover", scaleImageUp);
});

allMidImg.forEach(image => {
  image.addEventListener("mouseover", event => {
    image.style.transform = "scale(1.3)";
    image.style.transition = "transform 0.5s";
  });
  image.addEventListener("mouseout", event => {
    image.style.transform = "scale(1.0)";
    image.style.transition = "transform 0.5";
  });
  image.addEventListener("click", event => {
    image.src =
      // "https://images.unsplash.com/photo-1499789853431-fcbf274f57b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ";
      "https://images.unsplash.com/photo-1568064591312-7465588e740e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1835&q=80";
    image.alt = "dogs they rool";
  });
});

// ****** MAIN CONTENT PARAGRAPH DBL CLICK #5 ****** //

const allMidPar = document.querySelectorAll(".text-content");
allMidPar.forEach(para => {
  console.log("p was clicked");
  para.addEventListener("dblclick", event => {
    event.target.style.transform = "scale(1.3)";
    event.target.style.transiton = "transform 0.5";
  });
  para.addEventListener("click", event => {
    event.target.style.transform = "scale(1.0)";
    event.target.style.transiton = "transform 0.5";
  });
});

// ****** CONTENT-PICK NO CONTXT MENU #6 ****** //

const noContext = document.querySelectorAll(".destination p");
noContext.forEach(paragraph => {
  // console.log("right clicked!");
  paragraph.addEventListener("contextmenu", event => {
    event.preventDefault();
  });
});

// ****** CONTENT-PICK PASTE #7 ****** //

const target = document.querySelector(".destination p");

target.addEventListener("paste", event => {
  let paste = (event.clipboardData || window.clipboardData).getData("text");
  paste = paste.toUpperCase();

  const selection = window.getSelection();
  if (!selection.rangeCount) return false;
  selection.deleteFromDocument();
  selection.getRangeAt(0).insertNode(document.createTextNode(paste));

  event.preventDefault();
});

// ****** CONTENT-PICK NO CONTXT MENU #8 ****** //

const buttClick = document.querySelectorAll(".destination h4");
buttClick.forEach(button => {
  button.addEventListener("click", event => {
    event.target.style.background = "pink";
    event.target.style.color = "blue";
    event.target.style.transition = "background 0.5s";
    event.target.style.transition = "color 0.5s";
    event.stopPropagation();
  });
});

// ****** FOOTER SELECTION #9 ****** //

function logSelection(event) {
  console.log("It worked");
  console.log(event.target);
  const log = document.querySelector("footer");
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  log.textContent = `You selected: ${selection}`;
}

// ****** FOOTER CUT # 10 ****** //

const input = document.querySelector(".footer p");
input.addEventListener("select", logSelection);

const source = document.querySelector("footer");

source.addEventListener("cut", event => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  selection.deleteFromDocument();
  event.preventDefault();
});
