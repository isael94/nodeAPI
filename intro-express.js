
const express = require('express')
const { response } = require('express')

const app = express()

app.get('/', (request, response) => {
    response.json({
        success: true,
        message: 'Hola mundo desde node en express',
        "nombre": "@javier"
    })
})

app.post('/', (request, response) =>{
    response.json({
        success: true,
        message: 'Hola mundo con un post'
    })
})

app.listen(8080, () =>{
    console.log('Server is listening...')
})