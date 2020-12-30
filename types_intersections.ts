// types intersections

type AccountInfo = {
  id: number
  name: string
  email?: string
}
// ? coloca a chave como opcional


type CharInfo = {
  nickname: string
  level: number
}

// Interseção de dois tipos, gerando um tipo novo com o conjunto dos dois itens
type PlayerInfo = AccountInfo & CharInfo


const player = {
  id: 1,
  name: 'nome do jogador',
  email: 'email@opcional',
  nickname: 'username',
  level: 1
}