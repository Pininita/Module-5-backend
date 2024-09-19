import fs from 'fs/promises'

export const putStudents = async (req, res) => {
    const response = await fs.readFile('./students.json', 'utf-8')
    const students = await JSON.parse(response)
    const id = req.params.id
    const index = students.findIndex((student) => student.id === parseInt(id))
    students[index] = req.body
    await fs.writeFile('./students.json', JSON.stringify(students))
    res.send('the student has been updated')
}