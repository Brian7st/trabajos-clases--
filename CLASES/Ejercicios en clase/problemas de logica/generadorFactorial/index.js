function calculadoraFactorial(n) {
    if ( n === 0 || n == 1) {
        return 1;
    }else {
        return n * calculadoraFactorial(n - 1)
    }   
  } 

console.log(calculadoraFactorial(5));

