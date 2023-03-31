
// COLOCANDO UMA FUNÇÃO DENTRO DE UMA VARIÁVEL

let v = function(x) {
    return x*2
}

console.log(v(5))

// Neste exemplo ele vai me retornar o valor 10


// FATORIAL DE UM NÚMERO

// Um fatorial é igual a (exemplo): 5! = 5 x 4 x 3 x 2 x 1

function fatorial(n) {
    let fat = 1 
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))