import fs from 'fs/promises'

export const getAge = async (req, res) => {
    try {
        const response = await fs.readFile('./students.json')
        const students = await JSON.parse(response)
        const age = parseInt(req.params.age);
        const results = students.filter(student => student.age === age);
        if (results.length > 0) {
            res.send(results);
        } else {
            res.status(404).send('student age not found');
        }
    } catch (error) {
        res.status(500)
        res.send('Error occur')
    }

}