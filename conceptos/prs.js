const btnPlay = document.querySelector('#btn');
const h3User = document.querySelector('#user span');
const h3Compu = document.querySelector('#computer span');
const h1Result = document.querySelector('h1');

const play = () =>{
    const choiceUser =prompt('Elige: \n Piedra\n Papel\n Tijeras');
    const choices = ['piedra', 'papel', 'tijeras'];

    const choicecompu = choices[Math.floor(Math.random()*3)];
    let message = '';

    if(choiceUser === choicecompu){
        message = 'Empate';
    }else if(choiceUser === 'piedra' && choicecompu === 'tijeras') ||
        (choiceUser === 'papel' && choicecompu === 'piedra') ||
        (choiceUser === 'tijeras' && choicecompu === 'papel')
    {
        message = 'Ganaste';
    }else{
        message = 'Perdiste';
    }
}
