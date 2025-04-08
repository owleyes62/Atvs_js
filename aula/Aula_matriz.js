let matriz = [[2, 7, 6], 
             [9, 5, 1], 
             [4, 3, 8]]; // Exemplo de matriz

             let somad = 0;
let somad2 = 0;
let somal = [];
let somac = [];
let retorno = 1;

// Fazendo a soma dos lados, colunas e diagonal principal
for (let i = 0; i < matriz.length; i++) {
  somad += matriz[i][i];
  
  somal[i] = 0;
  somac[i] = 0;
  for (let j = 0; j < matriz[0].length; j++) {
    somal[i] += matriz[i][j];
    somac[i] += matriz[j][i];
    console.log("Matriz " + j + "-" + i + ": " + matriz[j][i]);
  }

  // Conferindo se a soma dos lados e colunas são diferentes
  if (somal[i] !== somac[i]) {
    retorno = 0;
  }
  console.log("Soma da Linha nº" + (i + 1) + ": " + somal[i]);
  console.log("Soma da Coluna nº" + (i + 1) + ": " + somac[i]);
}

// Fazendo a soma da diagonal secundária
for (let i = matriz.length - 1, j = 0; i >= 0; i--, j++) {
  somad2 += matriz[i][j];
  console.log("Matriz " + j + "-" + i + ": " + matriz[j][i]);
}

console.log("Soma da Diagonal Principal: " + somad);
console.log("Soma da Diagonal Secundária: " + somad2);

// Conferindo se as somas das diagonais são iguais
if (somal[0] !== somad || somad !== somad2) {
  retorno = 0;
}

// Pegando o retorno para definir se é uma matriz quadrada mágica ou não
if (retorno) {
  console.log("É quadrada mágica");
  return true;
} else {
  console.log("Não é quadrada mágica");
  return false;
}