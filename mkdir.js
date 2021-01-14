const fs = require('fs')

fs.mkdir('first', (error) => {
    if(error){
        console.error('The error is: ', error)
        return
    }

    console.log('success')
})