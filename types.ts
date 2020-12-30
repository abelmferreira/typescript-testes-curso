// boolean
let isOpen: boolean
isOpen = true

// string
// 'string' ou "string" ou `string`
let message: string
message = 'texto'
message = `texto ${isOpen}`

// number, int, float, hexadecimal, binary
let number: number
number = 1
number = 1.2
number = 1.21312
number = 0xff0

// array
let items: string[]
items = ['item1', 'item2']

let items2: Array<number>   // anotação tipo generic
items2 = [1, 2, 3]

// tuple
// usamos para criar um array com numeros e tipos definidos e itens
let title: [number, string, string]
title = [1, "teste", "teste2"]


// enum
enum Colors {
  white = '#fff',
  black = '#000'
}


// any (Qualquer coisa) Não é legal!!
// no tsconfig podemos definir um strict para impedir any no projeto
let coisa
coisa = [1, '2']


// void (vazio)
function logger(): void {
  console.log('foo')
}


// null / undefined
// usar let var: null não é legal porque uma vez definida uma variavel como null ela nunca podera mudar
// se define um novo type como abaixo
// anotação tipo union
type Bla = string | undefined


// never
function error(): never {
  throw new Error('error')
}


// object
let cart: object
cart = {
  key: 'teste'
}