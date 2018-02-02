//variables 
const resetbutton = document.querySelector('#reset');
const gridSizeForm = document.querySelector('#grid-size');
const main = document.querySelector('main');


// eventListeners 

resetbutton.addEventListener('click', clearGrid);
gridSizeForm.addEventListener('submit', changeGrid);

//initialized or started 

changeGrid();

//Functions 

function toggleRed(e){
    const element = e.target;
    element.classList.toggle('red');
}


function clearGrid(e){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        box.classList.remove('red');
    });
}
function changeGrid(e){
    if(e){
 
e.preventDefault();
    }
const gridSizeValue = +gridSizeForm.querySelector('input:checked').value;
console.log(e);
const grid = makeGrid(gridSizeValue);
// set the main to the grid
main.innerHTML = ''; //this clears the main area 
grid.forEach((row) => {
    main.appendChild(row);
});



}
function makeGrid(size){
    const rows = [];
    for(let i = 0; i < size; i += 1){

    


//make the grid 
  //make a div with class of row 
    const row = document.createElement('div');
    row.classList.add('row');
    

    // make a grid with class md-12 inside of row
    const column = document.createElement('div');
      // made 6 divs with class of box inside of call md-12
      
    column.classList.add('col-md-12');
    row.appendChild(column);
         // copy and pasted x6 
        for(let i = 0; i < size; i += 1){
            const box = document.createElement('div'); 
            box.classList.add('box');
            column.appendChild(box);
            box.addEventListener('click', toggleRed);
        }
        rows.push(row);
    }
        
    return rows 
}
