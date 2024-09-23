const main = document.querySelector('main');
const h1 = document.querySelector('h1');

const eightball = () => {
    const question = prompt('Pregunta:');
    const random = Math.floor(Math.random() * 8);
    const options = [
        'SI😈',
        'NO🙄',
        'YES🤠',
        'NOU😒',
        'Obvio👌',
        'Nel perro😎',
        'Alomejor😉',
        'Por supuesto🙌',
    ]
    h1.innerText = options[random];
}

main.addEventListener('click', eightball);