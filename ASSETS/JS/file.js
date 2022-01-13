



// inserire il nome del utente 

let title = document.getElementById('title');
let name = prompt('What is your name?', '');
let nome = name.toUpperCase();


title.innerHTML = nome + "'S" + ' ' + 'COUNTER';
if (name == '' || name == null || name == undefined) {
    title.innerHTML = 'THE COUNTER ';
}

// div the counter value

const divCounter = document.querySelector('.counter');
const counterValue = document.createElement('div');
counterValue.setAttribute('class', 'counter-value')
counterValue.textContent = '0';
divCounter.appendChild(counterValue);

const div = document.querySelector('div');


// button decrease

const btnDecrease = document.createElement('button');
btnDecrease.setAttribute('id', 'button-1')
btnDecrease.setAttribute('data-action', 'subtract')
btnDecrease.textContent = 'DECREASE';
div.appendChild(btnDecrease);

// button reset

const btnReset = document.createElement('button');
btnReset.setAttribute('data-action', 'reset')
btnReset.textContent = 'RESET';
div.appendChild(btnReset);


// button increase

const btnIncrease = document.createElement('button');
btnIncrease.setAttribute('id', 'button-2')
btnIncrease.setAttribute('data-action', 'add')
btnIncrease.textContent = 'INCREASE';
div.appendChild(btnIncrease);



// Button decrease -2

const btnDecrease2 = document.createElement('button');
btnDecrease2.setAttribute('id', 'button-3')
btnDecrease2.setAttribute('data-action', 'subtract-twice')
btnDecrease2.textContent = 'DECREASE-2';
div.appendChild(btnDecrease2);

// Button Increase +2

const btnIncrease2 = document.createElement('button');
btnIncrease2.setAttribute('id', 'button-4')
btnIncrease2.setAttribute('data-action', 'add-twice')
btnIncrease2.textContent = 'INCREASE-2';
div.appendChild(btnIncrease2);









// controlli per i bottoni del counter 
let counter = 0;
let actions = Array.from(document.querySelectorAll('[data-action]'));





actions.forEach(action => {
    action.addEventListener('click', () => {
        let type = action.dataset.action;

        switch (type) {
            case 'subtract':
                counter--;
                break;
            case 'reset':
                counter = 0;
                break;
            case 'add':
                counter++;
                break;
            case 'subtract-twice':
                counter -= 2;
                break;
            case 'add-twice':
                counter += 2;
                break;
        }

        document.querySelector('.counter-value').textContent = counter;

    })

})




