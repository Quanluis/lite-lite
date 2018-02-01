//variables 

const resetbutton = document.querySelector('#reset');
const box = document.querySelector('.box');

// eventListeners 



//Functions 

box.addEventListener('click', toggleRed);

function toggleRed(e){
    const element = e.target;
    element.classList.toggle('red');
}

resetbutton.addEventListener('click', clearGrid);

function clearGrid(e){

    console.log('clearing the grid');

}