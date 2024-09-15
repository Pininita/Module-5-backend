import fs from 'fs/promises'

export const getName = async (req, res) => {
    const response = await fs.readFile('./students.json', 'utf-8')
    const students = await JSON.parse(response)
    const name = req.params.name;
    const results = students.filter((student) => student.name == name)
    if (results.length > 0) {
        res.send(results);
    } else {
        res.status(404).send('student name not found');
    }
}