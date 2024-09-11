import { error } from 'console'
import express from 'express'
import  {readFile } from 'fs/promises'

const app = express()
const port = 3001

app.use(express.json())


let students = [
    // { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    // { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    // { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];

// consumiendo students.json

readFile("./students.json", 'utf-8')
.then((data) => {
    students = JSON.parse(data)
})
.catch((err) => {
    console.error('error reading students.json',err)
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

app.get('/students/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const results = students.filter(student => student.id === id);
    if (results.length > 0) {
        res.send(results);
    } else {
        res.status(404).send('student id not found');
    }
})

app.get('/students/major/:major', (req, res) => {
    const major = req.params.major;
    const results = students.filter((student) => student.major == major) 
    if (results.length > 0) {
        res.send(results)
    }
    else {
        res.status(404)
        res.send('student major not found')
    }
})

app.get('/students/age/:age', (req, res) => {
    const age = parseInt(req.params.age);
    const results = students.filter(student => student.age === age);
    if (results.length > 0) {
        res.send(results);
    } else {
        res.status(404).send('student age not found');
    }
})

app.get('/students/name/:name', (req, res) => {
    const name = req.params.name;
    const results = students.filter((student) => student.name == name) 
    if (results.length > 0) {
        res.send(results);
    } else {
        res.status(404).send('student name not found');
    }
})

// creando estudiantes

app.post('/students/add', (req, res) => {
    console.log(req.body);
    students.push(req.body)
    res.send(`student add ${req.body.name}`)
})

// eliminar elementos del array por medio de busqueda del id

app.delete('/students/remove/:id', (req, res) => {
    const id = req.params.id;
    const result = students.findIndex((student) => student.id === parseInt(id))
    if (result !== -1) {
        students.splice(result, 1)
        res.send(`Student remove, id: ${id}`)
    }
})



app.listen(port, () => {
    console.log('server is running');
})

