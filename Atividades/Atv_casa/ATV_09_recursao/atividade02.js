function calFatorial(n){
    if ( n <= 0){
        return"valor invalido";
    } else {
        return n * calFatorial(n - 1);
    }
}

console.log(calFatorial(5));

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
console.log(factorial(5));