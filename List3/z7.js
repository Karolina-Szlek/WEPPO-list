//nieskończone generatory dla liczb fibonacciego:
//zwykły iterator (zwracający obiekt z funkcją next) oraz generator (czyli funkcję wewnętrznie używającą yield do zwracania kolejnych wartości)


//zwykły iterator
function fib() {
    var fn1 = 0;
    var fn2 = 1;
    return {
        //zwraca next, który zwraca wynik funkcji - nect wylicza
        next : function() {
            var current = fn1
            fn1 = fn2;
            fn2 = current + fn1;  
            return {
                value : current,  //zwracasz orginalny początkowy
                done : false//musi być na false, żeby liczyć kolejne next
            }
        }
    }
}

//function* - definiuje funkcję generatora
function* fibGen() {
    var fn1 = 0;
    var fn2 = 1;
    while (true) { //while(true) - pętla nieskończona 
        var current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;
        yield current;//zrobione yield-em - returnujesz current ale nie zatrzymuje funkcji
    }
}




// iterator - wypisuje kolejne
console.log("Zwykły iterator")
var _it = fib();
for ( var _result; _result = _it.next(), !_result.done; ) {//!_result.done - ustawiam done na false, żeby się liczyło
    if (_result.value > 10000) break;
    else {
        console.log( _result.value );
    }
}

//The boolean property done indicates when the end of the sequence of items has been reached
//When the done becomes true, the generator stops and won’t generate any more values.


// generator - wypisuje kolejne
console.log("generator")
for ( var i of fibGen() ) {
    if (i > 10000) break;
    console.log(i)
}

//for-of gdy jest generator bo jest itrable


