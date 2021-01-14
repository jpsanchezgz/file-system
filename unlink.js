const fs = require('fs')

fs.unlink('prueba1.txt', (error) => {
    if (error) {
        console.error('The error is: ', error)
        return
    }

    console.log('succes')
})