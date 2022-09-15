"use strict";

function createFs(n) {
   var fs = []; // i-ta funkcja z tablicy ma zwrócić i
  var _loop = function _loop(i) {
    fs[i] = function () {
      return i;
    };
  };

  for (var i = 0; i < n; i++) {
    _loop(i);
  }

  ;
  return fs;
}


    var myfs = createFs(10);
    console.log( myfs[0]() ); // zerowa funkcja miała zwrócić 0
    console.log( myfs[2]() ); // druga miała zwrócić 2
    console.log( myfs[7]() );
    // 10 10 10
    

//i z for użyje w function, która uzupelnia listę - lista uzupełni się kolejnymi i (0-10)




 /*function createFs(n) { // tworzy tablicę n funkcji
     var fs = []; // i-ta funkcja z tablicy ma zwrócić i
     for ( var i=0; i<n; i++ ) {
     console.log(i + " first")
     fs[i] = function() {//i z for 
        return i;
     };};
     console.log(i + " sec")//tablice uzupełni 10
     return fs;
     }

     //i z for użyje do przelecenia po liście, a i które wpisije,
     // to odbywa się później, więc korzysta z wartości i na którewj się pentla zatrzymała (n)



     var myfs = createFs(10);
     console.log( myfs[0]() ); // zerowa funkcja miała zwrócić 0
     console.log( myfs[2]() ); // druga miała zwrócić 2
     console.log( myfs[7]() );
     // 10 10 10*/





//  var Zmienne zadeklarowane za pomocą var działają w kontekście funkcji.
//  let Deklaracja zmiennej za pomocą let sprawia, że zmienna działa w kontekście blokowym, np. wewnątrz pętli


/*function createFs(n) { // tworzy tablicę n funkcji
    var fs = []; // i-ta funkcja z tablicy ma zwrócić i
    for ( let i=0; i<n; i++ ) {
    fs[i] = function() {//i z for 
       return i;
    };};
    return fs;
    }

    //i z for użyje do przelecenia po liście, a i które wpisije,
    // to odbywa się później, więc korzysta z wartości i na którewj się pentla zatrzymała (n)



    var myfs = createFs(10);
    console.log( myfs[0]() ); // zerowa funkcja miała zwrócić 0
    console.log( myfs[2]() ); // druga miała zwrócić 2
    console.log( myfs[7]() );
    // 10 10 10*/