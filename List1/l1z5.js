
//iteracyjnie- liczy po kolei liczby ciągu aż dojdzie do właściwej


  function fibonacci1(num){
    var a = 1, b = 0, temp;
  
    while (num > 0){//(num >= 0)liczyłoby 9tą liczbę ciągu
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }

//console.log(fibonacci1(8));


//rekurencyjnie- mówie, licz fib dla coraz mniejszych num, wyniko dodajesz

function fibonacci(num) {
    if (num <= 2) return 1;//(num <= 1) to liczyłoby 9 liczbę c fibonacciego
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }


 // console.log(fibonacci(8));



//pomiar czasu

/*console.time(fibonacci1(8));
//oldfunc();
console.timeEnd(fibonacci1(8));

console.time(fibonacci(8));
//newfunc();
console.timeEnd(fibonacci(8));*/

i=10
while(i<43){//po 43 się ścina

    console.log("Time of fibonacci iter for", i)
    console.time(fibonacci1(i));
    console.timeEnd(fibonacci1(i));

    console.log("Time of fibonacci recursive for", i)
    console.time(fibonacci(i));
    console.timeEnd(fibonacci(i));
    i+=1
}