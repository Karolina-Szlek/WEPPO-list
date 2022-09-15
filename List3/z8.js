
//jako argumenty przyjmuje generator oraz liczbę elementów które powinna zwrócić izwraca tą liczbę elementów


//fibGen z zadania 7
function* fibGen() {
    var fn1 = 0;
    var fn2 = 1;
    while (true) {  
        var current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;
        yield current;
    }
}

//funkcja z zadanie, bierze generator i ilość elem do zwróćenia
function* take(it, limit) {
    var next = it.next()//{ value: 0, done: false }
    var i = 0;
    while(i++ < limit) {// i zzaczyna od 0 i leci do 10włącznie 9, apatrzymy jakby od 1 do 10
        yield next.value
        next = it.next()//następny z generatora
    }
}

for (var result of take( fibGen(), 10)) {
    console.log(result);
}

// sam take nie printuje, tylko bierze ileś pierwszych
//zacznie od zera, czyli pierwszego elementu generatora, bo it.next, gdzie it to generator-next zacznie od początku