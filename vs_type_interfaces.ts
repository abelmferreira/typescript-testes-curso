// Type Alias

// definição
type GameT = {
  title: string
}

type DLCT = {
  extra: string
}


// intersection
type GameCollectionT = GameT & DLCT

// implements
// class CreateGameT implements GameCollectionT {}


// declarar função
type getSimilarsT = (title: string) => void





// com type permite declarar tipos primitivos
type IDT = string | number

// permite declarar tuplas
type TupleT = [number, number]




[1, 2] as TupleT // se não seguir a tuple, apresenta erro




// Apenas uma declaração por escopo
// type JQueryT = { a: string}
// type JQueryT = { b: string} // JQueryT só terá a declaração de b:






// vantagem
// é menor, é mais simples, é mais facil zer interserções
// tente usar types na maioria das vezes

