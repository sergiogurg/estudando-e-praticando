

const betterDeveloper = 'vanessa'

/* SEM uso de Promises */

function whoIsBetterCallbackFunction(callback, errorCallback) {

    if (betterDeveloper != 'vanessa' && betterDeveloper != 'gabriel') {
        errorCallback({
            name: 'This is wrong!',
            message: betterDeveloper + '? Really'
        })
    } else {
        callback({
            name: betterDeveloper,
            message: 'CDFs are the best!'
        })
    }
}

whoIsBetterCallbackFunction( (result) => {
    console.log(`[FUNCTION] ${result.name} ? Yeah! ${result.message}`)
}, (error) => {
    console.log(`[FUNCTION] ${error.name} ${error.message}`)
})

/* Promises */

function whoIsBetterCallbackPromise() {

    return new Promise( (resolve, reject) => {
        if (betterDeveloper != 'vanessa' && betterDeveloper != 'gabriel') {
            reject({
                name: 'This is wrong!',
                message: betterDeveloper + '? Really'
            })
        } else {
            resolve({
                name: betterDeveloper,
                message: 'CDFs are the best!'
            })
        }
    })
}

whoIsBetterCallbackPromise()
.then( (result) => {
    console.log(`[PROMISE] ${result.name}? Yeah! ${result.message}`)
}).catch( (error) => {
    console.log(`[PROMISE] ${error.name} ${error.message}`)
})