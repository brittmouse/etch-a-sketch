const box = document.getElementById("box");
const sub = document.getElementById("submit");
let submitHeight = parseInt(document.getElementById("boxH").value);
let submitWidth = parseInt(document.getElementById("boxW").value);
sub.addEventListener("click", () => generateBox(submitHeight, submitWidth));

function generateBox(height, width) {
  box.innerHTML = "";
  for (let i = 0; i < height; i++) {
    const generateRow = document.createElement("div");
    generateRow.id = "row";
    generateRow.style.display = "flex";
    generateRow.style.flexDirection = "row";
    for (let j = 0; j < width; j++) {
      const generateDiv = document.createElement("div");
      generateDiv.className = "one";
      generateDiv.style.height = sizeToStr(calculateDivSize(height));
      generateDiv.style.width = sizeToStr(calculateDivSize(width));
      generateRow.appendChild(generateDiv);
    }
    box.appendChild(generateRow);
  }
  assignHover();
}

function calculateDivSize(num) {
  const boxSize = 800;
  const divSize = Math.floor((boxSize / num) - 2);
  return divSize;
}

function sizeToStr(num) {
  return num.toString() + "px";
}

function assignHover() {
  const divs = document.querySelectorAll(".one");
  for (let x = 0; x < divs.length; x++) {
    let divSelect = divs[x];
    divSelect.addEventListener("mouseover", () => handleMouseOver(divSelect));
    divSelect.addEventListener("mouseout", () => handleMouseOut(divSelect));
  }
}

function handleMouseOver(elem) {
  elem.style.backgroundColor = "red";
}

function handleMouseOut(elem) {
  elem.style.backgroundColor = "pink";
}

function greaterThan100(num) {
  return num > 100;
}
