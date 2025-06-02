//const mybody=document.body;
//mybody.style.backgroundColor="lightblue";
//console.log(mybody);

//const boxes = document.getElementByIdClassName("box");
//console.log(boxes);
//const box1=document.getElementById("box-1");
//box1.innerHTML="Hello World!";
//box1.innerHTML="<h1>hello psit</h1>";

//const boxes = document.getElementsByClassName("box");
//for (let i=0; i<boxes.length; i++){
    //boxes[i].classList.add("box-style");
   // boxes[i].classList.add("round-border");
//}

 box1.classList.remove("box");

///----creating and appending elenents----
const newPara=document.createElement("p");
newPara.innerHTML="This is a new paragraph";
const container=document.getElementById("container");
container.appendChild(newPara);