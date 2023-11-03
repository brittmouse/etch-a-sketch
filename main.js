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
      generateDiv.id = "one";
      generateDiv.innerText = "X";
      generateRow.appendChild(generateDiv);
    }
    box.appendChild(generateRow);
  }
}

function main() {
  return "Hi mom";
}

console.log(main());
