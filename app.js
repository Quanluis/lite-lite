//variables 

const resetbutton = document.querySelector('#reset');
const boxes = document.querySelectorAll('.box');

// eventListeners 

boxes.forEach(function(box, index, boxes){
box.addEventListener('click', toggleRed);
});

resetbutton.addEventListener('click', clearGrid);


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