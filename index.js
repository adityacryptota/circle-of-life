// Show the number of circles on the screen that represent av. life span.

const mainContainer = document.querySelector('.container-top-right'); 

// Draw 79 circles.

let avLifeSpan = 34 * 365;

while(avLifeSpan > 0){
    mainContainer.insertAdjacentHTML('beforeend', `<div class='circle'></div>`);
    avLifeSpan--;
}

let date = new Date();

let yearsPassed = (date.getFullYear() - Number(prompt('Enter the year in which you were born.'))) * 365;


let allCircles = document.querySelectorAll('.circle');

while(yearsPassed >= 0){
    allCircles[yearsPassed].classList.add('circle-filled');
    yearsPassed--;
}




// Ask the user their birth year and count the number of years that are left according to av. life span. 