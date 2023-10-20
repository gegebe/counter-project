// Tu código aquí.
let lowerButton = document.querySelector(".prevBtn");
let addButton = document.querySelector(".nextBtn");
let number = document.querySelector("#counter");
let counter = 0;

function addCounter(){
  counter++;
  number.textContent = counter;
  updateColour();
}

function removeCounter(){
  counter--;
  number.textContent = counter;
  updateColour();
}

function updateColour(){
  if(number.textContent > 0){
    number.style.color = "green";
  }else if(number.textContent < 0){
    number.style.color = "red";
  }else{
    number.style.color = "black";
  }
}


lowerButton.addEventListener("click",removeCounter);
addButton.addEventListener("click", addCounter);