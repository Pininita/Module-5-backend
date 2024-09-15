import fs from 'fs/promises'
import { students } from '../index.js'

export const postStudents = async (req, res) => {
    students.push(req.body)
    await fs.writeFile('./students.json', JSON.stringify(students))
    res.send(`student add ${req.body.name}`)
}