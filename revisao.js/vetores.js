let frutas = ['maçã', 'laranja', 'pera', 'uva', 'mamao', 'banana']

// Vetor Original
console.log(frutas)

// Retirar o último elemento de um vetor
let ultimaFruta = frutas.pop()

// Vetor alterado
console.log(frutas)
console.log(ultimaFruta)

// Remoção do primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log (frutas)
console.log(primeiraFruta)

// Remoção em posição intermediária do vetor
// 1 parâmetro -> a posição de remoção (contagem começa em 0)
// 2 parâmetro -> a quantidade de elementos a remover).
let terceiraFruta = frutas.splice(2, 1)  // SEMPRE retornará um vetor.

console.log(frutas)
console.log(terceiraFruta)

// Inserindo elemento no final do Vetor
frutas.push('amora')  // Pode inserir mais de um elemento ao mesmo tempo.
// Por exemplo:
// frutas.push('amora', 'jaca')
console.log(frutas)


// Inserir no início do Vetor
frutas.unshift('jabuticaba') // Também pode inserir mais de um elemento.
// Por exemplo:
// frutas.ubshift('jaboticaba', 'mexerica')
console.log(frutas)


// Inserir no meio do Vetor
// Parâmetros do splice() para inserção
// 1 -> posição para inserção
// 2 -> número de elementos a serem excluídos (para inserção, usa-se 0)
// 3 em diante -> elemento(s) que será(ão) inseridos.
frutas.splice(2, 0, 'pêssego') // Inserindo na terceira posição.
// Também funciona para inserir vários elementos ao mesmo tempo.
// Por exemplo:
// frutas.splice(2, 0, 'pêssego', 'jaca')
console.log(frutas)


// Usando splice() para substituição.
// Parâmetros:
// 1 -> posição para substituição
// 2 -> Quantidade de elementos que serão excluídos (para substituição)
// 3 -> O elemento que será incluído no lugar
frutas.splice(4, 1, 'ameixa')  // Substituição na 5 posição.
console.log(frutas)


// Inserção múltipla com splice()
frutas.splice(1, 0, 'nectarina', 'jaca')
console.log(frutas)


/*--------------------------------*/

//  Percurso de Vetor

console.log('-----------------------------------------------------')

// 1) Percurso com 'FOR' tradicional.
// a) A contagem inicia em 0(zero - primeiro elemento)
// b) Ocorre enquanto o contador for MENOR que o número de elementos do Vetor.
// c) length termina com TH. 
// d) Método mais flexível pois, se necessário, é possível fazer um percurso parcial.
for(let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}

console.log('-----------------------------------------------------')

// 2) FOR tradicional, em ordem inversa
// a) O contador inicia-se em length -1
// b) A condição é contador MAIOR ou IGUAL a zero (0 - primeiro elemento)
for(let i = frutas.length -1; i >= 0; i--) {
    console.log(i, frutas[i])
}

console.log('-----------------------------------------------------')

// 3) Percurso com for..of
// a) Sempre percorre o vetor inteiro, na ordem natural, sem necessidade de uma variável contadora.
// Variáveis:
// f -> variável que receberá cada elemento do vetor (pode ser qualquer nome válido)
// frutas -> é o vetor a ser percorrido.
for(let f of frutas) {
    console.log(f)
}

console.log('-----------------------------------------------------')

// 4) Percurso com forEach()
// forEach() recebe como parâmetro uma função que recebe como parâmetro cada elemento do vetor.
// O nome do parâmetro da função pode ser qualquer nome válido de identificador.
frutas.forEach(function(elemento){
    console.log(elemento)
})

console.log('-----------------------------------------------------')

// O mesmo forEach(), usando uma arrow function como parâmetro.
frutas.forEach(elemento => console.log(elemento))