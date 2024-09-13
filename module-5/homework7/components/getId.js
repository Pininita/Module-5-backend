import React from 'react'

export const getId = (req, res) => {
    const id = parseInt(req.params.id);
    const results = students.filter(student => student.id === id);
    if (results.length > 0) {
        res.send(results);
    } else {
        res.status(404).send('student id not found');
    }
}
