





const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const operacion = (a, b, callback) => {
    const result = callback(a, b);
    console.log('El resultado es: ' + result);
}

operation(12, 5, suma);
operation(12, 5, resta);
operacion(12, 5, (a, b) => a * b);

const cars = ['vocho', 'athos', 'pointer', 'tsuru', 'bmw'];

cars.forEach((car) => { console.log(car) });

let.filtrados=cars.filter(car => car.includes('o'));
console.log(filtrados);


//regresar los que comiencen con a
//regresar los que terminen con u
//regresar los que tengan menos de 5 letras

let filtrado = cars.filter((car) => car.includes('a'));
console.log(filtrados);

filtrados = cars.filter((car) => car.endsWith('u'));
console.log(filtrados);

let filtrados = cars.filter((car) => car.length < 5);
console.log(filtrados);

//metodo map
const CARS = cars.map((car) => car.toUpperCase());
console.log(CARS);
console.log(cars);

const cars = ['vocho', 'athos', 'pointer', 'tsuru', 'bmw'];

const reves = cars.map(car => car.split('').reverse().join(''));
console.log(reves);

function wrapping(gifts) {
    const envueltos = [];
    for (let gift of gifts) {
        let tapa = '*'.repeat(gift.length + 2);
        let g = `${tapa}\n*${gift}*\n${tapa}`; 
        envueltos.push(g);
    }
    return gifts.map(gift => {
        let tapa = '*'.repeat(gift.length + 2);
        return `${tapa}\n*${gift}*\n${tapa}`;
        return g;
    });
    
}
const carsEnvueltos = wrapping(cars);
carsEnvueltos.forEach(car => { console.log(car) });


// forEach, map, filter
// reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumatoria = numbers.reduce((a, b) => a + b);
console.log(numbers);
console.log(sumatoria);
const factorial = numbers.reduce((a, b) => a * b);
console.log(factorial);


// 
const ages = [22, 14, 37, 19, 18, 22, 27];
const olders = ages.every(age => age >= 18);
const youngers = ages.some(age => age < 18);

//some regresa verdadero con uno que cumpla
const olders2 = ages.every(age => age >= 18);
const youngers2 = ages.some(age => age < 18);
console.log(olders2);
console.log(youngers2);

//ejercicios
/**
 * crear un array con elementos del 1 al 10
 * crear uno nuevo con los cuadrados
 * crear uno nuevo con los cubos
 * crear uno nuevo con las mitades 
 * 
 * crear uno nuevo con los pares 
 * crear uno nuevo con los impares
 * crear uno nuevo co los valores entre 3 y 8
 */
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers1);
const numbers2 = numbers1.map(number => number * number);
console.log(numbers2);
const numbers3 = numbers1.map(number => number * number * number);
console.log(numbers3);


const pairs = numbers1.filtrer(n => n % 2 !==0);