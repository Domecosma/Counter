



// inserire il nome del utente 

let title = document.getElementById('title');
let name = prompt('What is your name?', '');
let nome = name.toUpperCase();


title.innerHTML = nome + "'S" + ' ' + 'COUNTER';
if (name == '' || name == null || name == undefined) {
    title.innerHTML = 'THE COUNTER ';
}




// controlli per i bottoni del counter 
let counter = 0;
let actions = Array.from(document.querySelectorAll('[data-action]'));


document.querySelector('.counter-value').innerText = counter;


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

        document.querySelector('.counter-value').innerText = counter;

    })

})





