/* Função SEM uso de Promises */

function sumNumbers() {
    let result = 1 + 1

    if (result == 2) {
        sucessCallback()
    } else {
        errorCallback()
    }
}

function sucessCallback() {
    console.log('[FUNÇÃO] Yeah! Number 2!')
}

function errorCallback() {
    console.log('[FUNÇÃO] Oops! Something wrong!')
}

sumNumbers()

/* uso de Promises */

let p = new Promise( (resolve, reject) => {
    let result = 1 + 1
    if (result == 2) {
        resolve()
    } else {
        reject()
    }
})

p.then(() => {
    console.log('[PROMISE] Yeah! Number 2!')
})
.catch( () => {
    console.log('[PROMISE] Oops! Something wrong!')
})