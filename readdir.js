const fs = require('fs')

fs.readdir('myDir', 'utf8', (error, files) => {
    if (error) {
        console.error('The error is :', error)
        return
    }

    console.log('Your directory contains: ', files)
})