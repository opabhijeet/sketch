function createGrid(side=16){
    const container = document.querySelector("#container");
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
    const container = document.querySelector("#container");
    container.textContent = "";
    let sides = +prompt("Enter number of boxes you want on each side.\n(must not be more than 100)");
    if(isNaN(sides) || sides>100) sides = getInput();
    createGrid(sides);
});