function createGenerator_w() {
    var _state = 0;
    return {
    next : function() {
    return {
    value : _state,
    done : _state++ >= 10
    }
    }
    }
    }
    

function createGenerator(num) {
    var _state = 0;
    return {
        next() {
            if (_state <= num) {
                return { value: _state++ };//wypisze jak state<10
            } else {
                return { done: true };//zatrzyma program jak state przekroczy10
            }
        }
    }
}

var foo = {
    [Symbol.iterator] : createGenerator_w//dla orginalnego
};
var foo1 = {
    [Symbol.iterator] : createGenerator.bind(this, 10)
}
var foo2 = {
    [Symbol.iterator] : createGenerator.bind(this, 2)
}

for (var f of foo1) {
       console.log(f)
}

for (var f of foo2) {
    console.log(f)
}

for (var f of foo) {
    console.log(f)
}

