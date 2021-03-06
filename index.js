const mongoose = require('mongoose');
const express = require('express');
const { response } = require('express');

const app = express()

const Student = mongoose.model('Students', {
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true,
        enum: [
            'Programacion',
            'Ingles',
            'Cocina'
        ]
    },
    age: {
        type: Number,
        min: 1
    }
})
app.use(express.json())

app.get('/students', async (request, response) => {
    try{
    const allStudents = await Student.find()

    response.json({
        success: true,
        data: {
            students: allStudents
        }
    })
    }catch(error){
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

app.post('/students', async (request, response) =>{
    const studentInfo = request.body

    const newStudent = await Student.create(studentInfo)

    response.json({
        success: true,
        data: {
            student: newStudent
        }
    })
})

app.delete('/students/:id', async (request, response) =>{
    try {
        const id = request.params.id

        const studentDeleted = await Student.findByIdAndDelete(id)

        response.json({
            success:true,
            data: {
                student: studentDeleted
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            succes: false,
            error: error.message
        })
    }
}) 


mongoose.connect('mongodb+srv://javisael:d12world@kodemia-node-live.av6ij.mongodb.net/school?retryWrites=true&w=majority', 
    {   useNewUrlParser: true, 
        useUnifiedTopology: true
    }, () => {
        console.log('DB Connected...')
        app.listen(8080, () =>{
            console.log('Server is ready...')
        })
    })
   


