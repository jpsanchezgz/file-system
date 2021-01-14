const fs = require('fs')

fs.readFile('creado.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('error: ', error)
        return
    }

    console.log('Lo que dice tu archivo es: ', data)
})