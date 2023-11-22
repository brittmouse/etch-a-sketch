const box = document.getElementById("box");
const sub = document.getElementById("submit");
sub.addEventListener("click", () =>
  generateBox(document.getElementById("boxH").value));

function generateBox(dimension) {
  box.innerHTML = "";
  for (let i = 0; i < dimension; i++) {
    const newRow = document.createElement("div");
    newRow.id = "row";
    newRow.style.display = "flex";
    newRow.style.flexDirection = "row";
    for (let j = 0; j < dimension; j++) {
      const newDiv = document.createElement("div");
      newDiv.className = "one";
      newDiv.style.height = sizeToStr(calculateDivSize(dimension));
      newDiv.style.width = sizeToStr(calculateDivSize(dimension));
      newDiv.addEventListener("mouseover", () => handleMouseOver(newDiv));
      newDiv.addEventListener("mouseout", () => handleMouseOut(newDiv));
      newRow.appendChild(newDiv);
    }
    box.appendChild(newRow);
  }
}

function calculateDivSize(num) {
  const boxSize = 800; // 800 is the length of each side of the box div
  const divSize = Math.floor((boxSize / num) - 2);
  return divSize;
}

function sizeToStr(num) {
  return num.toString() + "px";
}

function handleMouseOver(elem) {
  elem.style.backgroundColor = "red";
}

function handleMouseOut(elem) {
  elem.style.backgroundColor = "pink";
}
