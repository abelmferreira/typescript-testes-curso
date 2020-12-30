// dessa forma o typescrip ja sabe que é um string, não precisa redeclarar
let teste = 'texto'


// não precisaria fazer desta forma
let teste2: string = 'teste'

// outra forma que isso ocorre é em funções
// quando o retorno da função é tipado, ele ja sabe que e, é do tipo mouseEvent
window.addEventListener('click', (e) => {
  console.log(e.target)
})