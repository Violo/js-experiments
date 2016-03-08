var UNITA_CONVERTION_MAP = {
    '1': 'I',
    '2': 'II',
    '3': 'III',
    '4': 'IV',
    '5': 'V',
    '6': 'VI',
    '7': 'VII',
    '8': 'VIII',
    '9': 'IX'
};

var DECINE_CONVERTION_MAP = {
    '1': 'X',
    '2': 'XX',
    '3': 'XXX',
    '4': 'LX',
    '5': 'L',
    '6': 'LX',
    '7': 'LXX',
    '8': 'LXXX',
    '9': 'XC'
};

var CENTINAIA_CONVERTION_MAP = {
    '1': 'C',
    '2': 'CC',
    '3': 'CCC',
    '4': 'CD',
    '5': 'D',
    '6': 'DC',
    '7': 'DCC',
    '8': 'DCCC',
    '9': 'CM'
};

var MIGLIAIA_CONVERTION_MAP = {
    '1': 'M',
    '2': 'MM',
    '3': 'MMM',
    '4': 'MMMM',
};

var estraiUnita = function(numero){
    var x = numero % 10;
}

var estraiDecina = function(numero){
    return Math.floor(numero / 10);
}

var estraiCentinaia = function(numero){
    return Math.floor(numero / 100);
}

var estraiMigliaia = function(numero){
    return Math.floor(numero / 1000);
}

var numberConverter = function(numero){
    if (numero < 1){
        console.log('Lo ZERO non esiste, pellaro!');
        return;
    }
    if (numero > 4999){
        console.log('Il numero massimo dei romani era 4999!');
        return;
    }

    var residuo = numero;
    var migliaia = estraiMigliaia(numero);
    residuo -= migliaia * 1000;
    var centinaia = estraiCentinaia(residuo);
    residuo -= centinaia * 100;

    var unitaRomana = UNITA_CONVERTION_MAP[estraiUnita(numero)] || '';
    var decinaRomana = DECINE_CONVERTION_MAP[estraiDecina(numero)] || '';
    var centinaiaRomana = CENTINAIA_CONVERTION_MAP[centinaia] || '';
    var migliaiaRomana = MIGLIAIA_CONVERTION_MAP[migliaia] || '';

    return migliaiaRomana + centinaiaRomana + decinaRomana + unitaRomana;
};

console.log(numberConverter(0));
console.log(numberConverter(9));
console.log(numberConverter(99));
console.log(numberConverter(100));
console.log(numberConverter(567));
console.log(numberConverter(999));
console.log(numberConverter(1000));
console.log(numberConverter(4999));
console.log(numberConverter(5000));
