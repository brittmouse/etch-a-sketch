let userHeight = 16;
let userWidth = 16;
const box = document.getElementById("box");
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
      // generateDiv.innerText = "X";
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

generateBox(userHeight, userWidth);
