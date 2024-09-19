import express from 'express'
import { readFile } from 'fs/promises'
import { getId } from './functions/getId.js'
import { getMajor } from './functions/getMajor.js'
import { getAge } from './functions/getAge.js'
import { getName } from './functions/getName.js'
import { postStudents } from './functions/postStudents.js'
import { deleteStudents } from './functions/deleteStudents.js'
import { putStudents } from './functions/putStudents.js'
import { bodyValidation, logMiddleWare } from './middlewares/middlewares.js'

const app = express()
const port = 3001

app.use(express.json())  // revisa cada endpoint si contiene algo
app.use(logMiddleWare)

export let students = [];

// consumiendo students.json

readFile("./students.json", 'utf-8')
    .then((data) => {
        students = JSON.parse(data)
    })
    .catch((err) => {
        console.error('error reading students.json', err)
    })

// comprobando funcionamiento

app.get('/', (req, res) => {
    res.send('hello world! , type "localhost:3001/students" to get into students')
})

// obteniendo lista de estudiantes

app.get('/students', (req, res) => {
    res.send(students)
})

// obtener o buscar por id, nombre, edad y labor

app.get('/students/id/:id', getId)

app.get('/students/major/:major', getMajor)

app.get('/students/age/:age', getAge)

app.get('/students/name/:name', getName)

// creando estudiantes

app.post('/students/add', bodyValidation, postStudents)

// actualizando estudiantes

app.put('/students/:id', bodyValidation, putStudents)

// eliminar elementos del array por medio de busqueda del id

app.delete('/students/remove/:id', deleteStudents)

app.listen(port, () => {
    console.log('server is running');
})