function createStartingDivs(){
    const containerDiv = document.querySelector(".container");
    
    for(i=0;i < 16; i++){
        let xDiv = document.createElement("div");
        xDiv.setAttribute("class","xDiv");
        containerDiv.appendChild(xDiv);
        for(j=0;j<16;j++){
            let yDiv = document.createElement("div");
            yDiv.setAttribute("class","yDiv");
            xDiv.appendChild(yDiv);
            //let yDiv = document.querySelector(".yDiv");
            
        }
    }
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

function createNewBoard(){}


createStartingDivs();