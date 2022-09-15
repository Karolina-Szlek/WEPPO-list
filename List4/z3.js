
//funkcja konstruktorowa Foo
var Foo = function (foo) {
    this.a = foo
};

// metoda publiczna Bar
Foo.prototype.Bar = (function () {
    //funkcja Qux (prywatna) dla instancji tworzonych przez Foo - jest w ciele (nowa funkcja w środku)
    function Qux() {
        return "qux"
    }

    // publiczna (nie nowa funkcja, tylko return funkcja)
    return function () {
            return "publicznie " + Qux()//żeby wywołać tylko z wewnątrz metody publicznej Bar
        
    };
})();

    

var myObject = new Foo('coś');
console.log(myObject.a) //zwraca coś 
console.log(myObject.Bar())
//console.log(myObject.Bar.Qux()) 



///składowe prywatne (private), których nazwy mogą być używane tylko przez funkcje, 
//które same są składowymi tej samej klasy, lub funkcje z daną klasą zaprzyjaźnione 