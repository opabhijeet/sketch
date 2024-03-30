let side = 16;

function createGrid(){

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