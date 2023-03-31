
let valores = [0, 6, 7, 10, 1]

// FORMA DE EXIBIR VALORES DE UMA ARRAY

// Padrão

    console.log(valores)

// Forma não indicada

    console.log(valores[0])
    console.log(valores[1])
    console.log(valores[2])
    console.log(valores[3])
    console.log(valores[4])

// Forma inteligente utilizando uma estrutura de repetição "como se fosse personalizada"

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// Forma também inteligente, mas simples e otimizada utilizando uma estrutura for in

for(let pos in valores) {
    console.log(valores[pos])
}

// ou

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
