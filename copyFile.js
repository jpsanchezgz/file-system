const fs = require('fs')

fs.copyFile('destination.txt', 'another.txt', 0, (error) => {
    if (error) {
        console.error('The error is: ', error)
        return
    }

    console.log('sucess')
})