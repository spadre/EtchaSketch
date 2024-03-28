function createStartingDivs(){
    
    const newBoardBtn = document.querySelector("#newBoard");
    
    newBoardBtn.addEventListener("click",() =>{
        createNewBoard();
    });

    createBoard(16,16);
    hoverMouse();

}

// function asks user to input x and y rows (max 100) and creates new board, also deletes old board

function createNewBoard(){
let xDivCount = prompt("Creating new board\n How many rows for x aligment (max 100)"), yDivCount = prompt("Creating new board\n How many rows for y aligment (max 100)");

document.querySelectorAll(".xDiv").forEach((divX) => {
    divX.remove();
});

createBoard(xDivCount,yDivCount);


}


// function creates new board based on xDiv and yDiv inputs
function createBoard(xDiv,yDiv){

    if(xDiv > 100){xDiv = 100}
    if (yDiv > 100){yDiv = 100} 

    const containerDiv = document.querySelector(".container");
    for(i=0;i < xDiv; i++){
        let xDiv = document.createElement("div");
        xDiv.setAttribute("class","xDiv");
        containerDiv.appendChild(xDiv);
        for(j=0;j<yDiv;j++){
            let yDiv = document.createElement("div");
            yDiv.setAttribute("class","yDiv");
            xDiv.appendChild(yDiv);
            
        }
    }
    hoverMouse();
}

// hovering mouse over divs changes div to red and leaving div leaves color blue
function hoverMouse(){
    const divs = document.querySelectorAll(".yDiv");
    divs.forEach((divY) => {
        divY.addEventListener("mouseover",() => {
            divY.setAttribute("style","background-color:red");
        });
        divY.addEventListener("mouseleave",() => {
            divY.setAttribute("style","background-color:blue");
        });
    });
}


createStartingDivs();