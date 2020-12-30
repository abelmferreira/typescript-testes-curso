// aceita informações iguais classes readonly e ?
// permite extender interfaces
// classes podem implementar interfaces

interface IGame {
  title: string
  description: string
  readonly genre: string
  platform?: string[]
  getSimilars?: (title: string) => void
}

const tlou: IGame = {
  title: 'Titulo',
  description: 'descricao',
  genre: 'genre',
  platform: ['Ios', 'PS4'],
  getSimilars: (title: string) => {
    console.log(`${title}`)
  }
}

console.log(tlou.title)
// tlou.getSimilars('titulo busca')
// getSimilar é opcional, o if verifica se existe, chamado de type guards
if (tlou.getSimilars) tlou.getSimilars('titulo busca')


interface DLC extends IGame {
  originalGame: IGame
  newContent: string[]
}

const newDLC: DLC = {
  title: 'Titulo2',
  description: 'descricao2',
  genre: 'genre2',
  platform: ['Ios2', 'PS42'],
  originalGame: tlou,
  newContent: ['cont1', 'cont2']
}


// Classes implementando Interfaces
// significa que a classa precisa ter todos os tipos da interface

class CreateGame implements IGame {
  title: string
  description: string
  genre: string

  constructor(t: string, d: string, g: string) {
    this.title = t
    this.description = d
    this.genre = g
  }
}