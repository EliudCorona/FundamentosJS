const tsuru = {
    model: 2000,
    color: 'verde',
    kilometers: 200000,
    engine: '2.0 litros'
}

console.log(tsuru);
console.log(tsuru.model);
console.log(tsuru.color);
tsuru.engine = '4.0 litros';
console.log(tsuru);

tsuru.collitions = 5;
console.log(tsuru);
tsuru['numero de pacas'] = 'XD 666X';
console.log(tsuru);
tsuru.services = [2005, 2010, 2015, 2020];
console.log(tsuru['services']);

tsuru.start = function() {
    console.log('revision de sistema');
    console.log('revision de niveles');
    console.log('GRRRRRRR');
    console.log('RUNN');
    console.log('RUNN');
    console.log('RUNN');
    this.status = 'encendido';
}

tsuru.start();
console.log(tsuru.status);

tsuru['turn off'] = function() {
    console.log('apagando');
    this.status = 'apagado';
    console.log(this.status);
}
tsuru['turn off']();
