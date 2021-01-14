
const fs = require('fs')


fs.writeFile('creado.txt', 'Hey desde node :D again', 'utf8', (error) => {
    if (error) {
        console.error('error: ', error)
        return
    }

    console.log('Archivo escrito exitosamente')
})
