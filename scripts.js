const container = document.querySelector("#container");

function createGrid(side=16){
    for(let i=1;i<=side;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let i=1;i<=side;i++){
            const box = document.createElement("div");
            box.setAttribute("id","box");
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}
createGrid();

function getInput(){
    let sides = +prompt("Invalid choice!!!\n Enter number of boxes you want on each side.\n(must not be more than 100)");
    if(isNaN(sides) || sides>100) return getInput();
    return sides;
}

const reset = document.querySelector("#create");
reset.addEventListener("click",()=>{
    container.textContent = "";
    let sides = +prompt("Enter number of boxes you want on each side.\n(must not be more than 100)");
    if(isNaN(sides) || sides>100) sides = getInput();
    createGrid(sides);
    if(sides === 0) container.style.border = "1px solid black";
});
function getColor(){
    const hexValues = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let color="#";
    for(let i=1;i<=6;i++){
        color = color + hexValues[Math.floor(Math.random()*16)];
    }
    console.log(color);
    return color;
}
function color(e){
    if(e.target === container) return;
    e.target.style.backgroundColor = getColor();
}
container.addEventListener("mousedown", (e)=>{
    if(e.button === 0) container.addEventListener("mouseover", color);
});
container.addEventListener("mouseup", (e)=>{
    if(e.button === 0) container.removeEventListener("mouseover", color);
});
container.addEventListener("click", e => e.target.style.backgroundColor = "white");