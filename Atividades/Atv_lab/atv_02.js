let palavras = ["casa", "computador", "sol", "programação", "lua"];

let resultado = filtrarEConverterMaiusculo(palavras);

console.log(resultado)

function filtrarEConverterMaiusculo(array) {
    return array
        .filter(palavra => palavra.length > 5) 
        .map(palavra => palavra.toUpperCase());
}