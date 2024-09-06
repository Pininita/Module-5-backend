import { readFile } from 'fs/promises'




readFile('numeros.txt', 'utf-8') // aca devuelvo y muestro la info del archivo txt
    .then((data) => {
        let dataToString = data.toString(); // lo pasa a string y quito espacios

       const dataStringToNumbers = dataToString.split('\n') // divido los datos o numeros por lineas de codigo
                                                .map(linea => linea.trim()) // elimino los espacios
                                                .map(element => parseInt(element)) // los convierto a dato tipo numerico
                                                .filter(numero => !isNaN(numero)) // verifico si el dato es tipo numerico y si lo es que lo retorne


        const evenNumbers = dataStringToNumbers.filter(numero => numero % 2 === 0); //se hace un filtrado de los numeros pares
        console.log(evenNumbers); // log de los numeros
    })
    .catch(err => {
        console.error('error en el archivo', err);
    })