var isPrimo = function(n){
    var i;

    if (n === 1){
        return true;
    }

    for (i = 2; i <= n-1; i++){
        if(n % i === 0){
            return false;
        }
    }

    return true;
}

var numeriPrimi = function(numElementi){
    console.log('Numeri Primi\n');
    var i = 1;
    var result = [];
    numElementi = numElementi || 10;

    do {
        if (isPrimo(i)){
            result.push(i);
        }
        i++;
    } while (result.length < numElementi);

    return result;
};

var check = function(values){
    var i;
    for (i = 0; i < values.length; i++){
        if (!isPrimo(values[i])){
            return false;
        }
    }

    return true;
};

// Test
var result = numeriPrimi(10000);
console.log("Dovrebbe avere il numero di elementi definito dal paramentro", result.length === 100);
console.log("Se io non ti passo nessun parametro devi avere 10 valori", numeriPrimi().length === 10);
console.log("4 dovrebbe essere non primo", isPrimo(4) === false);
console.log("1 dovrebbe essere primo", isPrimo(1) === true);
console.log("17 dovrebbe essere primo", isPrimo(17) === true);
console.log("Tutti i valore dovrebbero essere primi", check(result));

console.log(result);