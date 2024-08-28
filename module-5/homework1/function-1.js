// punto 1

let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];

let Autor2 = libros[1].autor

// imprimiendo nombre 2
console.log(Autor2);

// actualizando paginas primer libro

libros[0].paginas=350
console.log(libros[0].paginas);

// Imprime en la consola la información completa del primer libro después de la actualización.

console.log(libros[0]);

// Utiliza la función map para generar un nuevo array de
//  libros que solo tenga las propiedades titulo y autor

let nuevoArray = libros.map(
    (libro) => ({
        titulo: libro.titulo,
        autor: libro.autor
    })
)

console.log(nuevoArray);

// punto 2

const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

// Calcula la suma de las edades de todos los estudiantes en el array

let arrayPromedios = estudiantes.map((estudiante) => (estudiante.promedio))

let sumaTotalPromedio = arrayPromedios.reduce((elemento,sumatoria) => elemento + sumatoria)

console.log(sumaTotalPromedio);

// Calcula el promedio de edad de los estudiantes.

let arrayEdades = []
for (const age of estudiantes) {
    arrayEdades.push(age.edad)
}

console.log(arrayEdades);

const sumaEdades = arrayEdades.reduce((acumulador, valorActual) => acumulador + valorActual,0)

// Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.

console.log(sumaEdades);

let sumaCadaEdad = estudiantes.length

console.log(sumaCadaEdad);

let promedioEdades = sumaEdades / sumaCadaEdad

console.log(promedioEdades);

// punto 3

let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];

// Utilizando filter debes cfiltrar productos que tengan la categoría 'Ropa' e imprimirlos en pantalla.

let justRopa = productos.filter((element) => element.categoria == 'Ropa')

console.log(justRopa);

// Filtra los productos con precio mayor de 30 en un nuevo array llamado preciosMayores.

let preciosMayores = productos.filter((element) => element.precio > 30)

console.log(preciosMayores);