let num = [5, 7, 9] // Aqui é a minha variável composta com os seus respectivos valores


// Como adicionar valores na variável composta

num[2] = 3 // Neste primeiro caso o [2] representa o meu índice dentro da minha variável e atribui a ela o valor 3

num.push(2) // Neste segundo caso eu adiciono o valor 2 dentro da minha variável com o Js desenvolvendo um novo índice


// Como saber o comprimento (tamanho) da minha variável composta


console.log(`O vetor tem ${num.length} posições`) // o comando num.length monstra o tamanho da minha array


// ObSERVAÇÃO - se eu quiser organizar os meus valores de uma forma lógica eu uso o comando abaixo

num.sort() // Aqui ele vai organizar os valores na ordem crescente

// Como buscar a posição de um valor dentro do vetor

let pos = num.indexOf(10) //indexOf busta a posição de um valor dentro da array

if (pos == -1) {
    console.log('Posição não encontrada')
}else {
    console.log(`O valor está na posição ${pos}`)
} 
// OBSERVAÇÃO - Quando o Js retorna o valor -1 significa que o valor que ele buscava não foi encontrado

console.log(num)
