'use strict';

// const player0Name = window.prompt('Player 1: What do you want your name to be?');
// const player1Name = window.prompt('Player 2: What do you want your name to be?');

// Selecting elements 
const name0El = document.querySelector('#name--0');
const name1El = document.querySelector('#name--1');
const nameWindow = document.querySelector('.name-window')
const closeNameWindow = document.querySelector('.close-modal1');
const btnSubmit = document.querySelector('.btn--submit')
const name0Input = document.querySelector('.input--0');
const name1Input = document.querySelector('.input--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//Pre-Game

let playing;
let currentScore;
let activePlayer;
let scores;

//Declaring Functions For Modals

const showTheModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const hideTheModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const inputClick = function () {
    if (name0Input) {
        name0El.textContent = name0Input.value;
    } else if (!name0Input) {
        name0El.textContent = "Player 1";
    };

    if (name1Input) {
        name1El.textContent = name1Input.value;
    } else if (!name1Input) {
        name1El.textContent = "Player 2"
    }
}

const nameWindowHide = function() {
    nameWindow.classList.add('hidden');
}

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer == 0 ? 1 : 0
    currentScore = 0;
    
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

const init = function () {
    current0.textContent = 0;
    current1.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');

    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');

    playing = true;
    currentScore = 0;
    activePlayer = 0;
    scores =  [0, 0];
}

init();

//Dice Functionality
btnRoll.addEventListener('click', function() {
    if (playing) {
        //1. Generate random number between 1, 6 (Random Dice Roll)
        let dice = Math.trunc(Math.random() * 6) + 1;
        dice == 0 ? dice + 1 : dice + 0;
        console.log(dice);

        //2. Display Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //3. Check for rolled 1, if true switch players
        if (dice !== 1) {
            //Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else /*Dice is equal to one*/ {
            //Switch dice to next player
            switchPlayer();
        }
    }
});

//Modal Functionality
document.querySelector('.btn--instructions').addEventListener('click', function() {
    showTheModal();
})

overlay.addEventListener('click', function() {
    hideTheModal();
    nameWindowHide();
})

closeModal.addEventListener('click', function() {
    hideTheModal();
})

//Name Functionality
closeNameWindow.addEventListener('click', function() {
    hideTheModal();
    nameWindowHide();
    inputClick();
});

closeNameWindow.addEventListener('click', function() {
    hideTheModal();
    nameWindowHide();
    inputClick();
});

btnSubmit.addEventListener('click', function() {
    hideTheModal();
    inputClick();
    nameWindowHide();
    console.log(`First name: ${name0Input.value} \nSecond Name: ${name1Input.value}`);
});

btnHold.addEventListener('click', function () {
    if (playing) {
        //Add current score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //Check if score >= 100
        //if so finish game
        //else switch players
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', init);

//Different Player Settings TODO
