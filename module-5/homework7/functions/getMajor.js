import fs from 'fs/promises'

export const getMajor = async (req, res) => {
    const response = await fs.readFile('./students.json')
    const students = await JSON.parse(response)
    const major = req.params.major;
    const results = students.filter((student) => student.major == major)
    if (results.length > 0) {
        res.send(results)
    }
    else {
        res.status(404)
        res.send('student major not found')
    }
}