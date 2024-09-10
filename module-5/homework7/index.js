import express from 'express'

const app = express()
const port = 3001

app.use(express.json())


let students = [
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];


app.get('/', (req, res) => {
    res.send('hello world 2')
})


app.get('/students', (req, res) => {
    res.send(students)
})

// obtener o buscar por id

app.get('/students/:id', (req, res) => {
    const id = req.params.id;
    const result = students.find((student) => student.id === parseInt(id)) // cuando se usa .filter, no retorna el else
    if (result) res.send(result)
    else {
        res.status(404)
        res.send('student id not found')
    }
})

// 

app.post('/students', (req, res) => {
    console.log(req.body);
    students.push(req.body)
    res.send(`student add ${req.body.name}`)
})

// eliminar elementos del array por medio de busqueda del id

app.delete('/students/:id', (req, res) => {
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

