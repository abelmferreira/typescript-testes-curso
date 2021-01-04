type TODO = {
  title: string
  description: string
  completed: boolean
}

// Readonly

const todo: Readonly<TODO> = {
  title: "titulo1",
  description: "description 1",
  completed: false
}

console.log(todo)


// todo.completed = true
// comando acima apresenta erro porque todo é Readonly




// Partial
// Permite somente uma parcial de um tipo

function updateTodo (todo: TODO, fieldsToUpdate: Partial<TODO>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo2: TODO = updateTodo(todo, { completed: true })
console.log(todo2)




// Pick
// Pega alguns campos de outro tipo

type TodoPreview = Pick<TODO, "title" | "completed">

const todo3: TodoPreview = {
  title: "Novo title 3",
  completed: false
}

console.log(todo3)





// Omit
// Permite ocultar algumas propriedades

type TodoPreview2 = Omit<TODO, "description">

const todo4: TodoPreview2 = {
  title: "Novo title 4",
  completed: true
}

console.log(todo4)