console.log( ([![]]+!+[]) );//falsetrue false + true
console.log( [![]] );//[false]
console.log( ![] + [] );//false not as boolean
console.log( ![] );//false
console.log( !+[] );//true
console.log( +[] );//0
console.log( +!+[] );//1 (to inaczej +true, a plus odpala ToNumber z true więc 1 )
console.log( !+[]+!+[] );// 2 (inaczej true+true , a + odpala ToNumber więc 1+1=2)
console.log( [][[]] );//undefined
console.log( [1, 2, 3]["0"] );//1
console.log( [1, 2, 3]["1"] );//2

console.log( +![] );//false

[coś]+[coś] -> [coścoś] [][[]]



(![]+[])[+[]] prints "f"
(![]+[])[+!+[]] prints "a"
([![]]+[][[]])[+!+[]+][+[]] prints "i"
(![]+[])[!+[]+!+[]] prints "l"


[+[]] ->0
[+!+[]] ->1
[+!+[]+[+[]]] ->10
[!+[]+!+[] ->2
![]+[] -> false jako String


------------------zad4------

const a ="stri"
const b = newString("stri")

typeof a  ->string
typeof b ->Object

a instanceof String ->false
b instanceof String ->true---sprawdz typ , czy twożymy konstruktor dana klasą



---------------zad2------

****. i[] różnice
jak masz pole, które jest liczbą, to kropką soię nie odniesiesz  
 pizza.7
[] daje nam więcej ciągów znaków możliwych

*****nie number dla[] dost do tablicy
to jak będziesz chciała wypisać, to undefined dostaniesz 

console.log('3')
const tablica=['ala', 'la' ,'da']
console.log(tablica['to'])//undefined
tablica['to'] = 'tatat'
console.log(tablica)
console.log(tablica.length)


