
function forEach (a, f) {
    for(var i = 0; i < a.length; i++) { 
      f(a[i])
    }
  }


function map(a, f) {
    var res = []
    for(var i=0; i<a.length;i++){//wykonuje na każdym elemencie
      res.push(f(a[i]))//dodaje do listy wynikowej
    }
    return res;
  }



function filter(a, predicate) {
    var res = []
    for(var i=0; i<a.length;i++){//każdy element sprawczam if-em
        if (predicate(a[i])) res.push(a[i])//jeśli warunek jest spełniony
    }
    return res
}




//funkcje zwrotne w postaci zwykłej i jako lambda wyrażenia
//x => x to inaczej return x


//forEach
var a = [1,2,3,4]
a.forEach(_ => { console.log(_) })
forEach(a, _ => { console.log(_ + "*2 = " + _*2 ); } )

//map
console.log(map(a, _ => _ * 2 ))

//filter
console.log(filter(a, _ => _ < 3 ))

    