import axios from "axios";
import Chance from "chance"

// como en el backen como en el frontend, podemos hacer consultas en API

// const results = await axios.get("https://swapi.dev/api/people/1");
// console.log(results.data.films);

// nodemon es para refrescar la consola y escribir nuevamente npm start
// para instalarla se usa 'npm install --save-dev nodemon'

const chance = new Chance()

const nombre = chance.name()
const email = chance.email({domain: 'helloworld.com'})
const fechaNacimiento = chance.birthday({string: true, american: false})
const telefono = chance.phone({formatted: true, country: 'uk'})
const ciudad = chance.city()
const edad = chance.age({type: 'teen'})
const cedula = chance.ssn({ssnFour: true})
const animalPreferido = chance.animal()


console.log('datos aleatorios generados');
console.log('nombre:', nombre);
console.log('email:', email);
console.log('fecha de nacimiento:', fechaNacimiento);
console.log('telefono:', telefono);
console.log('ciudad:', ciudad);
console.log('edad:', edad);
console.log('cedula:', cedula);
console.log('animal favorito:', animalPreferido);