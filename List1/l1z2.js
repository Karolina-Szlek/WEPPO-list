
// wylicza sume cyfr w liczbie

function add(num) {
    var sum = 0;
    do {
        sum = sum + num%10;
        num = Math.floor(num/10);
    } while (num);
    return sum;
 }
 //console.log(add())//NaN
 //console.log(add(1334))//10


 //zwraca liste cyfr z liczby
 function member(num) {
    var myArray = [];
    do {
        myArray.push(num%10);
        num = Math.floor(num/10);
    } while (num);
    return myArray;
 }

 //console.log(member(1334))//10
 //console.log(member(9))//10


function isGood(val){
    var myArray = member(val)
    var foo = val % add(val)
   if (val % add(val) != 0) {
        return false
   }else{
    for (var i in myArray){
        myArray.push(myArray[i]);
        if (val % myArray[i] != 0){
            return false
            }}

        }
    return true
// return myArray
}
/*console.log(isGood(1334))//f
console.log(isGood(9))//t
console.log(isGood(11))//f*/





function display(n) {
    var arr = [];
    for ( var i = 1; i < n; i+=1 ) {
        if ( isGood(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}


display(100000);