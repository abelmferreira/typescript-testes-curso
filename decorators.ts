// @Component
// @Selector
// @useState("dasdas")


// Class decorator
// target neste exemplo é o constructor da classe
function log(target) {
  console.log(target)
}

@log
class Foo {}






// Class decorator + Factory
function Logger(prefix: string) {
  return (target: any) => {
    console.log(`${prefix} - ${target}`)
  }
}

@Logger("awesome")
class Foo2 {}







// Class decorator + Factory + complexo
function setAPIVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion
    }
  }
}

@setAPIVersion("1.0.0")
class API {}
console.log(new API())







// Property decorator
function minLength(length: number) {
  return (target: any, key: string) => {
    // console.log(target)
    // console.log(key)
    let val = target[key]
    const getter = () => val
    const setter = (value: string) => {
      if (value.length < length) {
        console.log(`Error: não pode criar ${key} menor que ${length}`)
      } else {
        val = value
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    })
  }
}

// function maxLength(length: number) {
//   return (target: any, key: string) => {
//     // console.log(target)
//     // console.log(key)
//     let val = target[key]
//     const getter = () => val
//     const setter = (value: string) => {
//       if (value.length > length) {
//         console.log(`Error: não pode criar ${key} maior que ${length}`)
//       } else {
//         val = value
//       }
//     }

//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter
//     })
//   }
// }

class Movie {
  @minLength(5)
  // @maxLength(7)
  title: string

  constructor(t: string) {
    this.title = t
  }
}

const movie = new Movie("Interstellar")
console.log(movie.title)











// Method decorator
function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value

    descriptor.value = function (...args) {
      console.log(`esperando ${ms}...`)
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms)

      return descriptor
    }
  }
}

class Greeter {
  greeting: string

  constructor(g: string) {
    this.greeting = g
  }

  @delay(2000)
  greet(){
    console.log(`Hellow ${this.greeting}!`)
  }

}

const greeter = new Greeter('um Greeter')
greeter.greet()









// Parameter decorator
// Acessor decorator



