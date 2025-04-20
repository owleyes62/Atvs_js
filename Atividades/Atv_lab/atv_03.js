let vetor = [5, 12, 15, 22, 30, 7, 50];

console.log("Numeros do vetor multiplos de 5")
dividirMultiplosDeCinco(vetor)


function dividirMultiplosDeCinco(v){
    let mult = v.filter(num => num % 5 == 0);
    let div = v.filter(num => num % 5 == 0).map(num => num / 5);
    console.log(mult)
    console.log("numaros divididos por 5")
    console.log(div)
 
}

