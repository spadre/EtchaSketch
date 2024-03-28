function createStartingDivs(){
    
    const newBoardBtn = document.querySelector("#newBoard");
    const colorBtn = document.querySelector("#colorBtn");
    
    newBoardBtn.addEventListener("click",() =>{
        createNewBoard();
    });
    colorBtn.addEventListener("click",() =>{
        changeColor();
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
    document.querySelector("#colorBtn").textContent = "Blue color";
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

// mouseleave was blue now random color
function hoverMouseRandomColor(){
    
    const divs = document.querySelectorAll(".yDiv");
    divs.forEach((divY) => {
        divY.addEventListener("mouseover",() => {
            divY.setAttribute("style","background-color:Red");
        });
        divY.addEventListener("mouseleave",() => {
            let randomNumber1 = Math.floor(Math.random()*255),randomNumber2 = Math.floor(Math.random()*255),randomNumber3 = Math.floor(Math.random()*255);
            divY.setAttribute("style","background-color:rgb("+randomNumber1+","+randomNumber2+","+randomNumber3+")");
           
        });
    });
}

// Chance blue hover color to random with button
function changeColor(){
    let colorBtn = document.querySelector("#colorBtn");

    switch(colorBtn.textContent){
        case "Blue color": 
            hoverMouseRandomColor();
            colorBtn.textContent = "Random color";
            break;
        case "Random color":
            hoverMouse();
            colorBtn.textContent = "Blue color";
            break;
    }
}


createStartingDivs();