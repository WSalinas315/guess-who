$(document).ready(onReady);

let index;

console.log('Here are all the available people:', people);

// onReady function
function onReady(){
    //console.log('in onReady');
    loadPics();
    startGame();
    $('.git-pic').on('click', guessCheck);
}


//load picture function
function loadPics(){
    //console.log('in loadPics function');
    for(let person of people){
        $('#img-container').append(`
            <div id="${person.name}">
                <img class="git-pic" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
            </div>
        `);
    }
}

// function to randomly select a person
function randomNumber(min, max){
    //console.log('in randomNumber function');
    return Math.floor(Math.random() * (1 + max - min) + min);
}

// function to post a random person's name to the DOM
function startGame(){
    //console.log('In startGame function');
    index = randomNumber(0,(people.length-1));
    $('#name-prompt').append(`
        <h2>Click on: ${people[index].name}</h2>    
    `);
}

// Function to verify if a click is on the correct image
function guessCheck(){
    //console.log('In guessCheck function');
    if(this.parentElement.id == people[index].name){
        console.log('CORRECT! Try guessing another one.');
        $('#name-prompt').empty();
        startGame();
        return;
    } else{
        console.log(`Sorry, that's not the right person. Try finding ${people[index].name} again.`);
    }
}