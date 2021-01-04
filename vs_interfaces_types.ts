// Interfaces

// definição
interface Game {
  title: string
}

interface DLC {
  extra: string
}


// intersection / extends
interface GameCollection extends Game, DLC {}

// implements
// class CreateGame implements GameCollection {}


// declarar função
interface getSimilars {
  (title: string): void
}



// interface não declara tipos primitivos
// interface ID extends number {}

// não consigo definir tuplas na interface
interface Tuple {
  0: number
  1: number
}

[1, 2, 3, 4, "texto"] as Tuple // é aceito sem restrições, não funciona




// Podemos ter multiplas declarações que o resultado é um merge de todas
interface JQuery { a: string }
interface JQuery { b: string }

const $:JQuery = {
  a: "bla",
  b: "foo"
}

// vantagem
// quando criar libs, prefira interface, porque são extensiveis
// ou criando objetos/classes, será mais intuitivo
