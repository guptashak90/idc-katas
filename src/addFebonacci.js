function  addFebonacci(n){
let i ;
let fib=[];
fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    return  fib[i]
}
}

addFebonacci(n)
