//variables 

const resetbutton = document.querySelector('#reset');
const boxes = document.querySelectorAll('.box');
const gridSizeForm = document.querySelector('#grid-size');
const main = document.querySelector('main');

// eventListeners 

boxes.forEach(function(box, index, boxes){
box.addEventListener('click', toggleRed);
});

resetbutton.addEventListener('click', clearGrid);
gridSizeForm.addEventListener('submit', changeGrid);


//Functions 

function toggleRed(e){
    const element = e.target;
    element.classList.toggle('red');
}

function clearGrid(e){
    boxes.forEach((box, index) => {
        box.classList.remove('red');
    });
}
function changeGrid(e){
e.preventDefault();
const gridSizeValue = +gridSizeForm.querySelector('input:checked').value;
console.log(e);
const grid = makeGrid(gridSizeValue);
// set the main to the grid
main.innerHTML = ''; //this clears the main area 
main.appendChild(grid);


}
function makeGrid(size){

const element = document.createElement('h1');
element.textContent = "grid!!"; 
return element; 
}
//make the grid 
  //make a div with class of row 
    // make a grid with class md-12 inside of row
      // made 6 divs with class of box inside of call md-12
         // copy and pasted x6 
           


