function logDetails(uid: number | string, item: string) {
  console.log(`O produto ${uid} posssui um titulo ${item}`)
}


function logInfo(uid: number | string, item: string) {
  console.log(`O produto ${uid} posssui um titulo ${item}`)
}

// repare que o tipo do uid é repetido em varios locais com uma caracteristica especifica
// podemos fazer assim


type Uid = string | number | undefined

function logNovo(uid: Uid, item: string) {
  console.log(`O produto ${uid} posssui um titulo ${item}`)
}


// outro exemplo

type Platform = 'Linux' | 'Windows' | 'Mac'

function renderPlatform(platform: Platform){
  return platform
}



// da erro renderPlatform('ios')
renderPlatform('Windows')

logDetails(1, '123')
logDetails("1", "123")

