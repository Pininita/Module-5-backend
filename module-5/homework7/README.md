# STUDENTS API (practice)

On this API we will place on practice methods like get, post and delete, also explain the diferent routes to get information.
We will use por 3001.


## REMEMBER TO USE POSTMAN

- We create a new tap and we write "localhost:3001/" and we will get a message.

### students info

- When we use "localhost:3001/students" with method GET we will see students information, with their id, name, age and major.

### Method get:

**ID**: Use "localhost:3001/students/id/(number)" to get any student id

**NAME**: Use "localhost:3001/students/name/(name)" to get any student id

**AGE**: Use "localhost:3001/students/age/(age)" to get any student id

**MAJOR**: Use "localhost:3001/students/major/(major)" to get any student id

### Method post:

To add or update new information we use method GET and over the bar we type "localhost:3001/students/add" we go to body, and under body we have to choose "raw", and it allows you to type information type JSON, so you con type this as an example:

```json
    {
    "id": 4,
    "name": "Alice",
    "age": 25,
    "major": "Computer Science"
    }
```

And send it as post method.

### Method delete:

To remove information that we add, we have to do it from the ID, so we use delte method and we type "localhost:3001/students/remove/(student id)", we send the request and the student will be remove or delete.