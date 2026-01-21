// create Grid
function createGrid(size) {
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

//hover over pixels Desktop
function etchASketch(colorFunc) {
    let gridPixel = document.querySelectorAll(".sketch-container div");
    gridPixel.forEach(pixel => {
        pixel.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = colorFunc ? colorFunc() : "darkgray";    
        });
    });  
};

etchASketch();

// grid size button
let gridSizeBtn = document.querySelector(".grid-size");

gridSizeBtn.addEventListener("click", () => {
    let size;
    do {
        let input = prompt("Enter grid size (1-100)");
        size = parseInt(input);
    } while (isNaN(size) || size < 1 || size > 100);
    
    let screen = document.querySelector(".sketch-container");
    screen.innerHTML = "";
    
    createGrid(size);
    etchASketch();
});

// reset button
function resetButton() {
    let screen = document.querySelector(".sketch-container");
    screen.innerHTML = "";
    createGrid(16);
    etchASketch();
}
let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", resetButton);

// random RGB button
let randomBtn = document.querySelector(".random");
randomBtn.addEventListener("click", ()=> {
    etchASketch(getRandomColors);
});
function getRandomColors() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}



