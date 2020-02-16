'use strict';

let bigBox = document.getElementById('bigBox');
let n = 5;
let winNumber = Math.floor(Math.random()*n);
// console.log(winNumber);

for (let i = 0; i < n; i++){
    let boxElement = document.createElement('div');
    boxElement.classList.add('takaraBox');
    bigBox.appendChild(boxElement);

    boxElement.addEventListener('click',()=>{
        if (winNumber === i){
            boxElement.textContent = 'Win!';
        } else {
            boxElement.textContent = 'Lose';
        }
    }); 
};