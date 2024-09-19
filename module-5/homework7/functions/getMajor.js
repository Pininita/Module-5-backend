import fs from 'fs/promises'

export const getMajor = async (req, res) => {
    try {
        const response = await fs.readFile('./students.json')
        const students = await JSON.parse(response)
        const major = req.params.major;
        const results = students.filter((student) => student.major.toLowerCase() == major.toLowerCase())
        if (results.length > 0) {
            res.send(results)
        }
        else {
            res.status(404)
            res.send('student major not found')
        }
    } catch (error) {
        res.status(500)
        res.send('Error occur')

    }

}