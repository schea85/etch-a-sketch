// create Grid
function createGrid(size){
    let screen = document.querySelector(".sketch-container");
    for (let i = 0; i < size; i++){
        let column = document.createElement("div");
        column.classList.add("column");
        column.style.color = "1px solid black"

        for (let j = 1; j <= size; j++){
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "1px solid black";
            
            column.appendChild(row);
        }
        screen.appendChild(column);
    }
};

createGrid(16);

//hover over pixels
function etchASketch(){
  
    let gridPixel = document.querySelectorAll(".sketch-container div");
    gridPixel.forEach(pixel => {
        pixel.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "darkgray";
        });
    });  
};

etchASketch();

// select grid size button
let gridSizeBtn = document.querySelector(".grid-size");

gridSizeBtn.addEventListener("click", () => {
    let input = prompt("Enter valid number (max = 100): ");
    let size = parseInt(input);
    let screen = document.querySelector(".sketch-container");
    screen.innerHTML = "";
    createGrid(size);
    etchASketch();
});