// GEnerics
// Quando definido o tipo, ele não pode mudar

// abaixo useState aceita string ou number e pode mudar a qualquer momento

function useState() {
  let state: number | string

  function getState() {
    return state
  }

  function setState(newState: number | string) {
    state = newState
  }

  return { getState, setState }
}

const newState = useState()

newState.setState(4565)
console.log(newState.getState())

newState.setState("foo")
console.log(newState.getState())



//Mas se quisermos que depois de definido number, ele tenha que ser number até o final?
// Lettras padrõs mas não obrigatorios de uso
// S => State
// T => Type
// K => Key
// V => Value
// E => Element


// TIPOS_ACEITOS podem ser tipos maiores e mais complexos
// type numOrstring = number | string
// function useStateGen<S extends numOrstring>() {

// <LETRA_GENERIC_CRIADA extends TIPOS_ACEITOS = TIPO DEFAULT>
function useStateGen<S extends number | string = string>() {
  let state: S

  function getState() {
    return state
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState }
}

const newStateGen1 = useStateGen<number>()
const newStateGen2 = useStateGen()

newStateGen1.setState(4565)
console.log(newStateGen1.getState())

newStateGen2.setState("foo")
console.log(newStateGen2.getState())