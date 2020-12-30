// private, somente dentro da própria classe
// readonly, somente leitura
// public, implicito, comum
// protected, somente dentro da classe ou nas extendidas

// class tipo abastract
// só permite ser extendida
// não permite novo objeto a partir dela

abstract class UserAccount {
  public name: string
  protected age: number

  constructor(name: string, age: number) {
    this.age = age
    this.name = name
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old`)
  }
}

// Exemplo abaixo com erro porque UserAccount é abstrata
// const will = new UserAccount('Will', 30)

// Extendendo classes
class CharAccount extends UserAccount {
  readonly nickname: string
  private level: number

  constructor (name: string, age: number, nickname: string, level: number) {
    super(name, age)
    this.nickname = nickname
    this.level = level
  }

  logInfo(): void {
    console.log(`The player ${this.name} with nick ${this.nickname} is ${this.age} years old and has level ${this.level}`)
  }

  get getLevel() {
    return this.level
  }

  set setLevel(level: number) {
    this.level = level
  }
}


const john = new CharAccount('John', 30, 'ninckjoohn', 10)
console.log(john)
console.log(john.name)
john.logDetails()
john.logInfo()

// console.log(john.level) error porque level é privado e não permite acesso de fora
john.getLevel // getter, não passa como função
john.setLevel = 499 // setter, também não passa como função, passa como atricuição






