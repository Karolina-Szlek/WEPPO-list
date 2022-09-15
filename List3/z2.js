// Fibonacci memo porównanie

//Memoizacja to technika optymalizacyjna polegająca na przechowywaniu 
//wyników funkcji dla najczęściej powtarzanych wektorów argumentów i zwracaniu wyniku z cache-a zamiast wykonywania funkcji. 

// Normalny
function fibonacci(n) {
    if (n <= 1)
      return n;
    else
      return fibonacci(n - 1) + fibonacci(n - 2);
  }


//memo

var fibonacciMemo = (function() {
  var memo = [0, 1];
  return fib = function(n) {
    let result;
    return (result = memo[n]) !== undefined ? result : memo[n] = fib(n - 1) + fib(n - 2);//jak nie ma n-tego elem to resut przypisz memo = fib(n - 1) + fib(n - 2)
  };
})();



console.log(fibonacci(10))
console.time("memo")
fibonacciMemo(40)
console.timeEnd("memo")
console.time("regular")
fibonacci(40)
console.timeEnd("regular")


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

/*i=0
while(i<10){//po 43 się ścina

  console.log("Time of fibonacci iter for", i)
  console.time(fibonacci1(i));
  console.timeEnd(fibonacci1(i));

  console.log("Time of fibonacci recursive for", i)
  console.time(fibonacci(i));
  console.timeEnd(fibonacci(i));
  i+=1
}*/