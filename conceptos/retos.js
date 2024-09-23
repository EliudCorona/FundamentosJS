function wrapping(gifts) {
    const envueltos = [];
    for (let gift of gifts) {
        let tapa = '*'.repeat(gift.length + 2);
        let g = `${tapa}\n*${gift}*\n${tapa}`; 
        envueltos.push(g);
    }
    return envueltos;
}

const gifts = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);
console.log(wrapped[0]);

// Función createCube para crear un cubo en ASCII
function createCube(size) {
    const space =   ' '
    const faceA =   '/\\'
    const backA =  '_\\'
    const faceB =  '\\/'
    const backB =  '_/'
    let cubeA = '';
  for(let i=0; i<size; i++){
    let line = space.repeat(i);
    line += faceA.repeat(size-i);
    line += backA.repeat(size);
    let aLine = space.repeat(i);
    aLine +=faceB.repeat(size-i);
    aLine += backB.repeat(size);

    cubeA= line + '\n' + cubeA +'\n' + aLine ;
  }
  return cubeA;
}
const cube = createCube(3)
console.log(cube)
