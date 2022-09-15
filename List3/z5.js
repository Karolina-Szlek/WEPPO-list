// funkcja przyjmująca dowolna liczbę argumentów, która policzy ich sumę

function sum(...a) {
    let res = 0 ;
    a.forEach(_ => res += _)//każdy elem dodajesz do wyniku(sumy)
    return res
}

console.log(sum(1,2,3,4,5,6,7,8,9,10))
console.log(sum(1,2,3,4,5,6,7,8))

// ...a - Rest Parameters (oznacza dowolna ilości arg)