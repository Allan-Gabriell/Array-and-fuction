
// REALIZANDO UMA SOMA

// Caso convencional

function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 7))

// Caso eu não declarasse um dos valores n1 ou n2 o js me retornaria NaN (Not a Number), por que um dos valores seria indefinido
// eu resolveria adicionar um parâmetro pré definido como no exemplo o valor 2, ou seja, caso o valor não venha apresentado a função vai considerar como no exemplo o valor 2

function soma(n1 = 2, n2 = 2){
    return n1 + n2
}

console.log(soma(4))