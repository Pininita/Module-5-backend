import fs from 'fs/promises'

export const getId = async (req, res) => {
    const response = await fs.readFile('./students.json')
    const students = await JSON.parse(response)
    const id = parseInt(req.params.id);
    const results = students.filter(student => student.id === id);
    if (results.length > 0) {
        res.send(results);
    } else {
        res.status(404).send('student id not found');
    }
}
