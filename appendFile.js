const fs = require('fs')

fs.appendFile('creado.txt', ' this is my data', 'utf8', (error) => {
    if (error) {
        console.error('The error is: ', error)
        return
    }

    console.log('Success')
})