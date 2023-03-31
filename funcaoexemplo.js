// PAR OU ÍMPAR

// Uma função dentro de um programa ela só vai ocorrer quando for chamada

function parimpar(n){
    if (n % 2 == 0) {
        return 'O valor é PAR'
    } else {
        return 'Ovalor é ÍMPAR'
    }
}

let res = parimpar(4) // Aqui eu faço a chamada para a minha função entregando a ela como parâmetro o valor 4 = PAR
console.log(res)

// outra forma de eu chamar minha função sem precisar colocar seu valor dentro de uma variável é:

console.log(parimpar(4))