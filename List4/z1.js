
//węzeł z lewe i prawe poddrzewo oraz własna wartośc
function Node(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
}

//iterator
//Node.prototype -chcemy, żeby node było prototypem naszej funkcji, [Symbol.iterator] potrzebny, żeby działało generowanie
Node.prototype[Symbol.iterator] = function* () {
    yield this.value;
    if (this.left) yield* this.left; 
    if (this.right) yield* this.right;
}
//yield* iteruje po iterowalnym obiekcie i wywołuje yield z każdą kolejną zwracaną przez niego wartością.

function height(node){
    if(!node) return 0;
    var leftHeight = height(node.left);
    var rightHeight = height(node.right);
 
    return Math.max(leftHeight, rightHeight) + 1;
}


//zbudowane drzewo
let tree = new Node(4, 
    new Node(1, new Node(2), new Node(3)),
    new Node(1, new Node(2), new Node(3)))


//wypisanie drzewa-z2
for (var value of tree) {
    console.log(value);
}
//console.log("Height: " + height(tree))