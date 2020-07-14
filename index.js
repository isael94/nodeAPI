const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://javisael:d12world@kodemia-node-live.av6ij.mongodb.net/school?retryWrites=true&w=majority', 
    {   useNewUrlParser: true, 
        useUnifiedTopology: true
    }, () => {
        console.log('DB Connected...')
        Student.create({
            name: 'Javier',
            course: 'Ingles',
            age: 26
        })
    });

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

