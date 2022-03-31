// Objetos são estruturas que permitem armazenar diversos valores
// em uma mesma variável, permitindo acessá-los por meio de um nome

// Criação de um objeto vazio
let vazio1 = {}  // Forma "moderna"
let vazio2 = new Object()  // Forma "tradicional"

// Criando um objeto já com dados
let pessoa = {
    // Os dados são armazenados no formato
    // propriedade: valor
    // ou também chamado de
    // atributo: valor
    nome: 'Jose da Silva',
    sexo: 'M',
    dataNasc: '2008-04-19',
    ocupacao: 'estudante',
    // Nome da propriedade pode ter espaços ou acento.
    // Nesse caso, o nome propriedade precisa estar entre aspas.
    'cidade de origem': 'Franca/SP',
    gostos: ['jogos', 'doces', 'dormir'] // Vetor em uma posição de objeto
}
console.log(pessoa)
console.table(pessoa)

// Exibindo apenas o valor de uma propriedade
console.log(pessoa.nome)
console.log(pessoa.ocupacao)
// Quando o nome da propriedade tem espaços ou acento, não é possível
// usar a sintaxe de ponto. É necessário usar a sintaxe de colchetes.
console.log(pessoa['cidade de origem'])
console.log(pessoa.gostos)

// A sintaxe dos colchetes SEMPRE funciona, mesmo se o nome da propriedade
// for uma única palavra sem acento
console.log(pessoa['nome'])
console.log(pessoa['gostos'][1]) // Mostrando só o 2º gosto.

// Outra consequência da sintaxe dos colchetes é a possibilidade de
// usar nome de propriedades que estão dentro de variáveis.

let x= 'sexo'
console.log(pessoa[x])
x = 'dataNasc'
console.log(pessoa[x])

// Criando uma nova propriedade para um objeto já existente.
pessoa.email = 'josedasilva@gmail.com'
pessoa.celular = '16.99999.8888'
console.table(pessoa)

// Criando um objeto vazio e só depois adicionando propriedades.
let carro = {}
carro.marca = 'VW'
carro.modelo = 'Kombi'
carro.ano = 1971
carro['combustível'] = 'gasolina'
carro.cor = 'Branco'

console.table(carro)

// Excluindo uma propriedade de um objeto
delete carro.ano

console.table(carro)

// Exibindo todas as propriedades de um objeto
// for .. in determina quais as propriedades de um objeto e
// coloca cada uma delas em uma variável informada pelo
// usuário (p, no caso) a cada iteração do loop
for (let p in pessoa) {
    console.log(p)
}

console.log('-----------------------------------------------')

for (let p in carro) {
    console.log(p)
}

console.log('-----------------------------------------------')

// for .. in para listar propriedades e valores de um objeto
for(let atrib in pessoa) {
    console.log(atrib + '->' + pessoa[atrib])
}